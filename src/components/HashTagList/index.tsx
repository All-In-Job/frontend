import { FC } from 'react';

import * as S from 'components/Badge/badge.style';
import { HashTagData } from 'components/Badge/type';
import { Shape } from 'components/HashTag';

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
