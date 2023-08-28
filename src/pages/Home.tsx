import { Outlet, useOutlet } from 'react-router-dom';

import Aside from 'components/Aside/Aside';
import { CardList } from 'components/CardList/CardList';
import { Carousel } from 'components/Carousel/Carousel';
import { ContestMenuBar } from 'components/ContestMenuBar/ContestMenuBar';
import Header from 'components/Navigation/Header/Header';

import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  return (
    <>
      <Header />
      {/*<FindID />*/}x
      {outlet ? (
        <Outlet />
      ) : (
        <S.Layout>
          <S.Main>
            <Carousel />
            <ContestMenuBar />
            <CardList />
          </S.Main>
          <S.Sidebar>
            <Aside />
          </S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
