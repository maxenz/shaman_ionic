import {Injectable} from '@angular/core';
import {UserSettingsModel} from "../models/models";
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {DiagnosisModel} from "../models/models";
import {ReasonModel} from "../models/reason.model";


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

  getDiagnosis() {
    if (this.diagnosis.length > 0) {
      return Observable.of(this.diagnosis);
    } else {
      return this.http.get(`${this.getSettings().urlApi}/diagnosis?licencia=${this.getSettings().license}`)
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
      return this.http.get(`${this.getSettings().urlApi}/reasons?licencia=${this.getSettings().license}`)
        .map(response => {
          this.reasons = response.json().map(reason => {
            return new ReasonModel(reason);
          });
          return this.reasons;
        });
    }
  }

}


