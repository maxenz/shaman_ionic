import {DescriptionableModel} from "./descriptionable.model";

export class ReasonModel extends DescriptionableModel {
  constructor(jsonData : any) {
    super();
    this.id = jsonData.ID;
    this.code = jsonData.AbreviaturaId;
    this.description = jsonData.Descripcion;
  }
}
