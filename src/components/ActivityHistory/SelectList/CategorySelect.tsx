import { useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import categoryList from 'components/ActivityHistory/data/category.json';
import * as S from 'components/ActivityHistory/Modal.styles';
import { ReactComponent as ExpandMore } from 'components/ActivityHistory/res/img/expand_more.svg';
import { categoryIdState, currentCategoryState } from 'store/activityHistory';

export type InterestList = {
  id: string;
  title: string;
  keyWords: string[];
};

export const CategorySelect = () => {
  const setCategoryId = useSetRecoilState(categoryIdState);
  const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);
  const [categoryOptions, setCategoryOptions] = useState(false);

  const onSelectCategory = (category: InterestList) => {
    setCategoryId(category.id);
    setCurrentCategory(category.title);
    setCategoryOptions(prev => !prev);
  };

  const handleCategoryToggle = () => {
    setCategoryOptions(prev => !prev);
  };

  const onBlurInput = () => setCategoryOptions(false);

  return (
    <S.SelectBox show={categoryOptions}>
      <label>
        <S.SelectInput
          type='text'
          placeholder='활동내역 분야를 선택해주세요.'
          value={currentCategory}
          onClick={handleCategoryToggle}
          onBlur={onBlurInput}
          readOnly
        />
        <ExpandMore />
      </label>
      {categoryOptions && (
        <S.DropdownContainer>
          <S.SelectOptions>
            {categoryList.map(el => {
              return (
                <S.Option key={el.id} onMouseDown={() => onSelectCategory(el)}>
                  {el.title}
                </S.Option>
              );
            })}
          </S.SelectOptions>
        </S.DropdownContainer>
      )}
    </S.SelectBox>
  );
};
