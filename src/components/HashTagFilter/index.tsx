import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import MultiSelectHashTagsForIndicator from 'components/HashTagFilter/MultiSelectIndicator';
import { HashTagData } from 'components/HashTagFilter/type';
import MultiSelectHashTagsForSelect from 'components/HashTagList';

import BadgeHeader from './BadgeHeader';

interface Props {
  title: string;
  hashTagList: HashTagData[];

  //해쉬태그 선택 했을때 선택된 해시태그 정보를 args 로 받고 통신을 하는 함수
  onSearch: (hashTagList: HashTagData[]) => void;

  //해쉬태그 선택을 모두 해제했을때 실행되는 콜백
  onRefresh: () => void;
  className?: string;
}

const HashTagFilter: FC<Props> = ({ hashTagList, title, onSearch, onRefresh, className }) => {
  const [selectedHashs, setSelectedHashs] = useState<HashTagData[]>([]);
  const { menuName } = useParams();

  useEffect(() => {
    setSelectedHashs([]);
  }, [menuName]);

  useEffect(() => {
    const resetHashtahs = () => {
      if (menuName === 'qnet' || menuName === 'language') setSelectedHashs([]);
    };

    resetHashtahs();
  }, [hashTagList]);

  const handleSelectedHashTags = (value: HashTagData) => {
    let result: HashTagData[] = [];

    if (selectedHashs.find(item => item.id === value.id)) {
      result = selectedHashs.filter(item => item.id !== value.id);
    } else {
      result = [...selectedHashs, value];
    }

    setSelectedHashs(result);
    onSearch(result);
  };

  const handleDeleteClick = (value: HashTagData) => {
    setSelectedHashs(selectedHashs.filter(item => item.id !== value.id));
  };

  const handleClickRefresh = () => {
    setSelectedHashs([]);
    onRefresh();
  };

  const HashTagFilter = selectedHashs.length !== 0;

  return (
    <Container className={className}>
      <BadgeHeader
        title={title}
        onRefreshClick={handleClickRefresh}
        refreshButtonDisabled={!HashTagFilter}
      />
      <MultiSelectHashTagsForSelect
        onSelect={handleSelectedHashTags}
        selectedHashTagList={selectedHashs}
        hashTagList={hashTagList}
      />
      {HashTagFilter && <Border />}
      <MultiSelectHashTagsForIndicator
        onDeleteClick={handleDeleteClick}
        selectedHashTagList={selectedHashs}
      />
    </Container>
  );
};

export default HashTagFilter;

const Container = styled.div`
  display: flex;
  width: 1200px;
  padding: 0 32px 16px 32px;
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
