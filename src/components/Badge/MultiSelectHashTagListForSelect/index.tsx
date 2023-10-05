import { FC } from 'react';

import * as S from 'components/Badge/badge.style';
import { HashTagData } from 'components/Badge/type';

interface Props {
  hashTagList: HashTagData[];
  selectedHashTagList: HashTagData[];
  onSelect: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ hashTagList, selectedHashTagList, onSelect }) => {
  return (
    <S.Container>
      {hashTagList.map(hash => (
        <S.CustomHashTag
          key={hash.id}
          onClick={() => onSelect(hash)}
          isActive={selectedHashTagList.some(h => h.id === hash.id)}
          text={hash.title as string}
        />
      ))}
    </S.Container>
  );
};

export default MultiSelectHashTags;
