import { useContext } from 'react';

import styled from '@emotion/styled';
import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';

export const CardListMenuBar = () => {
  const homeCardList = useContext(HomeCardListContext);

  return (
    <>
      {homeCardList && (
        <MenuBar menusLength={homeCardList?.cardMenus.length}>
          {homeCardList?.cardMenus.map(item => {
            const { id, text, icon: Icon, path } = item;

            return (
              <Menu key={id} onClick={() => homeCardList?.selectedCardMenu(path)}>
                <StyledIconBox isSelected={homeCardList?.getParams === path}>
                  <Icon fill={homeCardList?.getParams === path ? 'white' : '#FD6B36'} />
                </StyledIconBox>
                <MenuText>{text}</MenuText>
              </Menu>
            );
          })}
        </MenuBar>
      )}
    </>
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
