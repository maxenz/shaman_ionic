export class UserSettingsModel{

  mobileNumber: number;
  urlApi: string;
  url: string;
  license: string;
  reportWhenClosingIncidentEnabled: boolean;
  imageWhenClosingIncidentEnabled: boolean;
  incidentCancelationEnabled: boolean;
  accessTimeEnabled: boolean;
  logged: boolean;

  constructor() {
    this.urlApi = this.url + '/api';
  }

}
