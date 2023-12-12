import { useEffect, useState } from 'react';

import { useRecoilState, useSetRecoilState } from 'recoil';

import { categoryList } from 'components/ActivityHistory/data/category';
import { ReactComponent as ExpandMore } from 'components/ActivityHistory/res/img/expand_more.svg';
import * as S from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal.styles';
import { idsState, inputValuesState } from 'store/activityHistory';

export type InterestList = {
  id: string;
  title: string;
  keyWords: string[];
};

type CategorySelectProps = {
  pathData: string | null;
};

export const CategorySelect = ({ pathData }: CategorySelectProps) => {
  const setCategoryId = useSetRecoilState(idsState('categoryId')); //path 값
  const [categoryValue, setCategoryValue] = useRecoilState(inputValuesState('category'));
  const [categoryOptions, setCategoryOptions] = useState(false);

  const onSelectCategory = (category: InterestList) => {
    setCategoryId(category.id);
    setCategoryValue(category.title);
    setCategoryOptions(prev => !prev);
  };

  const handleCategoryToggle = () => {
    setCategoryOptions(prev => !prev);
  };

  const onBlurInput = () => setCategoryOptions(false);

  useEffect(() => {
    if (pathData) {
      setCategoryValue(pathData);
    }
  }, [pathData]);

  return (
    <S.SelectBox show={categoryOptions}>
      <label>
        <S.SelectInput
          type='text'
          placeholder='활동내역 분야를 선택해주세요.'
          value={categoryValue}
          onClick={handleCategoryToggle}
          onBlur={onBlurInput}
          readOnly
          disabled={pathData ? true : false}
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
