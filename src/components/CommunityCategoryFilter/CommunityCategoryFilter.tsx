import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import CategoryFilter, { Category } from 'components/MenuFilter/CategoryFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

const CommunityCategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const { menuName, categoryId } = useParams();

  const foundMenuCategoryData = getMenuById(menuName! as MenuId);

  const categories: Category[] = (foundMenuCategoryData?.items || []).map(item => ({
    id: item.id,
    title: item.category,
  }));

  useEffect(() => {
    const setInitalSelectedCategory = () => {
      const initalCategoryData = foundMenuCategoryData?.items.find(item => item.id === categoryId);
      console.log('initalCategoryData', initalCategoryData);
      setSelectedCategory([
        { id: initalCategoryData?.id, title: initalCategoryData?.category } as Category,
      ]);
    };

    setInitalSelectedCategory();
  }, [categoryId]);

  console.log(foundMenuCategoryData);
  console.log(categories);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategories={selectedCategory}
        // onClickCategory={(handleClickCategory)}
        onClickCategory={() => {}}
      />
    </MenuFilterWrapper>
  );
};

export default CommunityCategoryFilter;

const MenuFilterWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
`;
