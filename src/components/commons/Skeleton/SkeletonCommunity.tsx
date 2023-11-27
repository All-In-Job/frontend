import styled from '@emotion/styled';

const SkeletonCommunity = () => {
  return (
    <CommunityContainer>
      <InfoContainer>
        <HeadSection>
          <UserContainer>
            <UserIcon />
            <Name />
          </UserContainer>
          <Time />
        </HeadSection>

        <Title />
        <Category />
      </InfoContainer>

      <CountList>
        <li>
          <Icon />
          <Count />
        </li>
        <li>
          <DvideLine />
        </li>
        <li>
          <Icon />
          <Count />
        </li>
        <li>
          <DvideLine />
        </li>
        <li>
          <Icon />
          <Count />
        </li>
      </CountList>
    </CommunityContainer>
  );
};

export default SkeletonCommunity;

const CommunityContainer = styled.article`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.palette.line.normal};
  padding: 24px 32px;

  :last-of-type {
    border-bottom: 1px solid ${props => props.theme.palette.line.normal};
  }
`;

const InfoContainer = styled.div``;

const HeadSection = styled.div`
  display: flex;
  align-items: center;
`;

const UserContainer = styled.div`
  display: flex;
  margin-right: 24px;
`;

const UserIcon = styled.div`
  width: 20px;
  height: 24px;
  border-radius: 4px;
  margin-right: 4px;
  background-color: #eee;
`;

const Name = styled.div`
  width: 50px;
  height: 24px;
  background-color: #eee;
`;

const Time = styled.div`
  width: 45px;
  height: 20px;
  background-color: #eee;
`;

const Title = styled.div`
  width: 700px;
  height: 30px;
  margin: 8px 0;
  background-color: #eee;
`;

const Category = styled.div`
  width: 120px;
  height: 28px;
  border-radius: 4px;
  background-color: #eee;
`;

const CountList = styled.ul`
  height: 20px;
  display: flex;
  align-self: flex-end;

  > li {
    display: flex;
    align-items: center;

    :nth-of-type(2),
    :nth-last-of-type(2) {
      display: flex;
      justify-content: center;
      width: 20px;
    }
  }
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 999px;
  margin-right: 2px;
  background-color: #eee;
`;

const Count = styled.div`
  width: 30px;
  height: 14px;
  background-color: #eee;
`;

const DvideLine = styled.div`
  content: '';
  width: 1px;
  height: 12px;
  background-color: ${props => props.theme.palette.background.primary};
  border-radius: 1px;
`;
