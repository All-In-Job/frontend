import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import CategoryFilter from 'components/MenuFilter/CategoryFilter';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

type Category = {
  path: string;
  id: string;
  title: string;
};

type Props = {
  onSearchSelectedKeyword: (selectedKeywords: Keyword[]) => void;
};

const CommunityCategoryFilter: FC<Props> = ({ onSearchSelectedKeyword }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const { menuName, categoryId } = useParams();

  const foundMenuCategoryData = getMenuById(menuName! as MenuId);
  const categories = foundMenuCategoryData?.items.map(item => item.category);
  const foundSelectedCategory = selectedCategory.find(category => category.title);

  useEffect(() => {
    const setInitalSelectedCategory = () => {
      const initalCategoryData = foundMenuCategoryData?.items.find(item => item.id === categoryId);
      setSelectedCategory([
        {
          path: initalCategoryData?.id,
          id: initalCategoryData?.id,
          title: initalCategoryData?.category,
        } as Category,
      ]);
    };

    setInitalSelectedCategory();
  }, [categoryId]);

  const handleClickCategory = (category: string) => {
    const getCategoryData = foundMenuCategoryData?.items.find(item => item.category === category);

    setSelectedCategory([
      {
        path: getCategoryData?.id as string,
        id: getCategoryData?.id as string,
        title: getCategoryData?.category as string,
      },
    ]);
  };

  useEffect(() => {
    onSearchSelectedKeyword(selectedCategory);
  }, [selectedCategory]);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategory={foundSelectedCategory?.title as string}
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
