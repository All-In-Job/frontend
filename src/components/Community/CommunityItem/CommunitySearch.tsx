import { Dispatch, FC, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as ArrowExpandIcon } from 'assets/icons/icon_expand_more.svg';
import { Community } from 'types/community.type';

import { getCommunitySearchResult } from 'apis/community';
import theme from 'styles/theme';

type Props = {
  setCommunityList: Dispatch<SetStateAction<Community[]>>;
};

export const CommunitySearch: FC<Props> = ({ setCommunityList }) => {
  const [selected, setSelected] = useState('title');
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const requestSearchResult = async () => {
    getCommunitySearchResult(selected, text)
      .then(res => {
        setCommunityList(res.data.data);
      })
      .catch(err => console.log(err));
  };
  const filterSearchTarget = (target: string) => {
    let translated: string = '';
    if (target === '제목 + 내용') translated = 'content';
    if (target === '제목') translated = 'title';
    if (target === '글작성자') translated = 'nickName';
    setSelected(translated);
  };

  return (
    <StyledSearch>
      <StyledSelect onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <StyledUl isOpen={isOpen}>
          {['제목 + 내용', '제목', '글작성자'].map(item => (
            <StyledOption onClick={() => filterSearchTarget(item)}>{item}</StyledOption>
          ))}
        </StyledUl>
        <StyledArrowIconContainer isOpen={isOpen}>
          <ArrowExpandIcon />
        </StyledArrowIconContainer>
      </StyledSelect>
      <StyledSearchBar
        placeholder='취준job담을 검색해보세요!'
        onChange={e => setText(e.target.value)}
      />
      <StyledSearchButton onClick={() => requestSearchResult()}>검색</StyledSearchButton>
    </StyledSearch>
  );
};

const StyledSearch = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StyledSelect = styled.div`
  position: relative;
  width: 206px;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${theme.palette.black100};
  cursor: pointer;
`;
const StyledArrowIconContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  right: 5px;
  top: 50%;
  padding-top: 3px;
  transform: ${props => (props.isOpen ? 'rotate(180deg) translateY(50%)' : 'translateY(-50%)')};
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
