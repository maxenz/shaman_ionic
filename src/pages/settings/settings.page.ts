import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {AppSettingsModel} from "../../models/models";
import {AppSettingsService} from "../../shared/shared";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {

  isApp: boolean;
  shamanVersion: string;
  settings: AppSettingsModel;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private appVersion: AppVersion,
              private appSettingsService: AppSettingsService) {

    this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
    this.settings = new AppSettingsModel();
  }

  ionViewDidLoad() {
    if (this.isApp) {
      this.appVersion.getAppName().then(data => {
        this.shamanVersion = data;
      });
    } else {
      this.shamanVersion = 'Versión no disponible';
    }

    this.appSettingsService.getFromAppPreferences();
  }

  saveChanges() {
    this.appSettingsService.saveToAppPreferences(this.settings);
  }

}
