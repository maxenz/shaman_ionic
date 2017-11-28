import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppSettingsService} from "../shared/shared";

import {TabsPage} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, appSettingsService: AppSettingsService) {
    platform.ready()
      .then(() => {
        appSettingsService.initializeConfiguration()
          .then(() => {
            statusBar.styleDefault();
            this.rootPage = TabsPage;
            splashScreen.hide();
          });
      });
  }
}
