import { Dispatch, FC, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import { Community } from 'types/community.type';

import theme from 'styles/theme';

type Props = {
  setCommunityList: Dispatch<SetStateAction<Community[]>>;
};

export const CommunitySearch: FC<Props> = ({ setCommunityList }) => {
  const [selected, setSelected] = useState('제목 + 내용');
  const [isOpen, setIsOpen] = useState(false);

  const searchItemsRequest = async (selected: string) => {
    console.log(selected);
    setCommunityList([]);
  };

  return (
    <StyledHeader>
      <StyledSearch>
        <StyledSelect onClick={() => setIsOpen(!isOpen)}>
          {selected}
          <StyledUl isOpen={isOpen}>
            {['제목 + 내용', '제목', '글작성자'].map(item => (
              <StyledOption onClick={() => setSelected(item)}>{item}</StyledOption>
            ))}
          </StyledUl>
        </StyledSelect>
        <StyledSearchBar placeholder='취준job담을 검색해보세요!' />
        <StyledSearchButton onClick={() => searchItemsRequest(selected)}>검색</StyledSearchButton>
      </StyledSearch>
      <StyledWriteButton>작성하기</StyledWriteButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledSearch = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
`;
const StyledSelect = styled.div`
  position: relative;
  width: 206px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${theme.palette.black100};
  cursor: pointer;
`;
const StyledUl = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  box-shadow:
    0px 9px 28px 8px rgba(0, 0, 0, 0.05),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 3px 6px -4px rgba(0, 0, 0, 0.12);
`;
const StyledOption = styled.li`
  padding: 12px;
  border-bottom: 1px solid ${theme.palette.line};
  background-color: white;
  &:hover {
    background-color: ${theme.palette.background.primary};
  }
`;
const StyledSearchBar = styled.input`
  width: 470px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${theme.palette.black100};
`;
const StyledSearchButton = styled.button`
  padding: 12px 24px;
  height: 100%;
  border-radius: 4px;
  background-color: ${theme.palette.orange500};
  color: white;
  cursor: pointer;
`;
const StyledWriteButton = styled.button`
  width: 108px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${theme.palette.black100};
  background-color: ${theme.palette.background.primary50};
  color: ${theme.palette.orange500};
  cursor: pointer;
`;