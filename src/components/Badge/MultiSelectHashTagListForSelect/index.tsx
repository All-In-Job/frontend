import { FC } from 'react';

import styled from '@emotion/styled';

import HashTag from 'components/Badge/HashTag';
import { HashTagData } from 'components/Badge/type';

interface Props {
  hashTagList: HashTagData[];
  selectedHashTagList: HashTagData[];
  onSelect: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ hashTagList, selectedHashTagList, onSelect }) => {
  return (
    <Container>
      {hashTagList.map(hash => (
        <div key={hash.id} onClick={() => onSelect(hash)}>
          <HashTag
            isActive={selectedHashTagList.some(h => h.id === hash.id)}
            text={hash.title as string}
          />
        </div>
      ))}
    </Container>
  );
};

export default MultiSelectHashTags;

const Container = styled.div``;
