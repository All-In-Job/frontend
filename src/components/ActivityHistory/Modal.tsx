import styled from '@emotion/styled';

import { ReactComponent as AddCircle } from './res/img/add_circle.svg';

const Modal = () => {
  return (
    <>
      <TextBox>
        <p>올인잡님, 활동내역을 추가해서 열정온도를 올려보세요!</p>
        <Icon>
          <AddCircle fill='#FD6B36' />
        </Icon>
      </TextBox>
    </>
  );
};

export default Modal;

const TextBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  margin: 24px 0;
  gap: 4px;
  border-radius: 12px;
  background: #ffe8df;
  p {
    font-family: SUIT;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0.134px;
  }
`;

const Icon = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;
