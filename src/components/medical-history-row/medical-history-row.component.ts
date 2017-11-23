import {Component, Input} from '@angular/core';
import {MedicalHistoryModel} from '../../models/models';
import {ViewsUtilsService} from "../../shared/shared";

@Component({
  selector: 'medical-history-row',
  templateUrl: './medical-history-row.component.html'
})
export class MedicalHistoryRowComponent {
  @Input() medicalHistory : MedicalHistoryModel;

  constructor(private viewsUtilsService: ViewsUtilsService) {

  }

  getClassesByIncidentGrade() {
    return this.viewsUtilsService.getClassesByIncidentGrade(this.medicalHistory);
  }

}
