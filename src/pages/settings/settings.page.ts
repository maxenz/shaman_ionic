import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {AppVersion} from '@ionic-native/app-version';
import {UserSettingsModel} from "../../models/models";
import {AppSettingsService} from "../../shared/shared";
import {ViewsUtilsService} from "../../shared/views-utils.service";

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
              private toastCtrl: ToastController,
              private appVersion: AppVersion,
              private appSettingsService: AppSettingsService,
              private viewsUtilsService: ViewsUtilsService) {
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

    if (!this.settings.mobileNumber) {
      this.viewsUtilsService.setToast('Debe ingresar el número de móvil', 'toast-error');
      return;
    }

    if (!this.settings.license) {
      this.viewsUtilsService.setToast('Debe ingresar la licencia', 'toast-error');
      return;
    }

    if (!this.settings.url) {
      this.viewsUtilsService.setToast('Debe ingresar la url', 'toast-error');
      return;
    }

    this.appSettingsService.saveAppPreferences(this.settings);
    this.viewsUtilsService.setToast('La configuración fue guardada correctamente.', 'toast-success');
  }
}
