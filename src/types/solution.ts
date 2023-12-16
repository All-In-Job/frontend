export type SolutionProps = {
  outside: CommonProps;
  competition: CommonProps;
  intern: internProps;
  qnet: qnetProps;
};

type SharedFields = {
  Dday: string;
  enterprise: string;
  interests: string;
  target: string;
};

type CommonProperties = {
  id: string;
  title: string;
  mainImage: string;
};

export type CommonProps = SharedFields & CommonProperties;

export type internProps = CommonProperties & {
  closeDate: string;
  location: string;
  preferentialTreatment: string;
};

export type qnetProps = {
  id: string;
  title: string;
  mainImage: string;
  institution: string;
  ptPeriod: string;
  wtPeriod: string;
};
