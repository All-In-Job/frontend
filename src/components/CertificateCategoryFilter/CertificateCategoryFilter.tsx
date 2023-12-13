import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import CategoryFilter from 'components/MenuFilter/CategoryFilter';
import KeywordFilter, { Keyword } from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

type Props = {
  onSearchSelectedKeyword: (selectedKeywords: Keyword[]) => void;
};

const CertificateCategoryFilter: FC<Props> = ({ onSearchSelectedKeyword }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
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

  const handleClickResetKeywords = () => {
    setSelectedKeywords([]);
  };

  const handleClickCategory = (category: string) => {
    setSelectedCategory(category);
    setSelectedKeywords([]);
  };

  const foundKeywordList = foundMenuCategoryData?.items.find(
    item => item.category === selectedCategory,
  );

  const keywordList: Keyword[] = Object.entries(foundKeywordList?.keywords || []).map(
    ([key, value]) => ({
      id: key,
      title: value,
    }),
  );

  const handleClickKeyword = (keyword: Keyword) => {
    setSelectedKeywords([keyword]);
  };

  const handleClickSelectedKeyword = (keyword: Keyword) => {
    const updatedKeywords = selectedKeywords.filter(kw => kw.id !== keyword.id);
    setSelectedKeywords(updatedKeywords);
  };

  useEffect(() => {
    onSearchSelectedKeyword(selectedKeywords);
  }, [selectedKeywords]);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategory={selectedCategory}
        onClickCategory={handleClickCategory}
      />
      <KeywordFilter
        keywordList={keywordList}
        selectedKeywords={selectedKeywords}
        onClickResetKeywords={handleClickResetKeywords}
        onClickKeyword={handleClickKeyword}
        onClickSelectedKeyword={handleClickSelectedKeyword}
      />
    </MenuFilterWrapper>
  );
};

export default CertificateCategoryFilter;

const MenuFilterWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
`;
