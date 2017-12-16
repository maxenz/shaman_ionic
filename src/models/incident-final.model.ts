
export class IncidentFinalModel {
  serviceWasDone: boolean;
  copaymentCharged: boolean;
  diagnosisId: number;
  diagnosisCode: string;
  diagnosisDescription: string;
  reasonId: number;
  reasonCode: string;
  reasonDescription: string;
  observations: string;
  reportNumber: number;
  derivationTime: string;

  constructor() {
    this.diagnosisId = 0;
    this.reasonId = 0;
  }
}
