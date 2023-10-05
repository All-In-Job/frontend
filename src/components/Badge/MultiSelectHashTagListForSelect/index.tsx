import { FC } from 'react';

import styled from '@emotion/styled';

import { HashTagData } from 'components/Badge/type';
import HashTag from 'components/HashTag';

interface Props {
  hashTagList: HashTagData[];
  selectedHashTagList: HashTagData[];
  onSelect: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ hashTagList, selectedHashTagList, onSelect }) => {
  return (
    <Container>
      {hashTagList.map(hash => (
        <CustomHashTag
          key={hash.id}
          onClick={() => onSelect(hash)}
          isActive={selectedHashTagList.some(h => h.id === hash.id)}
          text={hash.title as string}
        />
      ))}
    </Container>
  );
};

export default MultiSelectHashTags;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CustomHashTag = styled(HashTag)`
  margin-right: 8px;
  margin-top: 16px;
  white-space: nowrap;
`;
