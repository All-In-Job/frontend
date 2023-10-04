import { FC } from 'react';

import styled from '@emotion/styled';

import HashTag from 'components/Badge/HashTag';
import { HashTagData } from 'components/Badge/type';

import { ReactComponent as CloseIcon } from './res/images/close.svg';

interface Props {
  selectedHashTagList: HashTagData[];
  onDeleteClick: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ selectedHashTagList, onDeleteClick }) => {
  return (
    <Container>
      {selectedHashTagList.map(hash => (
        <div key={hash.id}>
          <HashTag
            isActive={selectedHashTagList.some(h => h.id === hash.id)}
            text={
              <>
                {hash.title}
                <IconWrapper>
                  <CloseIcon onClick={() => onDeleteClick(hash)} />
                </IconWrapper>
              </>
            }
          />
        </div>
      ))}
    </Container>
  );
};

export default MultiSelectHashTags;

const Container = styled.div``;

const IconWrapper = styled.div`
  margin-left: 12px;
  cursor: pointer;
`;
