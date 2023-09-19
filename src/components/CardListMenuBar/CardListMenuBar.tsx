import { ReactComponent as IconAbc } from 'assets/icons/icon_abc.svg';
import { ReactComponent as IconDesign } from 'assets/icons/icon_design.svg';
import { ReactComponent as IconLight } from 'assets/icons/icon_light.svg';
import { ReactComponent as IconMoney } from 'assets/icons/icon_money.svg';
import { ReactComponent as IconMusic } from 'assets/icons/icon_music.svg';
import { ReactComponent as IconProgram } from 'assets/icons/icon_program.svg';
import { ReactComponent as MenuBook } from 'assets/icons/menu_book.svg';

import * as S from './CardListMenuBar.style';

const menus = [
  {
    id: 1,
    icon: <MenuBook />,
    text: '문학',
  },
  {
    id: 2,
    icon: <IconDesign />,
    text: '디자인',
  },
  {
    id: 3,
    icon: <IconProgram />,
    text: '프로그래밍',
  },
  {
    id: 4,
    icon: <IconMoney />,
    text: '금융',
  },
  {
    id: 5,
    icon: <IconMusic />,
    text: '예체능',
  },
  {
    id: 6,
    icon: <IconAbc />,
    text: '어학',
  },
  {
    id: 7,
    icon: <IconLight />,
    text: '창업 사업',
  },
];

export const CardListMenuBar = () => {
  return (
    <S.MenuBar>
      {menus.map(item => (
        <S.Menu key={item.id}>
          <S.IconBox>
            {item.icon}
            <S.MenuText>{item.text}</S.MenuText>
          </S.IconBox>
        </S.Menu>
      ))}
    </S.MenuBar>
  );
};
