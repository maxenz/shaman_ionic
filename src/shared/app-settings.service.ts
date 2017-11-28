import {Injectable} from '@angular/core';
import {AppSettingsModel} from "../models/app-settings.model";
import {Storage} from '@ionic/storage';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppSettingsService {

  appSettings: AppSettingsModel = new AppSettingsModel();

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
      let settings = new AppSettingsModel();
      this.storage.forEach((val, key) => {
        settings[key] = val;
      })
        .then(() => {
          return resolve(settings);
        });
    });
  }

  saveAppPreferences(settings: AppSettingsModel) {
    Object.keys(settings).forEach((key) => {
      this.storage.set(key, settings[key]);
    });
  }

}


