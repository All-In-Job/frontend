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
  title: string;
  engJmNm?: string | null;
  relatedDepartment: string;
  scrap: number;
  view: number;
  institution: string;
  examSchedules: ExamSchedule[];
};
