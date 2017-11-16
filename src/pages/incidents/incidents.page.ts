import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {IncidentHomePage} from "../pages";
import {IncidentsApi} from '../../shared/shared';
import {IncidentModel} from '../../models/models';

@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.page.html',
})
export class IncidentsPage {
  private incidents: any[];
  queryText: string;

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private incidentsApi: IncidentsApi) {
    let incident1 = {
      number: 11,
      iconClass: 'icon-circle-red',
      badgeClass: 'red'
    };

  }

  ionViewDidLoad() {
    this.incidentsApi.getIncidents()
      .subscribe(data => this.incidents = data);
  }

  searchIncidents() {
    console.log(this.queryText);
  }

  goToIncidentDetails($event, incident) {
    let loader = this.loadingController.create({
      content: 'Cargando incidente...',
      dismissOnPageChange: true
    });
    loader.present();
    this.incidentsApi.getIncident(incident.id)
      .subscribe(incDetail => this.nav.push(IncidentHomePage, incDetail));
  }

}
