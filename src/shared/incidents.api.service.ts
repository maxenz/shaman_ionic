import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {AppSettingsService} from "./app-settings.service";
import 'rxjs';
import {IncidentModel, MedicalHistoryModel, UserSettingsModel, IncidentFinalModel} from "../models/models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IncidentsApi {

  constructor(private http: Http,
              private appSettingsService: AppSettingsService) {
  }

  getIncidents(): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    return this.http.get(`${settings.getUrlApi()}/services?licencia=${settings.license}&idMovil=${settings.mobileNumber}`)
      .map(response => {
        return response.json().map(incident => {
          return new IncidentModel(incident);
        });
      });
  }

  getIncident(id): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    return this.http.get(`${settings.getUrlApi()}/services/${id}?licencia=${settings.license}&idMovil=${settings.mobileNumber}`)
      .map(response => {
        return new IncidentModel(response.json());
      });
  }

  getMedicalHistory(id): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    return this.http.get(`${settings.getUrlApi()}/clinicalhistory/${id}?licencia=${settings.license}`)
      .map(response => {
        return response.json().map(medicalHistory => {
          return new MedicalHistoryModel(medicalHistory);
        });
      });
}

  setIncidentExit(incident: IncidentModel): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    return this.http.post(`${settings.url}/actions/setsalidamovil?licencia=${settings.license}&movil=${settings.mobileNumber}&viajeID=${incident.currentTrip}`, null)
      .map(response => {
        return response.json();
      });
  }

  setIncidentArrival(incident: IncidentModel): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    return this.http.post(`${settings.url}/actions/setllegadamovil?licencia=${settings.license}&movil=${settings.mobileNumber}&viajeID=${incident.id}`, null)
      .map(response => {
        return response.json();
      });
  }

  setIncidentFinish(incident: IncidentModel, data: IncidentFinalModel): Observable<any> {
    let settings = this.appSettingsService.getSettings();
    let parameters = `reportNumber=${data.reportNumber}
      &licencia=${settings.license}
      &movil=${settings.mobileNumber}
      &viajeID=${incident.id}
      &motivoID=${data.reasonId}
      &diagnosticoID=${data.diagnosisId}
      &observaciones=${data.observations}
      &copago=${+data.copaymentCharged}
      &derivationTime=${data.derivationTime}`;
    return this.http.post(`${settings.url}/actions/setfinalservicio?${parameters}`, null)
      .map(response => {
        return response.json();
      });
  }

}
