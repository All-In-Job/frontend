import { useState } from 'react';

import { interestTags } from 'components/InterestForm/data/interestTags';
import { TagName } from 'components/InterestForm/InterestFieldSetup';

export type InterestTagsType = Record<TagName, string[]>;

export type InterestFormState = {
  major: {
    mainMajor: string;
    subMajor: string;
  };
  interests: InterestTagsType;
};

export const useInterestForm = () => {
  const [majorState, setMajorState] = useState<InterestFormState['major']>({
    mainMajor: '',
    subMajor: '',
  });
  const [interestsState, setInterestsState] = useState<{
    interests: InterestFormState['interests'];
  }>({
    interests: {
      공모전: [interestTags[0].keyWords[0]],
      대외활동: [],
      어학: [],
      인턴: [],
      자격증: [],
    },
  });

  // const [formState, setFormState] = useState<InterestFormState>({
  //   major: {
  //     mainMajor: '',
  //     subMajor: '',
  //   },
  //   interests: {
  //     공모전: [interestTags[0].keyWords[0]],
  //     대외활동: [],
  //     어학: [],
  //     인턴: [],
  //     자격증: [],
  //   },
  // });

  return {
    majorState,
    setMajorState,
    interestsState,
    setInterestsState,
  };
};
