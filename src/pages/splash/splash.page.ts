import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage, TabsPage} from '../pages';
import { AppSettingsService } from '../../shared/shared';

@Component({
  selector: 'page-splash',
  templateUrl: 'splash.page.html',
})
export class SplashPage {

  constructor(
  	private navCtrl: NavController,
   	private navParams: NavParams,
   	private appSettingsService: AppSettingsService
   ) {}

  ionViewDidLoad() {
    setTimeout(() => {
    	this.appSettingsService.initializeConfiguration()
    		.then(() => {
    			let settings = this.appSettingsService.getSettings();
    			if (settings.logged) {
    				this.navCtrl.push(TabsPage);
    			} else {
    				this.navCtrl.push(LoginPage);
    			}    			
    		});
    	
    },2700);
  }

}
