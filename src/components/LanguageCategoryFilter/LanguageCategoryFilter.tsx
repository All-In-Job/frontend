import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { isAxiosError } from 'axios';
import { useParams } from 'react-router-dom';

import { requestUserKeywordData } from 'apis/crawling';
import CategoryFilter from 'components/MenuFilter/CategoryFilter';
import KeywordFilter, { Keyword } from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

type Props = {
  onSearchSelectedKeyword: (selectedKeywords: Keyword[]) => void;
};

const LanguageCategoryFilter: FC<Props> = ({ onSearchSelectedKeyword }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [userKeywords, setUserKeywords] = useState<string[]>([]);
  const [isOn, setIsOn] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
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
      path: foundKeywordList?.category,
      id: key,
      title: value,
    }),
  );

  const handleClickKeyword = (keyword: Keyword) => {
    const isSelected = selectedKeywords.some(kw => kw.id === keyword.id);

    if (isSelected) {
      const updatedKeywords = selectedKeywords.filter(kw => kw.id !== keyword.id);
      setSelectedKeywords(updatedKeywords);
    } else {
      setSelectedKeywords(selectedKeywords => [...selectedKeywords, keyword]);
    }
  };

  const handleClickSelectedKeyword = (keyword: Keyword) => {
    const updatedKeywords = selectedKeywords.filter(kw => kw.id !== keyword.id);
    setSelectedKeywords(updatedKeywords);
  };

  useEffect(() => {
    onSearchSelectedKeyword(selectedKeywords);
  }, [selectedKeywords]);

  useEffect(() => {
    (async () => {
      try {
        if (isOn) {
          const res = await requestUserKeywordData(menuName as string);
          setSelectedKeywords([]);
          setUserKeywords(res.data.keyword);
          setIsDisabled(true);
        } else {
          setUserKeywords([]);
          setIsDisabled(false);
        }
      } catch (error) {
        if (isAxiosError(error)) throw new Error(error.response?.data);
      }
    })();
  }, [isOn, menuName]);

  return (
    <MenuFilterWrapper>
      <CategoryFilter
        title={foundMenuCategoryData?.title as string}
        categories={categories}
        selectedCategory={selectedCategory}
        onClickCategory={handleClickCategory}
        isShowSwitch
        isOn={isOn}
        setIsOn={setIsOn}
      />
      <KeywordFilter
        keywordList={keywordList}
        selectedKeywords={selectedKeywords}
        userKeywords={userKeywords}
        onClickResetKeywords={handleClickResetKeywords}
        onClickKeyword={handleClickKeyword}
        onClickSelectedKeyword={handleClickSelectedKeyword}
        isDisabled={isDisabled}
      />
    </MenuFilterWrapper>
  );
};

export default LanguageCategoryFilter;

const MenuFilterWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
`;
