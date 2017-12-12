import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {IncidentModel} from "../../models/incident.model";
import {IncidentFinalModel} from "../../models/incident-final.model";
import {AutocompleteDiagnosisService, AutocompleteReasonsService, AppSettingsService} from "../../shared/shared";

@Component({
  selector: 'page-incident-final',
  templateUrl: 'incident-final.page.html',
})
export class IncidentFinalPage {
  incident: IncidentModel;
  settings: IncidentFinalModel = new IncidentFinalModel();
  diagnosisList = [];
  reasonsList = [];

  constructor(private navParams: NavParams,
              private autocompleteDiagnosisService: AutocompleteDiagnosisService,
              private autocompleteReasonsService: AutocompleteReasonsService,
              private appSettingsService: AppSettingsService) {
    this.incident = navParams.data;
    this.appSettingsService.getDiagnosis().subscribe(data => this.diagnosisList = data);
    this.appSettingsService.getReasons().subscribe(data => this.reasonsList = data);
  }

  diagnosisCodeHandler() {
    this.blurInputHandler('diagnosisCode','diagnosisDescription', this.diagnosisList, true);
  }

  diagnosisDescriptionSelected() {
    this.blurInputHandler('diagnosisDescription','diagnosisCode', this.diagnosisList, false);
  }

  reasonsCodeHandler() {
    this.blurInputHandler('reasonCode', 'reasonDescription', this.reasonsList, true);
  }

  reasonsDescriptionSelected() {
    this.blurInputHandler('reasonDescription', 'reasonCode', this.reasonsList, false);
  }

  blurInputHandler(fieldThatIsChanging, fieldToChange, list, isChangingCode) {
    let input = this.settings[fieldThatIsChanging];
    this.settings[fieldToChange] = '';
    if (input) {
      let valueFromInput = input.toLowerCase();
      let vec = list.filter(data => {
        return isChangingCode ? valueFromInput === data.code.toLowerCase() : valueFromInput === data.description.toLowerCase();
      });
      if (vec.length > 0) {
        this.settings[fieldToChange] = isChangingCode ? vec[0].description : vec[0].code;
      }
    }
  }

  saveChanges() {

  }



}
