import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';

// import { EliteApi, UserSettings} from '../../shared/shared';

@Component({
  selector: 'page-incidents',
  templateUrl: 'incidents.page.html',
})
export class IncidentsPage {
  incident: any;

  constructor(private nav: NavController,
              private loadingController: LoadingController) {
    this.incident = {
      number: 11
    }
  };

}
