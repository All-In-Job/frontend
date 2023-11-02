import { FC } from 'react';

import styled from '@emotion/styled';

import { ReactComponent as ArrowIcon } from 'pages/scrap/res/images/leftArrow.svg';

interface Props {
  currentPage: number;
  totalPage: number;
  canBack: boolean;
  canForward: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
  className?: string;
}

const PageController: FC<Props> = ({
  totalPage,
  currentPage,
  canForward,
  canBack,
  onClickPrev,
  onClickNext,
  className,
}) => {
  return (
    <Container className={className}>
      <LeftArrowWrapper canBack={canBack} onClick={onClickPrev}>
        <ArrowIcon />
      </LeftArrowWrapper>
      <PageIndicator>
        <CurrentPage>{currentPage}</CurrentPage>
        <Divider>/</Divider>
        <TotalPage>{totalPage}</TotalPage>
      </PageIndicator>
      <RightArrowWrapper canForward={canForward} onClick={onClickNext}>
        <ArrowIcon />
      </RightArrowWrapper>
    </Container>
  );
};

export default PageController;

const LeftArrowWrapper = styled.div<{ canBack: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  width: 30px;
  height: 30px;
  fill: ${({ canBack }) => (canBack ? 'black' : 'white')};
  border-radius: 4px;
  background: var(--background-primary, #ededed);

  transition: all linear 100ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;
const RightArrowWrapper = styled.div<{ canForward: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3px;
  width: 30px;
  height: 30px;
  fill: ${({ canForward }) => (canForward ? 'black' : 'white')};
  border-radius: 4px;
  background: var(--background-primary, #ededed);
  transform-origin: center;
  transform: rotateY(180deg) scale(1);
  transition: all linear 100ms;
  cursor: pointer;
  &:hover {
    transform: rotateY(180deg) scale(1.1);
  }

  &:active {
    transform: rotateY(180deg) scale(1);
  }
`;

const PageIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 24px;
`;
const CurrentPage = styled.div`
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 100% */
  color: var(--orange-500, #fd6b36);
`;
const TotalPage = styled.div`
  color: var(--black-100, #d0cfcf);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`;

const Divider = styled.div`
  margin: 0 8px;
  color: var(--black-100, #d0cfcf);
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 47px;
  width: fit-content;
`;
