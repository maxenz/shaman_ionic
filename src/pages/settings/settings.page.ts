import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {UserSettingsModel} from "../../models/models";
import {AppSettingsService} from "../../shared/shared";

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {

  isApp: boolean;
  shamanVersion: string;
  settings: UserSettingsModel;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private appVersion: AppVersion,
              private appSettingsService: AppSettingsService) {
    this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
    this.settings = new UserSettingsModel();
    this.appSettingsService.getAppPreferences().then(settings => this.settings = settings);
  }

  ionViewDidLoad() {



    if (this.isApp) {
      this.appVersion.getAppName().then(data => {
        this.shamanVersion = data;
      });
    } else {
      this.shamanVersion = 'Versión no disponible';
    }
  }

  saveChanges() {
    this.appSettingsService.saveAppPreferences(this.settings);
  }

}
