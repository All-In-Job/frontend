import { useState } from 'react';

import styled from '@emotion/styled';
import { ReactComponent as IconAbc } from 'assets/icons/icon_abc.svg';
import { ReactComponent as IconDesign } from 'assets/icons/icon_design.svg';
import { ReactComponent as IconLight } from 'assets/icons/icon_light.svg';
import { ReactComponent as IconMoney } from 'assets/icons/icon_money.svg';
import { ReactComponent as IconMusic } from 'assets/icons/icon_music.svg';
import { ReactComponent as IconProgram } from 'assets/icons/icon_program.svg';
import { ReactComponent as MenuBook } from 'assets/icons/menu_book.svg';

const menus = [
  {
    id: 1,
    icon: MenuBook,
    text: '문학',
  },
  {
    id: 2,
    icon: IconDesign,
    text: '디자인',
  },
  {
    id: 3,
    icon: IconProgram,
    text: '프로그래밍',
  },
  {
    id: 4,
    icon: IconMoney,
    text: '금융',
  },
  {
    id: 5,
    icon: IconMusic,
    text: '예체능',
  },
  {
    id: 6,
    icon: IconAbc,
    text: '어학',
  },
  {
    id: 7,
    icon: IconLight,
    text: '창업 사업',
  },
];

export const CardListMenuBar = () => {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <MenuBar>
      {menus.map(item => {
        const { id, text, icon: Icon } = item;

        return (
          <Menu key={id} onClick={() => setSelectedId(item.id)}>
            <StyledIconBox isSelected={id === selectedId}>
              <Icon fill={selectedId === id ? 'white' : '#FD6B36'} />
            </StyledIconBox>
            <MenuText>{text}</MenuText>
          </Menu>
        );
      })}
    </MenuBar>
  );
};

const MenuBar = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
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
