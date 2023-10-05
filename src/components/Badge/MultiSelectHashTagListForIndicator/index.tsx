import { FC } from 'react';

import styled from '@emotion/styled';

import { HashTagData } from 'components/Badge/type';
import HashTag from 'components/HashTag';

import { ReactComponent as CloseIcon } from './res/images/close.svg';

interface Props {
  selectedHashTagList: HashTagData[];
  onDeleteClick: (hashTag: HashTagData) => void;
}

const MultiSelectHashTags: FC<Props> = ({ selectedHashTagList, onDeleteClick }) => {
  return (
    <Container>
      {selectedHashTagList.map(hash => (
        <CustomHashTag
          key={hash.id}
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
      ))}
    </Container>
  );
};

export default MultiSelectHashTags;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrapper = styled.div`
  margin-left: 12px;
  cursor: pointer;
`;

const CustomHashTag = styled(HashTag)`
  margin-right: 8px;
  margin-top: 16px;
  white-space: nowrap;
`;
