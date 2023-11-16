import styled from '@emotion/styled';

export const MyInfoContainer = styled.div`
  grid-column: span 12;
`;

export const Title = styled.p`
  margin-top: 32px;
  font-size: 24px;
  font-weight: bold;
`;

export const LoginInfoWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 32px;
`;

export const ProfileBox = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 8px 0;
`;

export const ProfileImgWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  border: 3px solid #fd6b36;
  margin-bottom: 8px;
`;

export const ProfileNickname = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  padding: 5px 8px;
`;

export const ProfileEditBtn = styled.button`
  font-size: 11px;
  font-weight: 700;
  background-color: #ededed;
  color: #a0a09f;
  border-radius: 4px;
  padding: 5px 8px;
`;

export const InfoBox = styled.div`
  width: 282px;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 16px 24px;
`;

export const basicInfoTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 16px;
`;

export const basicInfoWrapper = styled.div`
  display: flex;
  gap: 32px;
`;

export const Id = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const UserId = styled.p`
  color: #717070;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const InterestFieldBox = styled.div`
  flex-grow: 1;
  width: 282px;
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 16px 24px;
`;

export const InterestFieldTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 16px;
`;

export const InterestTagWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const InterestTag = styled.div`
  border: 1px solid #fd6b36;
  border-radius: 4px;
  padding: 8px;
`;
