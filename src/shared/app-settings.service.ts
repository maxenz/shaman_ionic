import {Injectable} from '@angular/core';
import {AppPreferences} from "@ionic-native/app-preferences";
import {AppSettingsModel} from "../models/app-settings.model";

@Injectable()
export class AppSettingsService {

  constructor(private appPreferences: AppPreferences) {
  }

  saveToAppPreferences(settings: AppSettingsModel) {
    Object.keys(settings).forEach((key) => {
      this.appPreferences.store(null, key, settings[key]);
    });
  }

  getFromAppPreferences() {
    this.appPreferences
      .fetch(null, 'mobileNumber')
      .then(res => console.log(res));
  }

}


