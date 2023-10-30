import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// import MultiSelectTags from 'components/Badge';
// import { HashTagData } from 'components/Badge/type';

import CategoryFilter from 'components/CategoryFilter';
import { CategoryData } from 'components/CategoryFilter/type';

import { MenuCategoies, MenuId, getMenuById } from './menuCategoies';

const Menu = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  const { menuName, categoryId } = useParams();
  const foundMenuCategories = getMenuById(menuName! as MenuId);
  const navigate = useNavigate();

  if (!categoryId) navigate('/');

  useEffect(() => {
    const filteringCategoryList = (menuCategories: MenuCategoies) => {
      const categories = menuCategories.items.map(
        item => ({ id: item.category, title: item.category }) as CategoryData,
      );

      setCategoryList(categories);
    };

    filteringCategoryList(foundMenuCategories!);
  }, [menuName, foundMenuCategories]);

  return (
    <MenuWrapper>
      <MenuHeadContent>
        <CategoryFilter title={foundMenuCategories?.title as string} categoryList={categoryList} />
      </MenuHeadContent>

      <Outlet />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  grid-column: span 12;
  margin-top: 32px;
`;
const MenuHeadContent = styled.div`
  padding-bottom: 32px;
`;
