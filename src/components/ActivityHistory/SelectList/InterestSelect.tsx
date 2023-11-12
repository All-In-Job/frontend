import { useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import categoryList from 'components/ActivityHistory/data/category.json';
import * as S from 'components/ActivityHistory/Modal.styles';
import { ReactComponent as ExpandMore } from 'components/ActivityHistory/res/img/expand_more.svg';
import { categoryIdState, currentCategoryState, currentKeywordState } from 'store/activityHistory';

export type InterestList = {
  id: string;
  title: string;
  keyWords: string[];
};

export const InterestSelect = () => {
  const categoryId = useRecoilValue(categoryIdState);
  const currentCategory = useRecoilValue(currentCategoryState);
  const [currentKeyword, setCurrentKeyword] = useRecoilState(currentKeywordState);
  const [keywordOptions, setKeywordOptions] = useState(false);

  const interestList = categoryList.find(el => el.id === categoryId);

  const onSelectKeyword = (e: { currentTarget: { innerText: string } }) => {
    const { innerText } = e.currentTarget;
    setCurrentKeyword(innerText);
    setKeywordOptions(prev => !prev);
  };

  const handleKeywordToggle = () => {
    if (currentCategory === '') return;
    setKeywordOptions(prev => !prev);
  };

  const onBlurInput = () => setKeywordOptions(false);

  return (
    <S.SelectBox show={keywordOptions}>
      <label>
        <S.SelectInput
          type='text'
          placeholder='활동 분야를 선택해주세요.'
          value={currentKeyword}
          onClick={handleKeywordToggle}
          onBlur={onBlurInput}
          readOnly
        />
        <ExpandMore />
      </label>
      {keywordOptions && (
        <S.DropdownContainer>
          <S.SelectOptions>
            {interestList?.keyWords.map(keyword => {
              return (
                <S.Option key={keyword} onMouseDown={onSelectKeyword}>
                  {`${keyword}`}
                </S.Option>
              );
            })}
          </S.SelectOptions>
        </S.DropdownContainer>
      )}
    </S.SelectBox>
  );
};
