import { FC } from 'react';

import { Shape } from 'components/HashTag';
import * as S from 'components/HashTagFilter/badge.style';
import { HashTagData } from 'components/HashTagFilter/type';

interface Props {
  hashTagList: HashTagData[];
  selectedHashTagList: HashTagData[];
  onSelect: (hashTag: HashTagData) => void;
  shape?: Shape;
}

const MultiSelectHashTags: FC<Props> = ({ hashTagList, selectedHashTagList, onSelect, shape }) => {
  return (
    <S.Container>
      {hashTagList.map(hash => (
        <S.CustomHashTag
          shape={shape}
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
