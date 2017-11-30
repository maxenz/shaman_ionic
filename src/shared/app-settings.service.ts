import {Injectable} from '@angular/core';
import {UserSettingsModel} from "../models/models";
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppSettingsService {

  appSettings: UserSettingsModel = new UserSettingsModel();

  constructor(private storage: Storage) {
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

}


