import { useEffect, useState } from 'react';

import { isAxiosError } from 'axios';
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
  'email' | 'provider' | 'fixedResponse' | 'mainMajors' | InputFieldType | 'profileImage',
  string
>;
type FixedResponseType = Record<'fixedResponse', Record<string, string[]>>;
type MainMajorsType = Record<'mainMajors', string[]>;

const interestsMap = {
  공모전: 'competition',
  대외활동: 'outside',
  인턴: 'intern',
  자격증: 'qnet',
  어학: 'language',
} as const;

function InterestForm() {
  const { interestsState, setInterestsState, setMajorState, majorState } = useInterestForm();
  const [isActive, setIsActive] = useState(false);

  const locationState = useLocation().state as SignupFormInputFieldsType &
    FixedResponseType &
    MainMajorsType;
  const { email, provider, phone, profileImage, name, nickname } = locationState;

  const locationStateToServer = { email, provider, phone, profileImage, name, nickname };

  useEffect(() => {
    setIsActive(majorState.subMajor !== '');
  }, [majorState.subMajor]);

  const generateCorrectInterests = () => {
    const tempInterests: Array<object> = [];
    let i = 0;
    for (const key in interestsState.interests) {
      if (key === '어학') {
        const obj = {
          TOEIC: 'toeic',
          'TOEIC (Bridge)': 'toeicBR',
          'TOEIC (Speaking, Writing)': 'toeicSW',
          'TOEIC (Writing)': 'toeicWT',
          'TOEIC (Speaking)': 'toeicST',
          'TSC 중국어 말하기 시험': 'ch',
          JPT: 'jp',
          'SJPT 일본어 말하기 시험': 'jpSP',
        } as const;
        tempInterests[i] = {
          interest: 'language',
          keyword: interestsState.interests[key as TagName].map(
            keyword => obj[keyword as keyof typeof obj],
          ),
        };
      } else {
        tempInterests[i] = {
          interest: interestsMap[key as TagName],
          keyword: interestsState.interests[key as TagName],
        };
      }
      i++;
    }

    return tempInterests;
  };

  const submitButton = async () => {
    try {
      const res = await createUser({
        ...locationStateToServer,
        major: majorState,
        interestKeyword: generateCorrectInterests(),
      });

      if (res.status === 200) {
        const { data } = await login(res.data.data);
        localStorage.setItem('accessToken', data.data);
        location.replace('/');
      }
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
      <SubMajorInput
        majorState={majorState}
        setMajorState={setMajorState}
        majorType='mainMajor'
        fixedResponse={locationState.fixedResponse}
        mainMajors={locationState.mainMajors}
      />
      <SubMajorInput
        majorState={majorState}
        setMajorState={setMajorState}
        majorType='subMajor'
        fixedResponse={locationState.fixedResponse}
        mainMajors={locationState.mainMajors}
      />

      <S.DefaultImageBox>
        <DefaultInterestImage />
      </S.DefaultImageBox>

      <S.InterestFieldSetupTitle>관심분야를 선택해주세요!</S.InterestFieldSetupTitle>
      <InterestFieldSetup interestsState={interestsState} setInterestsState={setInterestsState} />

      <Submit title='확인' onClick={submitButton} disabled={!isActive} isActive={isActive} />
    </S.InterestFieldSetupWrapper>
  );
}

export default InterestForm;
