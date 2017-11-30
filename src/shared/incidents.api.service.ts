import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {AppSettingsService} from "./app-settings.service";
import 'rxjs';
import {IncidentModel, MedicalHistoryModel, UserSettingsModel} from "../models/models";
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

}
