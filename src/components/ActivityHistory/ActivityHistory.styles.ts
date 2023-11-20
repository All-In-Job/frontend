import styled from '@emotion/styled';

export const ActivityHistory = styled.div`
  grid-column: span 12;
`;

export const Heading = styled.h1`
  color: ${props => props.theme.palette.black500};
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 2px solid ${props => props.theme.palette.line.normal};
`;

export const Tabs = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

export const Tab = styled.li<{ isActive: boolean }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isActive ? '#f6f6f6' : props.theme.palette.black200)};
  background-color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.background.primary};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Name = styled.span`
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const AddBtn = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.palette.orange500};
  border: 1px solid ${props => props.theme.palette.orange500};
  border-radius: 4px;
  box-sizing: border-box;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
`;

// Details
export const RegistrationBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  margin: 24px 0;
  gap: 4px;
  border-radius: 12px;
  background: ${props => props.theme.palette.orange100};
  button {
    width: 51px;
    height: 48px;
    padding: 8px;
    border: none;
    border-radius: 0;
    background: none;
  }
`;

export const Text = styled.h1`
  font-family: SUIT;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 40px;
  color: ${props => props.theme.palette.black300};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

export const ActivityBox = styled.div`
  display: flex;
  color: ${props => props.theme.palette.black500};
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

export const Title = styled.span`
  color: ${props => props.theme.palette.black500};
`;

export const Duration = styled.span`
  font-size: 17px;
  line-height: 24px;
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Description = styled.div`
  align-self: auto;
  font-family: SUIT;
  font-weight: 500;
`;
