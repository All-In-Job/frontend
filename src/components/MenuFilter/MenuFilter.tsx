import styled from '@emotion/styled';

const MenuFilter = () => {
  return <MenuFilterWrapper></MenuFilterWrapper>;
};

export default MenuFilter;

const MenuFilterWrapper = styled.div`
  padding: 32px;
  border-radius: 12px;
  background-color: ${props => props.theme.palette.background.secondary};
`;
