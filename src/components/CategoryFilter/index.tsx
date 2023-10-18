import { FC, useState } from 'react';

import styled from '@emotion/styled';

import { CategoryData } from 'components/CategoryFilter/type';
import MultiSelectHashTagsForSelect from 'components/HashTagList';

import CategoryFilterHeader from './CategoryFilterHeader';

interface Props {
  title: string;
  categoryList: CategoryData[];

  //해쉬태그 선택 했을때 선택된 카테고리 정보를 args 로 받고 통신을 하는 함수
  onSearch: (hashTagList: CategoryData[]) => void;

  //내 관심사 스위치 on of 시 작동하는 api 콜백 함수
  onClickMyInterest: (isOn: boolean) => void;
  className?: string;
}

const CategoryFilter: FC<Props> = ({
  categoryList: hashTagList,
  title,
  onSearch,
  onClickMyInterest,
  className,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<CategoryData[]>([]);
  const [isMyInterestOn, setIsMyInterestOn] = useState(false);

  const handleSelectCategory = (value: CategoryData) => {
    const isContainCategory = selectedCategories.find(item => item.id === value.id);
    const result = isContainCategory
      ? selectedCategories.filter(item => item.id !== value.id)
      : [value];

    setSelectedCategories(result);
    onSearch(result);
  };

  const handleClickMyInterestClick = () => {
    const result: boolean = !isMyInterestOn;
    setIsMyInterestOn(result);
    onClickMyInterest(result);
  };

  return (
    <Container className={className}>
      <CategoryFilterHeader
        title={title}
        onMyInterestClick={handleClickMyInterestClick}
        isOn={isMyInterestOn}
      />
      <MultiSelectHashTagsForSelect
        shape='rect'
        onSelect={handleSelectCategory}
        selectedHashTagList={selectedCategories}
        hashTagList={hashTagList}
      />
      <Border />
    </Container>
  );
};

export default CategoryFilter;

const Container = styled.div`
  display: flex;
  width: 1200px;
  padding: 16px 32px 0 32px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff6f2;
`;

const Border = styled.div`
  margin: 24px auto;
  height: 1px;
  width: 100%;
  background-color: var(--line-normal, #e1e2e4);
`;
