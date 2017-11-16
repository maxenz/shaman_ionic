import {Component, Input} from '@angular/core';

@Component({
  selector: 'incident-preview',
  templateUrl: './incident-preview.component.html'
})
export class IncidentPreviewComponent {
  @Input() incident;

  constructor() {

  }

  getClassesByIncidentGrade() {
    switch (this.incident.grade) {
      case "R" :
        return this.getColorClass("red");
      case "A" :
        return this.getColorClass("yellow");
      case "V" :
        return this.getColorClass("green");
      default:
        return this.getColorClass("blue");
    }
  }

  getColorClass(color) {
    let iconCirclePrefix = 'icon-circle';
    return {
      iconClass: `${iconCirclePrefix}-${color}`,
      badgeClass: color
    };
  }

}
