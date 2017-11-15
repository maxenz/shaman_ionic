import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-incident-details',
  templateUrl: 'incident-details.page.html',
})
export class IncidentDetailsPage {

  detailSections: any[];
  incident: any;

  constructor(private navCtrl: NavController, private navParams: NavParams) {

    this.incident = navParams.data;
    this.detailSections = [
      {
        name: 'Servicio',
        children: [
          {
            "name": "Pizza Academy",
            "information": "Frankfurter tail capicola cupim shankle salami, beef ribs beef boudin porchetta ball tip leberkas turkey tenderloin.",
            "price": "$25"
          },
          {
            "name": "Pizza Ionic",
            "information": "Shank chuck tail, kevin shankle ham hock pork loin pork hamburger beef ribs.",
            "price": "$19.99"
          }
        ]
      },
      {
        name: 'Domicilio',
        "children": [
          {
            "name": "Pizza Academy",
            "information": "Frankfurter tail capicola cupim shankle salami, beef ribs beef boudin porchetta ball tip leberkas turkey tenderloin.",
            "price": "$25"
          },
          {
            "name": "Pizza Ionic",
            "information": "Shank chuck tail, kevin shankle ham hock pork loin pork hamburger beef ribs.",
            "price": "$19.99"
          }
        ]
      },
      {
        name: 'Síntomas',
        "children": [
          {
            "name": "Pizza Academy",
            "information": "Frankfurter tail capicola cupim shankle salami, beef ribs beef boudin porchetta ball tip leberkas turkey tenderloin.",
            "price": "$25"
          },
          {
            "name": "Pizza Ionic",
            "information": "Shank chuck tail, kevin shankle ham hock pork loin pork hamburger beef ribs.",
            "price": "$19.99"
          }
        ]
      },
      {
        name: 'Derivación',
        "children": [
          {
            "name": "Pizza Academy",
            "information": "Frankfurter tail capicola cupim shankle salami, beef ribs beef boudin porchetta ball tip leberkas turkey tenderloin.",
            "price": "$25"
          },
          {
            "name": "Pizza Ionic",
            "information": "Shank chuck tail, kevin shankle ham hock pork loin pork hamburger beef ribs.",
            "price": "$19.99"
          }
        ]
      }
    ];
  }

  toggleSection(i) {
    this.detailSections[i].open = !this.detailSections[i].open;
  }

}
