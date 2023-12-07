import styled from '@emotion/styled';

import KeywordButton from './Buttons/KeywordButton';

const MenuFilter = () => {
  return (
    <MenuFilterWrapper>
      <KeywordButton keyword='기획/아이디어' isActive />
    </MenuFilterWrapper>
  );
};

export default MenuFilter;

const MenuFilterWrapper = styled.div`
  padding: 32px;
  border-radius: 12px;
  background-color: ${props => props.theme.palette.background.secondary};
`;
