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
// import { AxiosError } from 'axios';

// import { updateProfile } from 'apis/myInfo';
import { profileImages } from 'components/BasicInformation/PhotoList';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { InterestFormState, InterestTagsType } from 'hooks/useInterestForm';

import { InterestFieldSection } from './InterestFieldSection';
import { NicknameSection } from './NicknameSection';
import { ProfileImageSection } from './ProfileImageSection';

export type MyInfoUpdateModalContext = {
  state: MyInfoFormState;
  setState: Dispatch<SetStateAction<MyInfoFormState>>;
};
export type MyInfoFormState = {
  profileImage: string;
  nickname: string;
  interestKeyword: { interest: string; keyword: string[] }[];
};
type InterestMapKey = keyof typeof interestMap;

type Props = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

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
    // updateProfile(state)
    //   .then(res => console.log(res))
    //   .catch(e => {
    //     if (e instanceof AxiosError && e.response) {
    //       console.log(e.response);
    //     }
    //   });
  };

  useEffect(() => {
    setState({
      nickname: '',
      profileImage: '',
      interestKeyword: [
        { interest: 'competition', keyword: ['기획/아이디어', '광고/마케팅'] },
        { interest: 'intern', keyword: ['경영/사무', '마케팅/광고/홍보'] },
      ],
    });

    // findUserProfile().then(res => {
    //   const data = res.data.data;
    //   setState({
    //     nickname: data.nickname,
    //     profileImage: data.profileImage,
    //     interestKeyword: data.interestKeyword,
    //   });
    // });
  }, []);

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

    console.log(tempObj);
    setTempInterests({ interests: tempObj });
  }, [state.interestKeyword]);

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
            <InterestFieldSection
              state={state}
              setState={setState}
              tempInterests={tempInterests}
              setTempInterests={setTempInterests}
            />
          </StyledForm>
        </MyInfoUpdateContext.Provider>
      </ModalBackground>
    );
  return null;
};

const StyledForm = styled.form`
  background-color: white;
  width: 718px;
  height: 1123px;
  border-radius: 24px;
  padding: 40px;
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
