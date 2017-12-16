import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppSettingsService} from "./app-settings.service";
import 'rxjs';
import {IncidentModel, MedicalHistoryModel, UserSettingsModel, IncidentFinalModel} from "../models/models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IncidentsApi {

  settings: UserSettingsModel;

  constructor(private http: Http,
              private appSettingsService: AppSettingsService) {
    this.settings = this.appSettingsService.getSettings();
  }

  getIncidents(): Observable<any> {
    return this.http.get(`${this.settings.urlApi}/services?licencia=${this.settings.license}&idMovil=${this.settings.mobileNumber}`)
      .map(response => {
        return response.json().map(incident => {
          return new IncidentModel(incident);
        });
      });
  }

  getIncident(id): Observable<any> {
    return this.http.get(`${this.settings.urlApi}/services/${id}?licencia=${this.settings.license}&idMovil=${this.settings.mobileNumber}`)
      .map(response => {
        return new IncidentModel(response.json());
      });
  }

  getMedicalHistory(id): Observable<any> {
    return this.http.get(`${this.settings.urlApi}/clinicalhistory/${id}?licencia=${this.settings.license}`)
      .map(response => {
        return response.json().map(medicalHistory => {
          return new MedicalHistoryModel(medicalHistory);
        });
      });
  }

  setIncidentExit(incident: IncidentModel): Observable<any> {
    return this.http.post(`${this.settings.url}/actions/setsalidamovil?licencia=${this.settings.license}&movil=${this.settings.mobileNumber}&viajeID=${incident.currentTrip}`, null)
      .map(response => {
        return response.json();
      });
  }

  setIncidentArrival(incident: IncidentModel): Observable<any> {
    return this.http.post(`${this.settings.url}/actions/setllegadamovil?licencia=${this.settings.license}&movil=${this.settings.mobileNumber}&viajeID=${incident.id}`, null)
      .map(response => {
        return response.json();
      });
  }

  setIncidentFinish(incident: IncidentModel, data: IncidentFinalModel): Observable<any> {
    let parameters = `
      reportNumber=${data.reportNumber}
      &licencia=${this.settings.license}
      &movil=${this.settings.mobileNumber}
      &viajeID=${incident.id}
      &motivoID=${data.reasonId}
      &diagnosticoID=${data.diagnosisId}
      &observaciones=${data.observations}
      &copago=${data.copaymentCharged}
      &derivationTime=${data.derivationTime}
    `;
    return this.http.post(`${this.settings.url}/actions/setfinalservicio?${parameters}`, null)
      .map(response => {
        return response.json();
      });
  }

}
