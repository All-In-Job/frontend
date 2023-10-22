import { useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useParams } from 'react-router-dom';

import MultiSelectTags from 'components/Badge';
import { HashTagData } from 'components/Badge/type';

import { MenuId, MenuItems, getMenuById } from './menuList';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<HashTagData[] | null>(null);

  const { menuName } = useParams();
  const foundMenuList = getMenuById(menuName! as MenuId);

  const handleCategoryClick = (category: MenuItems) => {
    if (!category || !category.keywords) return;

    const hashTags = category.keywords.map(keyword => ({ id: keyword, title: keyword }));

    setSelectedCategory(hashTags);
  };

  return (
    <MenuWrapper>
      <CategoryList>
        {foundMenuList?.items.map(item => (
          <li key={item.category} onClick={() => handleCategoryClick(item)}>
            {item.category}
          </li>
        ))}
      </CategoryList>
      <MenuHeadContent>
        {selectedCategory && (
          <MultiSelectTags title='키워드' hashTagList={selectedCategory} key={foundMenuList?.id} />
        )}
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

const CategoryList = styled.ul`
  display: flex;

  > li {
    cursor: pointer;
    border: 1px solid #000;
    padding: 3px;
    margin-right: 3px;
  }
`;
