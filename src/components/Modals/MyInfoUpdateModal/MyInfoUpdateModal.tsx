import {
  FC,
  Dispatch,
  useState,
  useEffect,
  createContext,
  SetStateAction,
  FormEventHandler,
} from 'react';

import styled from '@emotion/styled';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { AxiosError } from 'axios';

import { updateProfile } from 'apis/myInfo';
import { findUserProfile } from 'apis/user';
import { profileImages } from 'components/BasicInformation/PhotoList';
import { TagName } from 'components/InterestForm/InterestFieldSetup';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { InterestFormState, InterestTagsType } from 'hooks/useInterestForm';
import theme from 'styles/theme';

import { InterestFieldSection } from './InterestFieldSection';
import { NicknameSection } from './NicknameSection';
import { ProfileImageSection } from './ProfileImageSection';

export type MyInfoUpdateModalContext = {
  state: MyInfoFormState;
  setState: Dispatch<SetStateAction<MyInfoFormState>>;
};
export type MyInfoFormState = {
  email?: string;
  profileImage: string;
  nickname: string;
  interestKeyword: { interest: string; keyword: string[] }[];
};
type InterestMapKey = keyof typeof interestMap;

type Props = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const interestMapKorean = {
  공모전: 'competition',
  인턴: 'intern',
  어학: 'language',
  자격증: 'qnet',
  대외활동: 'outside',
} as const;

export const MyInfoUpdateContext = createContext<MyInfoUpdateModalContext>({
  state: {
    profileImage: profileImages[0],
    nickname: '',
    interestKeyword: [],
  },
  setState: () => {},
});

const interestMap = {
  competition: '공모전',
  intern: '인턴',
  language: '어학',
  outside: '대외활동',
  qnet: '자격증',
} as const;

export const MyInfoUpdateModal: FC<Props> = ({ isVisible, setIsVisible }) => {
  const [tempInterests, setTempInterests] = useState<{ interests: InterestTagsType }>({
    interests: {
      공모전: [],
      자격증: [],
      인턴: [],
      어학: [],
      대외활동: [],
    },
  });

  const [state, setState] = useState<MyInfoFormState>({
    profileImage: profileImages[0],
    nickname: '',
    interestKeyword: [],
  });

  const requestMyInfoUpdate: FormEventHandler = e => {
    e.preventDefault();
    updateProfile(state)
      .then(res => {
        console.log(res);
        setIsVisible(false);
      })
      .catch(e => {
        if (e instanceof AxiosError && e.response) {
          console.log(e.response);
        }
      });
  };

  useEffect(() => {
    findUserProfile().then(res => {
      const data = res.data.data;
      setState({
        nickname: data.nickname,
        profileImage: data.profileImage,
        interestKeyword: data.interestKeyword,
      });
    });
  }, [isVisible]);

  useEffect(() => {
    const tempObj: InterestFormState['interests'] = {
      공모전: [],
      인턴: [],
      자격증: [],
      어학: [],
      대외활동: [],
    };
    state.interestKeyword.forEach(interest => {
      tempObj[interestMap[interest.interest as InterestMapKey]] = interest.keyword;
    });

    setTempInterests({ interests: tempObj });
  }, [isVisible]);

  useEffect(() => {
    let i = 0;
    const tempInterestKeywords: { interest: string; keyword: string[] }[] = [];
    for (const key in tempInterests.interests) {
      tempInterestKeywords[i] = {
        interest: interestMapKorean[key as TagName],
        keyword: tempInterests.interests[key as TagName],
      };
      i++;
    }

    setState({ ...state, interestKeyword: tempInterestKeywords });
  }, [tempInterests]);

  const closeModal = () => {
    setIsVisible(false);
  };

  if (isVisible)
    return (
      <ModalBackground>
        <MyInfoUpdateContext.Provider value={{ state, setState }}>
          <StyledForm onSubmit={requestMyInfoUpdate}>
            <StyledHeader>
              <StyledTitle>프로필 수정</StyledTitle>
              <CloseIcon onClick={closeModal} />
            </StyledHeader>

            <ProfileImageSection />
            <NicknameSection />
            <div style={{ minHeight: 400 }}>
              <InterestFieldSection
                tempInterests={tempInterests}
                setTempInterests={setTempInterests}
              />
            </div>
            <StyledSubmit type='submit'>수정 완료</StyledSubmit>
          </StyledForm>
        </MyInfoUpdateContext.Provider>
      </ModalBackground>
    );
  return null;
};

const StyledForm = styled.form`
  background-color: white;
  width: 718px;
  height: 950px;
  border-radius: 24px;
  padding: 40px;
  overflow-y: auto;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
const StyledSubmit = styled.button`
  background-color: ${theme.palette.orange500};
  color: white;
  width: 100%;
  height: 48px;
  border-radius: 99999px;
  cursor: pointer;
`;
