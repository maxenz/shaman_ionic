import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {IncidentModel} from '../../models/models';
import {AddressModel} from "../../models/address.model";

@Component({
  selector: 'page-incident-details',
  templateUrl: 'incident-details.page.html',
})
export class IncidentDetailsPage {

  detailSections = [];
  incident: IncidentModel;

  constructor(private navCtrl: NavController,
              private navParams: NavParams) {

    this.incident = navParams.data;
    this.detailSections.push(this.getIncidentSection());
    this.detailSections.push(this.getAddressSection('Domicilio', this.incident.principalAddress));
    if (this.incident.derivationAddress) {
      this.detailSections.push(this.getAddressSection('Derivación', this.incident.derivationAddress));
    }
  }

  toggleSection(i) {
    this.detailSections[i].open = !this.detailSections[i].open;
  }

  getIncidentSection() {
    return {
      name: 'Incidente',
      children: [
        this.getChild('Incidente', this.incident.number),
        this.getChild('Fecha', this.incident.date),
        this.getChild('Teléfono', this.incident.phoneNumber),
        this.getChild('Grado', this.incident.grade),
        this.getChild('Paciente', this.incident.patient),
        this.getChild('Entidad', this.incident.client),
        this.getChild('Nro. de afiliado', this.incident.affiliateNumber),
        this.getChild('Sexo', this.incident.sex),
        this.getChild('Edad', this.incident.age),
        this.getChild('Aviso', this.incident.warning),
        this.getChild('Referencias', this.incident.principalAddress.reference),
        this.getChild('Copago', this.incident.copayment),
        this.getChild('Observaciones', this.incident.observations),
        this.getChild('Plan', this.incident.planId)
      ]
    };
  }

  getAddressSection(name, address: AddressModel) {
    return {
      name: name,
      children: [
        this.getChild('Localidad', address.locality),
        this.getChild('Domicilio', address.address),
        this.getChild('Entre calle primaria', address.firstBetweenStreet),
        this.getChild('Entre calle secundaria', address.secondBetweenStreet),
        this.getChild('Partido', address.zone),
        this.getChild('Institución', address.institution)
      ]
    }
  }

  getChild(name, value) {
    return {
      name: name, value: value
    };
  }
}
