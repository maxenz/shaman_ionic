import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {IncidentHomePage} from "../pages";

// import { EliteApi, UserSettings} from '../../shared/shared';

@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.page.html',
})
export class IncidentsPage {
  incidents = [];
  queryText: string;

  constructor(private nav: NavController,
              private loadingController: LoadingController) {
    let incident1 = {
      number: 11,
      iconClass: 'icon-circle-red',
      badgeClass: 'red'
    };

    let incident2 = {
      number:12,
      iconClass: 'icon-circle-green',
      badgeClass: 'green'
    };

    let incident3 = {
      number:13,
      iconClass: 'icon-circle-yellow',
      badgeClass: 'yellow'
    };

    this.incidents.push(incident1);
    this.incidents.push(incident2);
    this.incidents.push(incident3);
  }

  searchIncidents() {
    console.log(this.queryText);
  }

  goToIncidentDetails($event, incident) {
    this.nav.push(IncidentHomePage, incident);
  }

}
