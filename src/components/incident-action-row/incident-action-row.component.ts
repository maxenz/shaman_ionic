import {Component, Input} from '@angular/core';

@Component({
  selector: 'incident-action-row',
  templateUrl: './incident-action-row.component.html'
})
export class IncidentActionRowComponent {
  @Input() icon : string;
  @Input() title : string;
  constructor() {

  }

}
