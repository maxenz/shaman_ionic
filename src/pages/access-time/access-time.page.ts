import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AccessTimeModel} from '../../models/models';

@Component({
  selector: 'page-access-time',
  templateUrl: 'access-time.page.html',
})
export class AccessTimePage {

	accessTime : AccessTimeModel = new AccessTimeModel();

  constructor(
  	public navCtrl: NavController,
   	public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessTimePage');
  }

  saveAccessTime() {
  	console.log(this.accessTime);
  }

}
