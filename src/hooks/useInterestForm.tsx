import { useState } from 'react';

import { interestTags } from 'components/InterestForm/data/interestTags';
import { TagName } from 'components/InterestForm/InterestFieldSetup';

export type InterestTagsType = Record<TagName, string[]>;

export type InterestFormState = {
  mainMajor: string;
  subMajor: string;
  interests: InterestTagsType;
};

export const useInterestForm = () => {
  const [formState, setFormState] = useState<InterestFormState>({
    mainMajor: '',
    subMajor: '',
    interests: {
      공모전: [interestTags[0].keyWords[0]],
      대외활동: [],
      어학: [],
      인턴: [],
      자격증: [],
    },
  });

  return {
    formState,
    setFormState,
  };
};
