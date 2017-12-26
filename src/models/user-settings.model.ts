export class UserSettingsModel{

  mobileNumber: number;
  url: string;
  license: string;
  reportWhenClosingIncidentEnabled: boolean;
  imageWhenClosingIncidentEnabled: boolean;
  incidentCancelationEnabled: boolean;
  accessTimeEnabled: boolean;
  logged: boolean;
  urlGestion = 'http://paramedicapps.com.ar:57771';

  getUrlApi() {
    return this.url + '/api';
  }

}
