import { Outlet, useOutlet } from 'react-router-dom';

import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';
import theme from 'styles/theme';

import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <S.Layout
        style={{
          backgroundColor: outlet ? theme.palette.orange400 : '',
        }}
      >
        {outlet ? <Outlet /> : <Main />}
      </S.Layout>
    </>
  );
};
