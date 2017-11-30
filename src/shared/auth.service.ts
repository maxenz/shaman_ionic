import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {UserSettingsModel} from "../models/models";
import {Observable} from "rxjs/Observable";
import {AppSettingsService} from "./shared";
import {Storage} from '@ionic/storage';

@Injectable()
export class AuthService {

  currentUser: UserSettingsModel;

  constructor(
  private appSettingsService: AppSettingsService,
  private storage: Storage) {

  }

  public login(credentials) {
    if (credentials.license === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.license === "email");
        this.storage.set('logged', access);
        observer.next(access);
        observer.complete();
      });
    }
  }

  public getUserInfo() : UserSettingsModel {
    return this.appSettingsService.getSettings();
  }

  public logout() {
    return new Promise(resolve => {
      this.storage.set('logged', false);
      return resolve();
    });
  }

}
