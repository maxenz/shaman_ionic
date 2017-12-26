import {AccessTimeModel} from "../models/access-time.model";

export class AccessTimeViewModel {
  legajo: string;
  dni: number;
  tipoMovimiento: number;
  telefono: number;
  movil: number;

  constructor(model : AccessTimeModel) {
    this.legajo = model.docket;
    this.dni = model.dni;
    this.tipoMovimiento = model.registerType;
    this.telefono = 0;
  }

}
