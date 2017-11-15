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

  constructor(jsonData) {
    this.id = jsonData.IdServicio;
    this.number = jsonData.NroServicio;
    this.grade = jsonData.Grado;
    this.sex = jsonData.Sexo;
    this.age = jsonData.Edad;
    this.address = jsonData.Domicilio;
    this.client = jsonData.Cliente;
    this.time = jsonData.Horario;
    this.locality = jsonData.Localidad;
    this.latitude = jsonData.Latitude;
    this.longitude = jsonData.Longitude;
    this.hexColor = jsonData.ColorHexa;
    this.currentTrip = jsonData.CurrentViaje;
    this.callingTime = jsonData.HorLlamada;
  }
}
