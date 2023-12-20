import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';

import { requestUserKeywordData } from 'apis/crawling';
import CategoryFilter from 'components/MenuFilter/CategoryFilter';
import KeywordFilter, { Keyword } from 'components/MenuFilter/KeywordFilter';
import { MenuId, getMenuById } from 'pages/menu/menuCategoies';

type Props = {
  onSearchSelectedKeyword: (selectedKeywords: Keyword[]) => void;
};

const RestCategoryFilter: FC<Props> = ({ onSearchSelectedKeyword }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [isOn, setIsOn] = useState(false);
  const { menuName, categoryId } = useParams();
  const navigate = useNavigate();

  const foundMenuCategoryData = getMenuById(menuName! as MenuId);
  const categories = foundMenuCategoryData?.items.map(item => item.category);

  useEffect(() => {
    setSelectedKeywords([]);

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
  };

  const foundKeywordList = foundMenuCategoryData?.items.find(
    item => item.category === selectedCategory,
  );

  const keywordList: Keyword[] = Object.entries(foundKeywordList?.keywords || []).map(
    ([key, value]) => ({
      path: foundKeywordList?.id,
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

  const handleClickToggleSwitch = async () => {
    if (!localStorage.getItem('accessToken')) return navigate('/login');

    try {
      const res = await requestUserKeywordData(menuName as string);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
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
        onClickToggleSwitch={handleClickToggleSwitch}
        isShowSwitch
        isOn={isOn}
        setIsOn={setIsOn}
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

export default RestCategoryFilter;

const MenuFilterWrapper = styled.div`
  background-color: ${props => props.theme.palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
`;
