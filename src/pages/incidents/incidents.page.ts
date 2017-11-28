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
  tabBarElement: any;
  splash = true;

  constructor(private nav: NavController,
              private loadingController: LoadingController,
              private incidentsApi: IncidentsApi) {

    this.tabBarElement = document.querySelector('.tabbar');

    let incident1 = {
      number: 11,
      iconClass: 'icon-circle-red',
      badgeClass: 'red'
    };
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
      //this.getIncidents(null);
      this.nav.push(LoginPage);
    }, 3000);
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
