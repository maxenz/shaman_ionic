import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {IncidentModel} from "../../models/incident.model";
import {IncidentFinalModel} from "../../models/incident-final.model";
import {Http} from "@angular/http";
import {AutocompleteDiagnosisService} from "../../shared/shared";

@Component({
  selector: 'page-incident-final',
  templateUrl: 'incident-final.page.html',
})
export class IncidentFinalPage {
  incident: IncidentModel;
  settings: IncidentFinalModel = new IncidentFinalModel();

  constructor(private navParams: NavParams,
              private http: Http,
              public autocompleteDiagnosisService: AutocompleteDiagnosisService) {
    this.incident = navParams.data;
  }



}
