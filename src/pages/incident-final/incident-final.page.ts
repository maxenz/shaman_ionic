import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';
import {IncidentModel, UserSettingsModel, IncidentFinalModel} from "../../models/models";
import {
  AutocompleteDiagnosisService,
  AutocompleteReasonsService,
  AppSettingsService,
  ViewsUtilsService
} from "../../shared/shared";
import {ReasonModel} from "../../models/reason.model";

@Component({
  selector: 'page-incident-final',
  templateUrl: 'incident-final.page.html',
})
export class IncidentFinalPage {
  incident: IncidentModel;
  settings: IncidentFinalModel = new IncidentFinalModel();
  diagnosisList = [];
  reasonsList = [];
  appSettings: UserSettingsModel = new UserSettingsModel();

  constructor(private navParams: NavParams,
              private autocompleteDiagnosisService: AutocompleteDiagnosisService,
              private autocompleteReasonsService: AutocompleteReasonsService,
              private appSettingsService: AppSettingsService,
              private viewsUtilsService: ViewsUtilsService) {
    this.incident = navParams.data;
    this.appSettingsService.getDiagnosis().subscribe(data => this.diagnosisList = data);
    this.appSettingsService.getReasons().subscribe(data => this.reasonsList = data);
    this.appSettings = this.appSettingsService.getSettings();
  }

  diagnosisCodeHandler() {
    return this.blurInputHandler('diagnosisCode', 'diagnosisDescription', this.diagnosisList, true);
  }

  diagnosisDescriptionSelected() {
    return this.blurInputHandler('diagnosisDescription', 'diagnosisCode', this.diagnosisList, false);
  }

  reasonsCodeHandler() {
    return this.blurInputHandler('reasonCode', 'reasonDescription', this.reasonsList, true);
  }

  reasonsDescriptionSelected() {
    return this.blurInputHandler('reasonDescription', 'reasonCode', this.reasonsList, false);
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
        return true;
      }
    }

    return false;
  }

  diagnosisIsValid() {
    return this.diagnosisCodeHandler();
  }

  reasonIsValid() {
    return this.reasonsCodeHandler();
  }

  getReasonIdByCode() {
    let reasons = this.reasonsList.filter(r => {
      return this.settings.reasonCode === r.code;
    });

    return reasons[0].id;
  }

  getDiagnosisIdByCode() {
    let diagnosis = this.diagnosisList.filter(d => {
      return this.settings.diagnosisCode === d.code;
    });

    return diagnosis[0].id;
  }

  saveChanges() {

    if (this.incident.clasificationId === 0) {
      // --> Valido que si fue un incidente que se realizó, tenga seteado codigo y descripción de diagnóstico
      if (this.settings.serviceWasDone) {
        if (!this.settings.diagnosisCode || !this.settings.diagnosisDescription) {
          this.viewsUtilsService.setToast('Debe ingresar el código y descripción del diagnóstico', 'toast-error');
          return;
        }
      }
    }

    // --> Valido que si fue un incidente o derivación que no se realizó, tenga seteado codigo y descripción de motivo de no realización
    if (!this.settings.serviceWasDone) {
      if (!this.settings.reasonCode || !this.settings.reasonDescription) {
        this.viewsUtilsService.setToast('Debe ingresar el código y descripción del motivo de no realización', 'toast-error');
        return;
      }
    }

    if (this.settings.serviceWasDone && this.incident.clasificationId === 1) {
      if (!this.settings.derivationTime) {
        this.viewsUtilsService.setToast('Debe ingresar el tiempo de demora de la derivación', 'toast-error');
        return;
      }
    }

    if (this.incident.clasificationId === 0 || (this.incident.clasificationId === 1 && !this.settings.serviceWasDone)) {
      if ((this.settings.serviceWasDone && !this.diagnosisIsValid()) || (!this.settings.serviceWasDone && !this.reasonIsValid())) {
        this.viewsUtilsService.setToast('Código o descripción son inválidos.', 'toast-error');
      }

      if (this.settings.serviceWasDone) {
        this.settings.diagnosisId = this.getDiagnosisIdByCode();
      } else {
        this.settings.reasonId = this.getReasonIdByCode();
      }

    }
  }
}
