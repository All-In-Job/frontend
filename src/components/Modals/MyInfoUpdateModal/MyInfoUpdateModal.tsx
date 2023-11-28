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

import { findUserProfile } from 'apis/user';
import { profileImages } from 'components/BasicInformation/PhotoList';
import { ModalBackground } from 'components/Modals/ModalBackground';

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
export const MyInfoUpdateContext = createContext<MyInfoUpdateModalContext>({
  state: {
    profileImage: profileImages[0],
    nickname: '',
    interestKeyword: [],
  },
  setState: () => {},
});

type Props = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const MyInfoUpdateModal: FC<Props> = ({ isVisible, setIsVisible }) => {
  const [state, setState] = useState<MyInfoFormState>({
    profileImage: profileImages[0],
    nickname: '',
    interestKeyword: [],
  });

  const requestMyInfoUpdate: FormEventHandler = e => {
    e.preventDefault();
    console.log('formState:', state);
    // const res = await updateProfile(formState)
    //   .then(res => console.log(res))
    //   .catch(e => {
    //      if (e instanceof AxiosError && e.response) {
    //          console.log(e.response)
    //      }
    //    })
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

    findUserProfile().then(res => {
      const data = res.data.data;
      setState({
        nickname: data.nickname,
        profileImage: data.profileImage,
        interestKeyword: data.interestKeyword,
      });
    });
  }, []);

  useEffect(() => {
    const tempObj = {};
    // state.interestKeyword.forEach(interest => {
    //
    // });

    console.log('interestKeyword', state.interestKeyword);
    console.log('tempObj', tempObj);
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
            <InterestFieldSection state={state} setState={setState} />
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
// const StyledSubTitle = styled.p`
//   font-size: 20px;
//   font-weight: 700;
// `;

// "{
// "email":"artemismars2@gmail.com",
// "provider":"google",
// "phone":"01066783426",
// "profileImage":"https://storage.googleapis.com/allinjob-user-img/allinjob-profile-img/profileImg-1.jpg",
// "name":"아트",
// "nickname":"arts",
// "major":{"mainMajor":"컴퓨터공학과","subMajor":"AI・컴퓨터공학과"},
// "interests":{
//  "공모전":["기획/아이디어","광고/마케팅"],
//  "대외활동":["여행/호텔/항공","언론/미디어"],
//  "어학":["스페인어","중국어"],
//  "인턴":["경영/사무","마케팅/광고/홍보"],
//  "자격증":["보건/의료","경영/회계/사무"]},
//  "interestKeywords":[
//    {
//      "interest":"competition",
//      "keyword":["기획/아이디어","광고/마케팅"]
//    },
//    {
//      "interest":"outside",
//      "keyword":["여행/호텔/항공","언론/미디어"]
//    },
//    {
//      "interest":"language",
//      "keyword":["스페인어","중국어"]
//    },
//    {
//      "interest":"intern",
//      "keyword":["경영/사무","마케팅/광고/홍보"]
//    },
//    {
//      "interest":"qnet",
//      "keyword":["보건/의료","경영/회계/사무"]}]
//    }"
