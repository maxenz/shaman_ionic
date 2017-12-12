import {DescriptionableModel} from "./descriptionable.model";

export class DiagnosisModel extends DescriptionableModel {
  constructor(jsonData : any) {
    super();
    this.id = jsonData.ID;
    this.code = jsonData.AbreviaturaId;
    this.description = jsonData.Descripcion;
  }
}
