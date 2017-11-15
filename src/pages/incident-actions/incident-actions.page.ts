import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-incident-actions',
  templateUrl: 'incident-actions.page.html',
})
export class IncidentActionsPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }
}
