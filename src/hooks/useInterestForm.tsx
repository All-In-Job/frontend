import { useState } from 'react';

type InterestFormState = {
  subMajor: string;
};

export const useInterestForm = () => {
  const [formState, setFormState] = useState<InterestFormState>({
    subMajor: '',
  });

  console.log(formState);

  return {
    formState,
    setFormState,
  };
};
