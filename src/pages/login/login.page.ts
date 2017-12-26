import {Component} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading} from 'ionic-angular';
import {AuthService, AppSettingsService} from "../../shared/shared";
import {TabsPage} from "../pages";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-login',
  templateUrl: 'login.page.html',
})
export class LoginPage {
  loading: Loading;
  loginCredentials = {license: '', password: ''};

  constructor(private nav: NavController,
              private authService: AuthService,
              private appSettingsService: AppSettingsService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private storage: Storage) {
  }

  public login() {
    this.showLoading();
    this.authService.login(this.loginCredentials).subscribe(data => {
        if (data.Serial) {
          this.storage.set('logged', true);
          this.appSettingsService
            .saveLicense(data.Serial)
            .then(() => {
              this.appSettingsService.saveUrl(data.AndroidUrl)
                .then(() => {
                  this.appSettingsService.initializeConfiguration().then(() => {
                    this.nav.setRoot(TabsPage);
                  });
                })
            });
        } else {
          this.showError("Los datos ingresados son incorrectos.");
          this.storage.set('logged', false);
        }
      },
      error => {
        this.showError(error);
        this.storage.set('logged', false);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Iniciando sesión...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
