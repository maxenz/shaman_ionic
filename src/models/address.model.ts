import {AddressTypeEnum} from "../enums/enums";

export class AddressModel {

  locality: string;
  zone: string;
  institution: string;
  address: string;
  firstBetweenStreet: string;
  secondBetweenStreet: string;
  reference: string;
  latitude: number;
  longitude: number;

  constructor(data, type) {
    switch (type) {
      case AddressTypeEnum.Generic:
        this.genericConstructor(data);
        break;
      case AddressTypeEnum.Derivation:
        this.derivationConstructor(data);
        break;
    }
  }

  genericConstructor(data) {
    this.locality = data.Localidad;
    this.zone = data.Partido;
    this.institution = data.Institucion;
    this.address = data.Domicilio;
    this.firstBetweenStreet = data.EntreCalle1;
    this.secondBetweenStreet = data.EntreCalle2;
    this.reference = data.Referencia;
    this.latitude = data.Latitud;
    this.longitude = data.Longitude;
  }

  derivationConstructor(data) {
    this.locality = data.DerLocalidad;
    this.zone = data.DerPartido;
    this.institution = data.DerInstitucion;
    this.address = data.DerDomicilio;
    this.firstBetweenStreet = data.DerEntreCalle1;
    this.secondBetweenStreet = data.DerEntreCalle2;
    this.reference = data.DerReferencia;
    this.latitude = data.DerLatitud;
    this.longitude = data.DerLongitude;
  }

}
