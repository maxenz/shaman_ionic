import {Injectable} from '@angular/core';

@Injectable()
export class ViewsUtilsService{

  constructor() {
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


}
