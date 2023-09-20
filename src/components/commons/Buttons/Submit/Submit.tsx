import styled from '@emotion/styled';

type SubmitProps = {
  title: string;
  disabled: boolean;
  isActive: boolean;
  onClick: () => void;
};

function Submit(props: SubmitProps) {
  const SubmitButton = styled.button<{ isActive: boolean }>`
    width: 100%;
    padding: 16px 0;
    background-color: ${props =>
      props.isActive ? props.theme.palette.orange500 : props.theme.palette.background.primary};
    color: #fff;
    border-radius: 14px;
    cursor: ${props => (props.isActive ? 'pointer' : 'default')};
  `;

  return (
    <SubmitButton onClick={props.onClick} disabled={props.disabled} isActive={props.isActive}>
      {props.title}
    </SubmitButton>
  );
}

export default Submit;
