import { Dispatch, FC, SetStateAction, useEffect } from 'react';

import { InterestFieldSetup, TagName } from 'components/InterestForm/InterestFieldSetup';
import { InterestTagsType } from 'hooks/useInterestForm';

import { MyInfoFormState } from './MyInfoUpdateModal';

type Props = {
  state: MyInfoFormState;
  setState: Dispatch<SetStateAction<MyInfoFormState>>;
  tempInterests: { interests: InterestTagsType };
  setTempInterests: Dispatch<SetStateAction<{ interests: InterestTagsType }>>;
};

const interestMap = {
  공모전: 'competition',
  인턴: 'intern',
  어학: 'language',
  자격증: 'qnet',
  대외활동: 'outside',
} as const;

export const InterestFieldSection: FC<Props> = ({
  state,
  setState,
  tempInterests,
  setTempInterests,
}) => {
  useEffect(() => {
    let i = 0;
    const tempInterestKeywords: { interest: string; keyword: string[] }[] = [];
    for (const key in tempInterests.interests) {
      tempInterestKeywords[i] = {
        interest: interestMap[key as TagName],
        keyword: tempInterests.interests[key as TagName],
      };
      i++;
    }

    setState({ ...state, interestKeyword: tempInterestKeywords });
  }, []);

  return <InterestFieldSetup interestsState={tempInterests} setInterestsState={setTempInterests} />;
};
