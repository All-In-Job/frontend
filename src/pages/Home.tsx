import { Outlet, useOutlet } from 'react-router-dom';

import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      <S.Layout>{outlet ? <Outlet /> : <Main />}</S.Layout>
    </>
  );
};
