import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import {IncidentModel} from "../../models/models";
import {MedicalHistoryPage, IncidentFinalPage} from "../pages";
import {IncidentsApi, ViewsUtilsService} from "../../shared/shared";
import {IncidentsPage} from "../incidents/incidents.page";

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
              private viewsUtilsService: ViewsUtilsService,
              private alertCtrl: AlertController) {
    this.incident = navParams.data;
  }

  goToDirection() {
    window.location = `geo:${this.incident.latitude},${this.incident.longitude};u=35`;
  }

  goToIncidentFinal() {
    this.nav.parent.parent.push(IncidentFinalPage, this.incident);
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
          loader.dismiss();
          this.viewsUtilsService.setToast('El paciente no posee historia clínica', '');
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
            this.incidentsApi.setIncidentExit(this.incident).subscribe((data) => {
              this.viewsUtilsService.setToast(data.Message, 'toast-success');
              this.nav.parent.parent.setRoot(IncidentsPage);
            }, () => {
              this.viewsUtilsService.setToast('Hubo un error al darle salida al incidente.', 'toast-error');
            });
          }
        },
        {
          text: 'No'
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
            this.incidentsApi.setIncidentArrival(this.incident).subscribe((data) => {
              this.viewsUtilsService.setToast(data.Message, 'toast-success');
              this.nav.parent.parent.setRoot(IncidentsPage);
            }, () => {
              this.viewsUtilsService.setToast('Hubo un error al darle llegada al incidente.', 'toast-error');
            });
          }
        },
        {
          text: 'No'
        }
      ]
    });
    confirm.present();
  }

}
