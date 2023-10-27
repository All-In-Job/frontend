type ExamSchedule = {
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
  id?: string;
  title: string;
  engJmNm?: string | null;
  relatedDepartment: string;
  scrap: number;
  view: number;
  institution: string;
  examSchedules?: ExamSchedule[];
  image: string;
};

export interface CertificateItemProps extends Certificate {
  location: 'page' | 'main';
}
