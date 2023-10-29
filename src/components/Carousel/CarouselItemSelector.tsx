import { FC } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

type Props = { length: number; currentImageId: number };

export const CarouselItemSelector: FC<Props> = ({ length, currentImageId }) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        {Array.from<number>({ length }).map((item, idx) => {
          return (
            <Selector key={idx} current={currentImageId === idx + 1}>
              {item}
            </Selector>
          );
        })}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 23px;
  display: flex;
  justify-content: center;
`;
const StyledWrapper = styled.div`
  display: flex;
  min-width: 41px;
  gap: 4px;
  justify-content: space-between;
`;
const Selector = styled.button<{ current: boolean }>`
  background-color: ${props => (props.current ? theme.palette.orange500 : '#d9d9d9')};
  border-radius: ${props => (props.current ? '20px' : '100%')};
  width: ${props => (props.current ? '30px' : '11px')};
  height: 11px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
`;
