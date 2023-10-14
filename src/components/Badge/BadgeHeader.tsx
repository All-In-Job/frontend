import { FC } from 'react';

import styled from '@emotion/styled';

import { ReactComponent as RefreshIcon } from 'components/Badge/res/image/refresh.svg';

interface Props {
  title: string;
  refreshButtonDisabled: boolean;
  onRefreshClick: () => void;
  className?: string;
}

const BadgeHeader: FC<Props> = ({ refreshButtonDisabled, title, onRefreshClick, className }) => {
  return (
    <Header className={className}>
      <Title>{title}</Title>
      <RefreshButton disabled={refreshButtonDisabled} onClick={onRefreshClick}>
        <ButtonTitle>초기화</ButtonTitle>
        <IconWrapper>
          <RefreshIcon />
        </IconWrapper>
      </RefreshButton>
    </Header>
  );
};

export default BadgeHeader;

const Title = styled.h4`
  color: var(--black-500, #121110);
  font-feature-settings: 'ss10' on;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.134px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
`;

const ButtonTitle = styled.span`
  margin-right: 3px;
  color: var(--black-200, #a0a09f);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  margin-bottom: 2px;
`;
