import { FC, useState } from 'react';

import styled from '@emotion/styled';

import MultiSelectHashTagsForIndicator from 'components/Badge/MultiSelectHashTagListForIndicator';
import MultiSelectHashTagsForSelect from 'components/Badge/MultiSelectHashTagListForSelect';
import { HashTagListData } from 'components/Badge/MultiSelectHashTagListForSelect/mock/hashTags';
import { ReactComponent as RefreshIcon } from 'components/Badge/res/image/refresh.svg';
import { HashTagData } from 'components/Badge/type';

interface Props {
  title: string;
  className?: string;
}

const MultiSelectTags: FC<Props> = ({ title, className }) => {
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
      <Header>
        <Title>{title}</Title>
        <RefreshButton disabled={!hasSelectedItems} onClick={handleClickRefresh}>
          <ButtonTitle>초기화</ButtonTitle>
          <IconWrapper>
            <RefreshIcon />
          </IconWrapper>
        </RefreshButton>
      </Header>
      <MultiSelectHashTagsForSelect
        onSelect={handleSelectedHashTags}
        selectedHashTagList={selectedHashs}
        hashTagList={HashTagListData}
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

const Title = styled.h4`
  color: var(--black-500, #121110);
  font-feature-settings: 'ss10' on;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.134px;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  padding: 16px 32px;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff6f2;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
`;

const ButtonTitle = styled.span`
  margin-right: 3px;
  color: var(--black-200, #a0a09f);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const IconWrapper = styled.div`
  margin-bottom: 2px;
`;

const Border = styled.div`
  margin: 24px auto;
  height: 1px;
  width: 100%;
  background-color: var(--line-normal, #e1e2e4);
`;
