import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {AppSettingsService} from "./shared";
import {Storage} from '@ionic/storage';

@Injectable()
export class AuthService {

  constructor(private appSettingsService: AppSettingsService,
              private storage: Storage,
              private http: Http) {

  }

  public login(credentials) {
    if (!credentials.license || !credentials.password) {
      return Observable.throw("Debe ingresar sus datos para iniciar sesión.");
    } else {
      let url = `${this.appSettingsService.getSettings().urlGestion}/android/login?user=${credentials.license}&password=${credentials.password}&log=0`;
      return this.http.get(url)
        .map(response => {
          return response.json();
        });
    }
  }

  public logout() {
    return new Promise(resolve => {
      this.storage.set('logged', false);
      return resolve();
    });
  }

}
