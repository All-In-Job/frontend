import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  isChangeInfoLayout: boolean;
};

const SkeletonPostCard: FC<Props> = ({ isChangeInfoLayout }) => {
  return (
    <article>
      <LoadingImage height={isChangeInfoLayout ? '118px' : '282px'} />

      <LoadingInfo>
        <Title>
          <div />
          <div />
        </Title>
        <Enterprise />
        <Location />
      </LoadingInfo>

      <LoadingFooter>
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
      </LoadingFooter>
    </article>
  );
};

export default SkeletonPostCard;

const LoadingImage = styled.div<{ height: string }>`
  height: ${props => props.height};
  border-radius: 14px;
  background-color: #eee;
`;

const LoadingInfo = styled.div`
  margin: 16px 0 12px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52px;
  margin-bottom: 8px;

  > div {
    height: 22px;
    background-color: #eee;
  }
`;

const Enterprise = styled.div`
  width: 50%;
  height: 26px;
  background-color: #eee;
`;

const Location = styled.div`
  width: 88px;
  height: 26px;
  margin-top: 2px;
  background-color: #eee;
`;

const LoadingFooter = styled.ul`
  height: 20px;
  display: flex;
  justify-content: flex-end;

  > li {
    display: flex;
    align-items: center;

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
