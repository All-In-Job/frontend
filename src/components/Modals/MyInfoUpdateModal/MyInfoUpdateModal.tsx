import { createContext, Dispatch, FormEventHandler, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { photos } from 'components/BasicInformation/PhotoList';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { isMyInfoUpdateModalVisible } from 'store/modal';

import { InterestFieldSection } from './InterestFieldSection';
import { NicknameSection } from './NicknameSection';
import { ProfileImageSection } from './ProfileImageSection';

export type MyInfoUpdateModalContext = {
  formState: MyInfoFormState;
  setFormState: Dispatch<SetStateAction<MyInfoFormState>>;
};
export type MyInfoFormState = {
  photo: string;
  nickname: string;
};

const MODAL_WIDTH_RATIO = 2.67;
const MODAL_HEIGHT_RATIO = 1.15;

export const MyInfoUpdateContext = createContext<MyInfoUpdateModalContext>({
  formState: {
    photo: photos[0],
    nickname: '',
  },
  setFormState: () => {},
});

export const MyInfoUpdateModal = () => {
  const [formState, setFormState] = useState<MyInfoFormState>({
    photo: photos[0],
    nickname: '',
  });
  const isMyInfoUpdateModalVisibleValue = useRecoilValue(isMyInfoUpdateModalVisible);
  const setIsMyInfoUpdateModalVisible = useSetRecoilState(isMyInfoUpdateModalVisible);

  const requestMyInfoUpdate: FormEventHandler = e => {
    e.preventDefault();
    console.log('formState:', formState);
    // const res = await updateProfile(formState)
    //   .then(res => console.log(res))
    //   .catch(e => {
    //      if (e instanceof AxiosError && e.response) {
    //          console.log(e.response)
    //      }
    //    })
  };

  const closeModal = () => {
    setIsMyInfoUpdateModalVisible(false);
  };

  if (isMyInfoUpdateModalVisibleValue)
    return (
      <ModalBackground>
        <MyInfoUpdateContext.Provider value={{ formState, setFormState }}>
          <StyledForm onSubmit={requestMyInfoUpdate}>
            <StyledHeader>
              <StyledTitle>프로필 수정</StyledTitle>
              <CloseIcon onClick={closeModal} />
            </StyledHeader>
            <ProfileImageSection />
            <NicknameSection />
            <InterestFieldSection />
          </StyledForm>
        </MyInfoUpdateContext.Provider>
      </ModalBackground>
    );
  return null;
};

const StyledForm = styled.form`
  background-color: white;
  width: ${window.innerWidth / MODAL_WIDTH_RATIO}px;
  height: ${window.innerHeight / MODAL_HEIGHT_RATIO}px;
  border-radius: 24px;
  padding: 40px;
`;
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const StyledTitle = styled.h1`
  font-size: 24px;
`;
