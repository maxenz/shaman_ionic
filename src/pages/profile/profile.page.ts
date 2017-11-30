import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, AlertController } from 'ionic-angular';
import { AccessTimePage, LoginPage } from '../pages';
import {AppSettingsService, AuthService} from '../../shared/shared';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.page.html',
})

export class ProfilePage {

  accessTimeEnabled: boolean;

  constructor(private nav: NavController,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private appSettingsService: AppSettingsService,
              private authService: AuthService) {          

  }

  ionViewDidEnter() {
    this.accessTimeEnabled = this.appSettingsService.getSettings().accessTimeEnabled;
  }

  goToAccessTimePage() {
  	this.nav.push(AccessTimePage);
  }

  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Cierre de sesión',
      message: '¿Está seguro que desea cerrar sesión?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.authService.logout().then(() =>  this.nav.parent.parent.setRoot(LoginPage));        
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}
