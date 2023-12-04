export type Category = {
  field: string;
  activeTitle: string[];
};

export type TemperatureCategoryList = {
  userCompetition: Category;
  userOutside: Category;
  userQnet: Category;
  userLanguage: Category;
  userIntern: Category;
};
