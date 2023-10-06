import { useContext } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as IconActivity } from 'assets/icons/icon_activity.svg';
import { ReactComponent as IconBoard } from 'assets/icons/icon_board.svg';
import { ReactComponent as IconCertification } from 'assets/icons/icon_certification.svg';
import { ReactComponent as IconContest } from 'assets/icons/icon_contest.svg';
import { ReactComponent as IconIntern } from 'assets/icons/icon_intern.svg';
import { HomeCardListContext } from 'contexts/homeCardMenuContext';

type MenusPath = 'intern' | 'outside' | 'competition' | 'qnet' | 'toeic' | 'toeicBR' | 'toeicSW';

const menus = [
  {
    id: 1,
    icon: IconContest,
    text: '공모전',
    path: 'outside',
  },
  {
    id: 2,
    icon: IconActivity,
    text: '대외활동',
    path: 'intern',
  },
  {
    id: 3,
    icon: IconCertification,
    text: '자격증',
    path: 'competition',
  },
  {
    id: 4,
    icon: IconIntern,
    text: '인턴',
    path: 'qnet',
  },
  {
    id: 5,
    icon: IconBoard,
    text: '취준job담',
    path: 'community',
  },
];

console.log(menus.length);

export const CardListMenuBar = () => {
  const homeCardList = useContext(HomeCardListContext);

  return (
    <MenuBar menusLength={menus.length}>
      {menus.map(item => {
        const { id, text, icon: Icon, path } = item;

        return (
          <Menu key={id} onClick={() => homeCardList?.selectedCardMenu(path as MenusPath)}>
            <StyledIconBox isSelected={homeCardList?.getParams === path}>
              <Icon fill={homeCardList?.getParams === path ? 'white' : '#FD6B36'} />
            </StyledIconBox>
            <MenuText>{text}</MenuText>
          </Menu>
        );
      })}
    </MenuBar>
  );
};

const MenuBar = styled.ul<{ menusLength: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.menusLength}, 1fr)`};
  gap: 24px;
  grid-column: span 12;
  padding: 32px 24px;
`;
const Menu = styled.li`
  display: grid;
  place-items: center;
  row-gap: 8px;
`;
const StyledIconBox = styled.div<{ isSelected: boolean }>`
  width: 98px;
  height: 98px;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: ${props => (props.isSelected ? '#FD6B36' : '#ededed')};
`;
const MenuText = styled.span`
  text-align: center;
`;
