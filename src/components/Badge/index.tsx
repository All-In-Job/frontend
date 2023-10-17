import { FC, useState } from 'react';

import styled from '@emotion/styled';

import MultiSelectHashTagsForIndicator from 'components/Badge/MultiSelectIndicator';
import { HashTagData } from 'components/Badge/type';
import MultiSelectHashTagsForSelect from 'components/HashTagList';

import BadgeHeader from './BadgeHeader';

interface Props {
  title: string;
  hashTagList: HashTagData[];

  //해쉬태그 선택 했을때 선택된 해시태그 정보를 args 로 받고 통신을 하는 함수
  onSearch: (hashTagList: HashTagData[]) => void;
  className?: string;
}

const MultiSelectTags: FC<Props> = ({ hashTagList, title, className }) => {
  const [selectedHashs, setSelectedHashs] = useState<HashTagData[]>([]);

  const handleSelectedHashTags = (value: HashTagData) => {
    if (selectedHashs.find(item => item.id === value.id)) {
      setSelectedHashs(selectedHashs.filter(item => item.id !== value.id));
    } else {
      setSelectedHashs([...selectedHashs, value]);
    }
  };

  const handleDeleteClick = (value: HashTagData) => {
    setSelectedHashs(selectedHashs.filter(item => item.id !== value.id));
  };

  const handleClickRefresh = () => {
    setSelectedHashs([]);
  };

  const hasSelectedItems = selectedHashs.length !== 0;

  return (
    <Container className={className}>
      <BadgeHeader
        title={title}
        onRefreshClick={handleClickRefresh}
        refreshButtonDisabled={!hasSelectedItems}
      />
      <MultiSelectHashTagsForSelect
        onSelect={handleSelectedHashTags}
        selectedHashTagList={selectedHashs}
        hashTagList={hashTagList}
      />
      {hasSelectedItems && <Border />}
      <MultiSelectHashTagsForIndicator
        onDeleteClick={handleDeleteClick}
        selectedHashTagList={selectedHashs}
      />
    </Container>
  );
};

export default MultiSelectTags;

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
