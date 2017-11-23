import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs';
import {IncidentModel, MedicalHistoryModel} from "../models/models";
import {Observable} from "rxjs/Observable";

@Injectable()
export class IncidentsApi {

  private baseUrl = 'http://shaman.brazilsouth.cloudapp.azure.com:57778/api';
  private license = '5688923116';
  private mobileNumber = 21;

  constructor(private http: Http) {
  }

  getIncidents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/services?licencia=${this.license}&idMovil=${this.mobileNumber}`)
      .map(response => {
        return response.json().map(incident => {
          return new IncidentModel(incident);
        });
      });
  }

  getIncident(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/services/${id}?licencia=${this.license}&idMovil=${this.mobileNumber}`)
      .map(response => {
        return new IncidentModel(response.json());
      });
  }

  getMedicalHistory(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/clinicalhistory/${id}?licencia=${this.license}`)
      .map(response => {
        return response.json().map(medicalHistory => {
          return new MedicalHistoryModel(medicalHistory);
        });
      });
  }

}
