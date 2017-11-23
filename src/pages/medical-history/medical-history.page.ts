import { Component } from '@angular/core';
import {MedicalHistoryModel} from "../../models/models";
import {NavParams } from 'ionic-angular';

@Component({
  selector: 'page-medical-history',
  templateUrl: 'medical-history.page.html',
})
export class MedicalHistoryPage {

  medicalHistory: MedicalHistoryModel[];

  constructor(private navParams: NavParams) {
    this.medicalHistory = navParams.data;
  }

}
