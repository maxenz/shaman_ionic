export class MedicalHistoryModel {

  id: number;
  incidentDate: Date;
  incidentNumber: string;
  hexColor: string;
  grade: string;
  patient: string;
  symptom: string;
  diagnosis: string;
  mobileNumber: string;

  constructor(data) {
    this.id = data.ID;
    this.incidentDate = data.FecIncidente;
    this.incidentNumber = data.NroServicio;
    this.hexColor = data.ColorHexa;
    this.grade = data.Grado;
    this.patient = data.Paciente;
    this.symptom = data.Sintomas;
    this.diagnosis = data.Diagnostico;
    this.mobileNumber = data.Movil;
  }

}
