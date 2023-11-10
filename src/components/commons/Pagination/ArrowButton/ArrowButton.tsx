import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  isDisabled: boolean;
  onClick: () => void;
};

const ArrowButton: FC<Props> = ({ icon, isDisabled, onClick }) => {
  const Icon = styled(icon)<{ 'data-isdisabled': boolean }>`
    path {
      fill: ${props => (props['data-isdisabled'] ? '#fff' : '#121110')};
    }
  `;

  return (
    <Button type='button' disabled={isDisabled} onClick={() => onClick()}>
      <Icon data-isdisabled={isDisabled} />
    </Button>
  );
};

export default ArrowButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 100%;
  border-radius: 4px;
  background-color: ${props => props.theme.palette.background.primary};
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;
