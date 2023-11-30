import { ChangeEvent, useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { requestActivityCrawlingData } from 'apis/activityHistoryCrawling';
import * as S from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal.styles';
import { idsState, inputValuesState } from 'store/activityHistory';

type QueryConfig = {
  [category: string]: { [key: string]: string };
};

type TitleSelectProps = {
  titleData: string | null;
};

export const TitleSelect = ({ titleData }: TitleSelectProps) => {
  const categoryId = useRecoilValue(idsState('categoryId'));
  const keywordValue = useRecoilValue(inputValuesState('keyword'));
  const [activityData, setActivityData] = useState<string[]>([]);
  const [titleValue, setTitleValue] = useRecoilState(inputValuesState('title'));
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);

  const searchTitle = activityData.filter(title => title.includes(titleValue));
  const removeDuplicates = (titles: string[]): string[] => [...new Set(titles)];

  const onChangeInputTitleValue = (e: ChangeEvent<HTMLInputElement>) =>
    setTitleValue(e.target.value);

  const onSelectTitle = (title: string) => setTitleValue(title);

  const onFocusInput = () => setIsVisibleTitle(true);
  const onBlurInput = () => setIsVisibleTitle(false);

  const fetchData = async () => {
    const createQueries = (categoryId: string) => {
      const queryConfig: QueryConfig = {
        qnet: { mainCategory: keywordValue },
        language: { classify: keywordValue },
        intern: { preferentialTreatment: keywordValue },
      };
      return queryConfig[categoryId] || { interests: keywordValue };
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
      if (keywordValue) fetchData();
    }, 500);
    return () => clearTimeout(debounce);
  }, [keywordValue]);

  return (
    <>
      <S.SelectInput
        type='text'
        placeholder='활동명을 입력해주세요.'
        value={titleValue}
        onChange={onChangeInputTitleValue}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        disabled={titleData ? true : false}
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
