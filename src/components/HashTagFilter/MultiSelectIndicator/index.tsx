import { FC } from 'react';

import styled from '@emotion/styled';

import * as S from 'components/HashTagFilter/badge.style';
import { HashTagData } from 'components/HashTagFilter/type';

import { ReactComponent as CloseIcon } from './res/images/close.svg';

interface Props {
  selectedHashTagList: HashTagData[];
  onDeleteClick: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ selectedHashTagList, onDeleteClick }) => {
  return (
    <Container>
      {selectedHashTagList.map(hash => (
        <S.CustomHashTag
          key={hash.id}
          isActive={selectedHashTagList.some(h => h.id === hash.id)}
          text={
            <>
              #{hash.title}
              <IconWrapper>
                <CloseIcon onClick={() => onDeleteClick(hash)} />
              </IconWrapper>
            </>
          }
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

export const IconWrapper = styled.div`
  margin-left: 12px;
  cursor: pointer;
`;
