import { useCallback, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import CategoryFilter from 'components/CategoryFilter';
import { CategoryData } from 'components/CategoryFilter/type';
import HashTagFilter from 'components/HashTagFilter';

import { MenuCategoies, MenuId, getMenuById } from './menuCategoies';

const Menu = () => {
  const [categoryList, setCategoryList] = useState<CategoryData[]>([]);
  const [hashTagList, setHashTagList] = useState<CategoryData[]>([]);

  const { menuName, categoryId } = useParams();
  const navigate = useNavigate();
  const foundMenuCategories = getMenuById(menuName! as MenuId);

  if (!categoryId) navigate('/');

  useEffect(() => {
    const getCategoryList = (menuCategories: MenuCategoies) => {
      const categories = menuCategories.items.map(
        item => ({ id: item.id, title: item.category }) as CategoryData,
      );

      setCategoryList(categories);
    };

    getCategoryList(foundMenuCategories!);
  }, [menuName, foundMenuCategories]);

  const updateHashTagList = useCallback(
    (selectedCategory: CategoryData[]) => {
      const foundCategory = foundMenuCategories?.items.find(
        item => item.id === selectedCategory[0].id,
      );

      if (foundCategory) {
        const keywords =
          foundCategory.keywords?.map(
            keyword => ({ id: keyword, title: keyword }) as CategoryData,
          ) || [];

        setHashTagList(keywords);
      }
    },
    [foundMenuCategories?.items],
  );

  return (
    <MenuWrapper>
      <MenuHeadContent>
        <CategoryFilter
          title={foundMenuCategories?.title as string}
          categoryList={categoryList}
          onSearch={updateHashTagList}
        />
        <HashTagFilter title='키워드' hashTagList={hashTagList} onSearch={updateHashTagList} />
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
