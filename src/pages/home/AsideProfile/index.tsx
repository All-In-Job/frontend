import styled from '@emotion/styled';

import Profile from './Profile';
import Solution from './Solution';

const AsideProfile = () => {
  return (
    <Container>
      <Profile />
      <Solution />
    </Container>
  );
};

export default AsideProfile;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
