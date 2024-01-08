export type ExamSchedule = {
  id: string;
  turn: string;
  wtReceipt: string;
  wtDday: string;
  wtResultDay: string;
  ptReceipt: string;
  ptDday: string;
  resultDay: string;
};

export type Certificate = {
  type: 'certificate';
  id: string;
  title: string;
  relatedDepartment: string;
  scrap: number;
  view: number;
  institution: string;
  examSchedules: ExamSchedule[];
  mainImage: string;
  enTitle: string;
  isScrap: boolean | undefined;
  path: string;
};

export interface CertificateItemProps extends Certificate {
  location: 'page' | 'main';
}
