import styled from '@emotion/styled';
import { useLoaderData } from 'react-router-dom';

import { ReactComponent as AddIcon } from 'components/ActivityHistory/res/img/add_circle.svg';

type RegistrationProps = {
  onModalOpen: () => void;
};

export const Registration = ({ onModalOpen }: RegistrationProps) => {
  const user = useLoaderData() as { nickname: string };

  return (
    <RegistrationBox>
      <Text>{`${user.nickname}님, 활동내역을 추가해서 열정온도를 올려보세요!`}</Text>
      <AddBtn onClick={onModalOpen}>
        <AddIcon width='36' height='36' />
      </AddBtn>
    </RegistrationBox>
  );
};

const RegistrationBox = styled.div`
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

const Text = styled.h1`
  font-family: SUIT;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

const AddBtn = styled.button`
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
