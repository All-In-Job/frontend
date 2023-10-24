import { FC } from 'react';

import styled from '@emotion/styled';

interface Props {
  title: string;
  isOn: boolean;
  onMyInterestClick: (isOn: boolean) => void;
  className?: string;
}

const CategoryFilterHeader: FC<Props> = ({ title, isOn, onMyInterestClick, className }) => {
  const MY_INTEREST_SWITCH = 'MY_INTEREST_SWITCH';

  return (
    <Header className={className}>
      <Title>{title}</Title>
      <Button>
        <Label htmlFor={MY_INTEREST_SWITCH}>
          <ButtonTitle>나의 관심 커리어</ButtonTitle>
          <input
            onChange={event => onMyInterestClick(event.target.checked)}
            id={MY_INTEREST_SWITCH}
            type='checkbox'
            hidden
          />
          <SwitchWrapper isOn={isOn}>
            <SwitchBG>
              <SwitchBall isOn={isOn} />
            </SwitchBG>
          </SwitchWrapper>
        </Label>
      </Button>
    </Header>
  );
};

export default CategoryFilterHeader;

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

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
`;

const ButtonTitle = styled.span`
  margin-right: 10px;
  color: var(--black-200, #a0a09f);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SwitchWrapper = styled.div<{ isOn: boolean }>`
  padding: 3px;
  width: 52px;
  height: 32px;
  border-radius: 100px;
  border: 2px solid ${({ isOn }) => (isOn ? '#FD6B36' : 'var(--line-normal, #e1e2e4)')};
  background-color: var(--background-primary-50, #f8f8f8);
  transition: all 100ms linear;
`;

const SwitchBG = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SwitchBall = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(${({ isOn }) => (isOn ? '100%' : 0)});
  height: 20px;
  width: 20px;
  background-color: ${({ isOn }) => (isOn ? '#FD6B36' : '#e1e2e4')};
  border-radius: 50%;
  transition: all 100ms linear;
`;
