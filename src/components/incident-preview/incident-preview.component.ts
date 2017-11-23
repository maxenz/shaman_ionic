import {Component, Input} from '@angular/core';
import {ViewsUtilsService} from "../../shared/shared";

@Component({
  selector: 'incident-preview',
  templateUrl: './incident-preview.component.html'
})
export class IncidentPreviewComponent {
  @Input() incident;

  constructor(private viewsUtilsService : ViewsUtilsService) {

  }

  getClassesByIncidentGrade() {
    return this.viewsUtilsService.getClassesByIncidentGrade(this.incident);
  }
}
