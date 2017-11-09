import {Component, Input} from '@angular/core';

@Component({
  selector: 'incident-preview',
  templateUrl: './incident-preview.template.html'
})
export class IncidentPreviewComponent {
  @Input() incident;
  myIncident: any;
  constructor() {

  }

  ngAfterViewInit()
  {
    this.incident.number = 14;
  }
}
