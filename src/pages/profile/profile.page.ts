import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.page.html',
})
export class ProfilePage {

  constructor(private nav: NavController,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
