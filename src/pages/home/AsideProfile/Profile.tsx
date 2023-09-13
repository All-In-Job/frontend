import styled from '@emotion/styled';

import { Desc } from './asideProfile.style';
import { user } from './mock/user';
import Temperature from './Temperature';

const Profile = () => {
  return (
    <Container>
      <UserInfo>
        <Avatar />
        <UserDescContainer>
          <MarginBottomDesc size='15px'>{`${user.name}님`}</MarginBottomDesc>
          <FlexDesc size='15px'>
            열정온도<YellowDesc size='15px'>{`${user.temperature}℃`}</YellowDesc>
          </FlexDesc>
        </UserDescContainer>
        <LogoutButton>로그아웃</LogoutButton>
      </UserInfo>
      <Temperature temperature={user.temperature} />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  padding: 15px 19px;
  border-radius: 12px;
  background: var(--orange-100, #ffe8df);
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid var(--orange-500, #fd6b36);
`;
const UserDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 11.5px;
  font-weight: 700;
`;
const LogoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 54px;
  height: 24px;
  color: var(--black-200, #a0a09f);
  cursor: pointer;
  font-size: 12px;
  border-radius: 4px;
  background: var(--background-primary, #ededed);
`;

const MarginBottomDesc = styled(Desc)`
  margin-bottom: 6px;
`;

const FlexDesc = styled(Desc)`
  display: flex;
`;

const YellowDesc = styled(Desc)`
  margin-left: 4px;
  color: #fd6b36;
`;
