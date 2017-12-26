import {Injectable} from '@angular/core';
import {UserSettingsModel} from "../models/models";
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {DiagnosisModel} from "../models/models";
import {ReasonModel, AccessTimeModel} from "../models/models";
import {AccessTimeViewModel} from "../viewmodels/viewmodels";

@Injectable()
export class AppSettingsService {

  appSettings: UserSettingsModel = new UserSettingsModel();
  diagnosis = [];
  reasons = [];

  constructor(private storage: Storage, private http: Http) {
  }

  initializeConfiguration() {
    return new Promise(resolve => {
      this.getAppPreferences()
        .then(data => {
          this.appSettings = data;
          return resolve();
        });
    })

  }

  getSettings() {
    return this.appSettings;
  }

  getAppPreferences(): Promise<any> {
    return new Promise(resolve => {
      let settings = new UserSettingsModel();
      this.storage.forEach((val, key) => {
        settings[key] = val;
      })
        .then(() => {
          return resolve(settings);
        });
    });
  }

  saveAppPreferences(settings: UserSettingsModel) {
    this.appSettings = settings;
    Object.keys(settings).forEach((key) => {
      this.storage.set(key, settings[key]);
    });
  }

  saveLicense(license) {
    return this.storage.set('license', license);
  }

  saveUrl(url) {
    return this.storage.set('url', url);
  }

  getDiagnosis() {
    if (this.diagnosis.length > 0) {
      return Observable.of(this.diagnosis);
    } else {
      return this.http.get(`${this.getSettings().getUrlApi()}/diagnosis?licencia=${this.getSettings().license}`)
        .map(response => {
          this.diagnosis = response.json().map(diagnosis => {
            return new DiagnosisModel(diagnosis);
          });
          return this.diagnosis;
        });
    }
  }

  getReasons() {
    if (this.reasons.length > 0) {
      return Observable.of(this.reasons);
    } else {
      return this.http.get(`${this.getSettings().getUrlApi()}/reasons?licencia=${this.getSettings().license}`)
        .map(response => {
          this.reasons = response.json().map(reason => {
            return new ReasonModel(reason);
          });
          return this.reasons;
        });
    }
  }

  setAccessTime(accessTime: AccessTimeModel) {

    // --> Convierto el model a un viewmodel que entienda el backend
    let vm = new AccessTimeViewModel(accessTime);
    vm.movil = this.getSettings().mobileNumber;

    return this.http.post(`${this.getSettings().getUrlApi()}/mobileaccesstime?licencia=${this.getSettings().license}`, vm)
      .map(response => {
        return response.json();
      });
  }
}


