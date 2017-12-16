import {AddressModel} from "./address.model";
import {AddressTypeEnum} from "../enums/addressType.enum";

export class IncidentModel {

  id: number;
  number: string;
  grade: string;
  sex: string;
  age: number;
  address: string;
  client: string;
  time: string;
  locality: string;
  latitude: number;
  longitude: number;
  hexColor: string;
  currentTrip: number;
  callingTime: Date;
  institution: string;
  exitEnabled: boolean;
  arrivingEnabled: boolean;
  finalEnabled: boolean;
  cancelationEnabled: boolean;
  date: Date;
  affiliateNumber: string;
  warning: string;
  symptom: string;
  diagnosis: string;
  symptomItems: string;
  patient: string;
  planId: string;
  copayment: number;
  observations: string;
  phoneNumber: string;
  clasificationId: number;
  renameEnabled: boolean;
  derivationEnabled: boolean;
  principalAddress: AddressModel;
  derivationAddress: AddressModel;

  constructor(data) {
    this.id = data.IdServicio;
    this.number = data.NroServicio;
    this.grade = data.Grado;
    this.sex = data.Sexo;
    this.age = data.Edad;
    this.address = data.Domicilio;
    this.principalAddress = new AddressModel(data, AddressTypeEnum.Generic);
    this.client = data.Cliente;
    this.time = data.Horario;
    this.locality = data.Localidad;
    this.latitude = data.Latitude;
    this.longitude = data.Longitude;
    this.hexColor = data.ColorHexa;
    this.currentTrip = data.CurrentViaje;
    this.callingTime = data.HorLlamada;
    this.institution = data.Institucion;
    this.exitEnabled = data.HabSalida;
    this.arrivingEnabled = data.HabLlegada;
    this.finalEnabled = data.HabFinal;
    this.cancelationEnabled = data.HabCancelacion;
    this.date = data.FecIncidente;
    this.affiliateNumber = data.NroAfiliado;
    this.warning = data.Aviso;
    this.symptom = data.Sintomas;
    this.diagnosis = data.Diagnostico;
    this.symptomItems = data.SintomasItems;
    this.patient = data.Paciente;
    this.planId = data.PlanId;
    this.copayment = data.CoPago;
    this.observations = data.Observaciones;
    this.phoneNumber = data.Telefono;
    this.clasificationId = data.ClasificacionId;
    this.renameEnabled = data.FlgEnabled;
    this.derivationEnabled = data.FlgDerivacion;
    if (this.derivationEnabled) {
      this.derivationAddress = new AddressModel(data, AddressTypeEnum.Derivation);
    }
  }
}
