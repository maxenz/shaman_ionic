import {Component, Input} from '@angular/core';

@Component({
  selector: 'incident-preview',
  templateUrl: './incident-preview.component.html'
})
export class IncidentPreviewComponent {
  @Input() incident;
  constructor() {

  }

  // ngViewAfterInit() {
  //   console.log(this.incident);
  // }

}
