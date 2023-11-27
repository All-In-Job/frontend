import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

import { login } from 'apis/login';
import { createUser } from 'apis/user';
import { InputFieldType } from 'components/BasicInformation/BasicInformation';
import Submit from 'components/commons/Buttons/Submit/Submit';
import { useInterestForm } from 'hooks/useInterestForm';

import { InterestFieldSetup, TagName } from './InterestFieldSetup';
import * as S from './InterestForm.style';
import { ReactComponent as DefaultInterestImage } from './res/img/default_interest_image.svg';
import { SubMajorInput } from './subMajorInput';

type SignupFormInputFieldsType = Record<
  'email' | 'provider' | InputFieldType | 'currentPhoto',
  string
>;

function InterestForm() {
  const { formState, setFormState } = useInterestForm();
  const [isActive, setIsActive] = useState(false);

  const locationState = useLocation().state as SignupFormInputFieldsType;

  useEffect(() => {
    setIsActive(formState.major?.subMajor !== '');
  }, [formState.major?.subMajor]);

  const generateCorrectInterests = () => {
    const tempInterests: Array<object> = [];
    let i = 0;
    for (const key in formState.interests) {
      tempInterests[i] = { [key]: formState.interests[key as TagName] };
      i++;
    }
    return tempInterests;
  };

  const submitButton = async () => {
    try {
      const res = await createUser({
        ...locationState,
        ...formState,
        interests: generateCorrectInterests(),
      });
      if (res.status === 200) {
        const { data } = await login(res.data.data);
        localStorage.setItem('accessToken', data.data);
        location.replace('/');
      }
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        console.log(e.response);
      }
    }
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
      <SubMajorInput formState={formState} setFormState={setFormState} majorType='mainMajor' />
      <SubMajorInput formState={formState} setFormState={setFormState} majorType='subMajor' />

      <S.DefaultImageBox>
        <DefaultInterestImage />
      </S.DefaultImageBox>

      <S.InterestFieldSetupTitle>관심분야를 선택해주세요!</S.InterestFieldSetupTitle>
      <InterestFieldSetup formState={formState} setFormState={setFormState} />

      <Submit title='확인' onClick={submitButton} disabled={!isActive} isActive={isActive} />
    </S.InterestFieldSetupWrapper>
  );
}

export default InterestForm;
