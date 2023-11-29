import { Dispatch, FC, SetStateAction } from 'react';

import { InterestFieldSetup } from 'components/InterestForm/InterestFieldSetup';
import { InterestTagsType } from 'hooks/useInterestForm';

type Props = {
  tempInterests: { interests: InterestTagsType };
  setTempInterests: Dispatch<SetStateAction<{ interests: InterestTagsType }>>;
};

export const InterestFieldSection: FC<Props> = ({ tempInterests, setTempInterests }) => {
  return <InterestFieldSetup interestsState={tempInterests} setInterestsState={setTempInterests} />;
};
