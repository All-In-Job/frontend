export type Category = {
  id: string;
  name: string;
  subCategoryList: string[];
};

export type TemperatureCategoryList = {
  COMPETITION: Category;
  OUT_SIDE_ACTIVITY: Category;
  CERTIFICATE: Category;
  LANGUAGE_STUDY: Category;
  INTERN: Category;
};
