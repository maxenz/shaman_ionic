import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-incident-details',
  templateUrl: 'incident-details.page.html',
})
export class IncidentDetailsPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncidentDetailsPage');
  }

}
