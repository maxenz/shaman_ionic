import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccessTimeModel} from '../../models/models';
import {ViewsUtilsService, AppSettingsService} from "../../shared/shared";
import {ProfilePage} from "../pages";

@Component({
  selector: 'page-access-time',
  templateUrl: 'access-time.page.html',
})
export class AccessTimePage {

  accessTime: AccessTimeModel = new AccessTimeModel();

  constructor(private navCtrl: NavController,
              private viewsUtilsService: ViewsUtilsService,
              private appSettingsService: AppSettingsService) {
  }

  saveAccessTime() {
    if (!this.accessTime.docket || !this.accessTime.dni || !this.accessTime.registerType) {
      this.viewsUtilsService.setToast('Debe ingresar legajo, dni y tipo de movimiento para registrar el ingreso/egreso.', 'toast-error');
      return;
    }

    this.appSettingsService.setAccessTime(this.accessTime).subscribe((data) => {
      if (data.Code === 200) {
        this.viewsUtilsService.setToast(data.Message, 'toast-success');
        this.navCtrl.setRoot(ProfilePage);
      } else {
        this.viewsUtilsService.setToast(data.Message, 'toast-error');
      }
    }, () => {
      this.viewsUtilsService.setToast('Hubo un error al intentar registrar el ingreso/egreso', 'toast-error');
    });

  }
}
