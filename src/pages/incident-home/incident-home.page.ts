import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {IncidentDetailsPage, IncidentActionsPage} from "../pages";

@Component({
  selector: 'page-incident-home',
  templateUrl: 'incident-home.page.html',
})
export class IncidentHomePage {
  incident: any;
  incidentDetailsTab = IncidentDetailsPage;
  incidentActionsTab = IncidentActionsPage;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.incident = navParams.data;
  }
}
