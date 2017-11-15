import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.page.html',
})
export class SettingsPage {

  isApp: boolean;
  shamanVersion: string;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private appVersion: AppVersion) {

    this.isApp = (!document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080'));
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
}
