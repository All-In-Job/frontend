import styled from '@emotion/styled';
import { Outlet, useParams } from 'react-router-dom';

import { MenuId, getMenuById } from './menuList';

const Menu = () => {
  const { menuName } = useParams();

  const foundMenuList = getMenuById(menuName! as MenuId);

  console.log(foundMenuList);

  return (
    <MenuWrapper>
      <MenuHeadContent></MenuHeadContent>

      <Outlet />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  grid-column: span 12;
`;
const MenuHeadContent = styled.div`
  padding-bottom: 32px;
`;
