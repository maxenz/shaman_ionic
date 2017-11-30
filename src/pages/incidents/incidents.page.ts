import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {IncidentHomePage, LoginPage} from "../pages";
import {IncidentsApi} from '../../shared/shared';

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

  }

  ionViewDidLoad() {
      this.getIncidents(null);
  }

  getIncidents(refresher) {
    this.incidentsApi.getIncidents()
      .subscribe(data => {
        this.incidents = data;
        if (refresher) {
          refresher.complete();
        }
      });
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
