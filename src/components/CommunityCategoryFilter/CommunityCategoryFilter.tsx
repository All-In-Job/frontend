import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import CategoryFilter, { Category } from 'components/MenuFilter/CategoryFilter';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

type Props = {
  onSearchSelectedKeyword: (selectedKeywords: Keyword[]) => void;
};

const CommunityCategoryFilter: FC<Props> = ({ onSearchSelectedKeyword }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const { menuName, categoryId } = useParams();

  const foundMenuCategoryData = getMenuById(menuName! as MenuId);

  const categories: Category[] = (foundMenuCategoryData?.items || []).map(item => ({
    path: item.id,
    id: item.id,
    title: item.category,
  }));

  useEffect(() => {
    const setInitalSelectedCategory = () => {
      const initalCategoryData = foundMenuCategoryData?.items.find(item => item.id === categoryId);
      setSelectedCategory([
        { id: initalCategoryData?.id, title: initalCategoryData?.category } as Category,
      ]);
    };

    setInitalSelectedCategory();
  }, [categoryId]);

  const handleClickCategory = (category: Category) => {
    setSelectedCategory([category]);
  };

  useEffect(() => {
    onSearchSelectedKeyword(selectedCategory);
  }, [selectedCategory]);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategories={selectedCategory}
        onClickCategory={handleClickCategory}
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
