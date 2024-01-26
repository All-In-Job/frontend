import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { categoryList } from 'components/ActivityHistory/data/category';
import { ReactComponent as ExpandMore } from 'components/ActivityHistory/res/img/expand_more.svg';
import * as S from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal.styles';
import { idsState, inputValuesState } from 'store/activityHistory';

export type InterestList = {
  id: string;
  title: string;
  keyWords: string[];
};

type InterestSelectProps = {
  keywordData: string | null;
};

export const InterestSelect = ({ keywordData }: InterestSelectProps) => {
  const categoryId = useRecoilValue(idsState('categoryId')); //path 값
  const categoryValue = useRecoilValue(inputValuesState('category'));

  const [keywordValue, setKeywordValue] = useRecoilState(inputValuesState('keyword'));
  const [keywordOptions, setKeywordOptions] = useState(false);

  const interestList = categoryList.find(el => el.id === categoryId);

  const onSelectKeyword = (e: { currentTarget: { innerText: string } }) => {
    const { innerText } = e.currentTarget;
    setKeywordValue(innerText);
    setKeywordOptions(prev => !prev);
  };

  const handleKeywordToggle = () => {
    if (categoryValue === '') return;
    setKeywordOptions(prev => !prev);
  };

  const onBlurInput = () => setKeywordOptions(false);

  useEffect(() => {
    if (keywordData) {
      setKeywordValue(keywordData);
    }
  }, [keywordData]);

  return (
    <S.SelectBox show={keywordOptions}>
      <label>
        <S.SelectInput
          type='text'
          placeholder='활동 분야를 선택해주세요.'
          value={keywordValue}
          onClick={handleKeywordToggle}
          onBlur={onBlurInput}
          readOnly
          disabled={keywordData ? true : false}
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
