import { FC, ReactNode, useEffect } from 'react';

import { createPortal } from 'react-dom';

import styled from '@emotion/styled';

interface Props {
  domId: string;
  onClose: () => void;
  children: ReactNode;
}

const CreatePortal: FC<Props> = ({ domId, onClose, children }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return createPortal(
    <>
      <Container>{children}</Container>
      <Overlay onClick={onClose} />
    </>,
    document.getElementById(domId)!,
  );
};

export default CreatePortal;

const Container = styled.div`
  position: relative;
  z-index: 2001;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  background: var(--black-500, #121110);

  //팝업보다 인덱스 낮고 나머지 보다는 높아야함!!
  z-index: 2000;
`;
