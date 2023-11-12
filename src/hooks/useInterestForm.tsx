import { useState } from 'react';

type InterestTagsType = Array<{
  name: (typeof tags)[number];
  keyWords: string[];
}>;

type InterestFormState = {
  subMajor: string;
  interestTags: InterestTagsType;
};

const tags = ['공모전', '대외활동', '자격증', '어학', '인턴'] as const;

export const useInterestForm = () => {
  const [formState, setFormState] = useState<InterestFormState>({
    subMajor: '',
    interestTags: [...tags.map(tag => ({ name: tag, keyWords: [] }))],
  });

  console.log(formState);

  return {
    formState,
    setFormState,
  };
};
