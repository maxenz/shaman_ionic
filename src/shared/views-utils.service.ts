import {Injectable} from '@angular/core';
import {ToastController} from "ionic-angular";

@Injectable()
export class ViewsUtilsService {

  constructor(private toastCtrl: ToastController) {
  }

  getClassesByIncidentGrade(obj) {
    switch (obj.grade) {
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

  setToast(message, cssClass) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      cssClass: cssClass
    });
    toast.present();
  }


}
