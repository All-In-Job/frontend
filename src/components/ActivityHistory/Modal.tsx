import styled from '@emotion/styled';

const Modal = () => {
  return (
    <Container>
      <ModalWrapper>
        <ModalBox>
          <h1>활동내역 수정</h1>
          <h2>활동내역 분야</h2>
          <h2>분야 선택</h2>
        </ModalBox>
      </ModalWrapper>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalBox = styled.div`
  display: flex;
  width: 492px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  background: #fff;
`;
