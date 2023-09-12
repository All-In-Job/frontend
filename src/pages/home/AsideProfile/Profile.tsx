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
          <Desc size='25px'>{`${user.name}님`}</Desc>
          <Desc size='25px'>{`열정온도${user.temperature}℃`}</Desc>
        </UserDescContainer>
        <LogoutButton>로그아웃</LogoutButton>
      </UserInfo>
      <Temperature temperature={user.temperature} />
    </Container>
  );
};

export default Profile;

const Container = styled.div``;
const UserInfo = styled.div``;
const Avatar = styled.div``;
const UserDescContainer = styled.div``;
const LogoutButton = styled.div``;
