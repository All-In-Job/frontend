import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

import { createUser } from 'apis/signup';
import { InputFieldType } from 'components/BasicInformation/BasicInformation';
import Submit from 'components/commons/Buttons/Submit/Submit';
import { useInterestForm } from 'hooks/useInterestForm';

import { InterestFieldSetup } from './InterestFieldSetup';
import * as S from './InterestForm.style';
import { ReactComponent as DefaultInterestImage } from './res/img/default_interest_image.svg';
import { SubMajorInput } from './subMajorInput';

// const departments = [
//   '컴퓨터공학과',
//   '컴퓨터소프트웨어공학과',
//   '전자공학과',
//   '전자전기공학과',
//   '경영학과',
//   '경제경영학과',
//   '신소재공학과',
//   '국어국문학과',
//   '정치외교학과',
//   '기계공학과',
//   '물리학과',
//   '천문학과',
//   '간호학과',
//   '사회복지학과',
//   '철학과',
//   '시각디자인학과',
//   '산업디자인학과',
//   '건축학과',
//   '행정학과',
//   '법학과',
// ];

type SignupFormInputFieldsType = Record<
  'email' | 'provider' | InputFieldType | 'currentPhoto',
  string
>;

function InterestForm() {
  const { formState, setFormState } = useInterestForm();
  const [isActive, setIsActive] = useState(false);

  const locationState = useLocation().state as SignupFormInputFieldsType;

  useEffect(() => {
    setIsActive(formState.subMajor !== '');
  }, [formState.subMajor]);

  const submitButton = async () => {
    try {
      const payload = {
        major: { mainMajor: '가정교육과', subMajor: '소비자생활문화산업학과' },
        interests: [
          {
            competition: ['기획/아이디어', '과학/공학'],
          },
          {
            outside: ['서포터즈', '멘토링'],
          },
          {
            intern: ['대기업', '중견기업'],
          },
          {
            language: ['toeic', 'toeicWT', 'ch'],
          },
          {
            qnet: ['환경.에너지', '정보통신'],
          },
        ],
      };

      const res = await createUser({ ...locationState, ...payload });
      console.log('회원가입 성공:', res);
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        console.log(e.response);
      }
    }
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
      <SubMajorInput formState={formState} setFormState={setFormState} />

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
