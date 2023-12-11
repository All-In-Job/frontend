import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import CategoryFilter from 'components/MenuFilter/CategoryFilter';
import KeywordFilter from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

const RestCategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { menuName, categoryId } = useParams();

  const foundMenuCategoryData = getMenuById(menuName! as MenuId);
  const categories = foundMenuCategoryData?.items.map(item => item.category);

  useEffect(() => {
    const setInitalSelectedCategory = () => {
      const initalCategoryData = foundMenuCategoryData?.items.find(item => item.id === categoryId);
      setSelectedCategory(initalCategoryData?.category as string);
    };

    setInitalSelectedCategory();
  }, [categoryId]);

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const foundKeywordList = foundMenuCategoryData?.items.find(
    item => item.category === selectedCategory,
  );

  const keywordList = Object.entries(foundKeywordList?.keywords || []).map(([key, value]) => ({
    id: key,
    title: value,
  }));

  console.log(keywordList);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategory={selectedCategory}
        onClickCategory={handleClickCategory}
      />
      <KeywordFilter keywordList={keywordList} />
    </MenuFilterWrapper>
  );
};

export default RestCategoryFilter;

const MenuFilterWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
`;
