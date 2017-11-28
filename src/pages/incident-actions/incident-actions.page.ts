import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, ToastController, AlertController} from 'ionic-angular';
import {IncidentModel} from "../../models/models";
import {MedicalHistoryPage} from "../pages";
import {IncidentsApi} from "../../shared/shared";

declare var window: any;

@Component({
  selector: 'page-incident-actions',
  templateUrl: 'incident-actions.page.html',
})
export class IncidentActionsPage {

  incident: IncidentModel;

  constructor(private nav: NavController,
              private navParams: NavParams,
              private loadingCtrl: LoadingController,
              private incidentsApi: IncidentsApi,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController) {
    this.incident = navParams.data;
  }

  goToDirection() {
    window.location = `geo:${this.incident.latitude},${this.incident.longitude};u=35`;
  }

  goToMedicalHistory() {
    let loader = this.loadingCtrl.create({
      content: 'Cargando historia clínica...',
      dismissOnPageChange: true
    });
    loader.present();

    this.incidentsApi.getMedicalHistory(this.incident.id)
      .subscribe(medicalHistory => {
        if (medicalHistory.length > 0) {
          this.nav.parent.parent.push(MedicalHistoryPage, medicalHistory);
        } else {
          let toast = this.toastCtrl.create({
            message: 'El paciente no posee historia clínica.',
            duration: 2500
          });
          loader.dismiss();
          toast.present();
        }
      });
  }

  setIncidentExit() {
    let confirm = this.alertCtrl.create({
      title: 'Salida del incidente',
      message: '¿Está seguro que desea darle salida al incidente?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  setIncidentArrival() {
    let confirm = this.alertCtrl.create({
      title: 'Llegada del incidente',
      message: '¿Está seguro que desea darle llegada al incidente?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            console.log('Agree clicked');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}
