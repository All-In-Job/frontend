import { ChangeEvent, useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { requestActivityCrawlingData } from 'apis/activityHistoryCrawling';
import * as S from 'components/ActivityHistory/Modal.styles';
import { categoryIdState, currentKeywordState } from 'store/activityHistory';

type QueryConfig = {
  [category: string]: { [key: string]: string };
};

export const TitleSelect = () => {
  const categoryId = useRecoilValue(categoryIdState);
  const currentKeyword = useRecoilValue(currentKeywordState);
  const [activityData, setActivityData] = useState<string[]>([]);
  const [inputTitleValue, setInputTitleValue] = useState<string>('');
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);

  const searchTitle = activityData.filter(title => title.includes(inputTitleValue));
  const removeDuplicates = (titles: string[]): string[] => [...new Set(titles)];

  const onChangeInputTitleValue = (e: ChangeEvent<HTMLInputElement>) =>
    setInputTitleValue(e.target.value);

  const onSelectTitle = (title: string) => setInputTitleValue(title);

  const onFocusInput = () => setIsVisibleTitle(true);
  const onBlurInput = () => setIsVisibleTitle(false);

  const fetchData = async () => {
    const createQueries = (categoryId: string) => {
      const queryConfig: QueryConfig = {
        qnet: { mainCategory: currentKeyword },
        language: { classify: currentKeyword },
        intern: { preferentialTreatment: currentKeyword },
      };
      return queryConfig[categoryId] || { interests: currentKeyword };
    };

    try {
      const res = await requestActivityCrawlingData(
        categoryId as string,
        createQueries(categoryId),
      );
      const titleList = res.data.data.map(({ title }) => title);
      setActivityData(titleList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (currentKeyword) fetchData();
    }, 500);
    return () => clearTimeout(debounce);
  }, [currentKeyword]);

  return (
    <>
      <S.SelectInput
        type='text'
        placeholder='활동명을 입력해주세요.'
        value={inputTitleValue}
        onChange={onChangeInputTitleValue}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
      />
      {isVisibleTitle && (
        <S.DropdownContainer>
          <S.SelectOptions>
            {removeDuplicates(searchTitle)?.map(title => (
              <S.Option key={title} onMouseDown={() => onSelectTitle(title)}>
                {title}
              </S.Option>
            ))}
          </S.SelectOptions>
        </S.DropdownContainer>
      )}
    </>
  );
};
