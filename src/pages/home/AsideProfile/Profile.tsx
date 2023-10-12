import styled from '@emotion/styled';

import { Desc } from './asideProfile.style';
import { user } from './mock/user';
import Temperature from './Temperature';
import UserTabs from './UserTabs';

const Profile = () => {
  return (
    <Container>
      <UserInfoWrapper>
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
      </UserInfoWrapper>
      <UserTabs />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  border-radius: 12px;
  background: ${({ theme }) => theme.palette.orange100};
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.palette.orange500};
  background-color: white;
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
  color: ${({ theme }) => theme.palette.black200};
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
  white-space: nowrap;
`;

const YellowDesc = styled(Desc)`
  margin-left: 4px;
  color: ${({ theme }) => theme.palette.orange500};
`;

const UserInfoWrapper = styled.div`
  padding: 15px 19px;
`;
