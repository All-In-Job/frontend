import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import { findUserProfile } from 'apis/user';
import {
  MyInfoFormState,
  MyInfoUpdateModal,
} from 'components/Modals/MyInfoUpdateModal/MyInfoUpdateModal';
import { isMyInfoUpdateModalVisible } from 'store/modal';

import * as S from './myInfo.style';

function MyInfo() {
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useRecoilState(
    isMyInfoUpdateModalVisible,
  );
  const [profile, setProfile] = useState<MyInfoFormState & { keywords: string[] }>();

  useEffect(() => {
    findUserProfile().then(res => {
      if (res.status === 200) {
        const data = res.data.data as MyInfoFormState;

        setProfile({
          ...data,
          keywords: data.interestKeyword.map(interestObj => interestObj.keyword).flat(),
        });
      }
    });
  }, []);

  if (profile)
    return (
      <>
        <S.MyInfoContainer>
          <S.Title>로그인 정보</S.Title>
          <S.LoginInfoWrapper>
            <S.ProfileBox>
              <S.ProfileImgWrapper image={profile.profileImage} />

              <S.ProfileNickname>{profile.nickname}님</S.ProfileNickname>
              <S.ProfileEditBtn onClick={() => setIsUpdateModalVisible(true)}>
                프로필 수정
              </S.ProfileEditBtn>
            </S.ProfileBox>

            <S.InfoBox>
              <S.basicInfoTitle>기본정보</S.basicInfoTitle>
              <S.basicInfoWrapper>
                <S.Id style={{ marginBottom: '12px' }}>아이디</S.Id>
                <S.UserId>{profile.email}</S.UserId>
              </S.basicInfoWrapper>
              <S.basicInfoWrapper>
                <S.Id>닉네임</S.Id>
                <S.UserId>{profile.nickname}</S.UserId>
              </S.basicInfoWrapper>
            </S.InfoBox>

            <S.InterestFieldBox>
              <S.InterestFieldTitle>관심분야</S.InterestFieldTitle>
              <S.InterestTagWrapper>
                {profile.keywords.map((tag, index) => (
                  <S.InterestTag key={index}>{tag}</S.InterestTag>
                ))}
              </S.InterestTagWrapper>
            </S.InterestFieldBox>
          </S.LoginInfoWrapper>
        </S.MyInfoContainer>
        <MyInfoUpdateModal
          isVisible={isUpdateModalVisible}
          setIsVisible={setIsUpdateModalVisible}
        />
      </>
    );
}

export default MyInfo;
