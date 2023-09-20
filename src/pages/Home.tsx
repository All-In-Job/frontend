import { Outlet, useOutlet } from 'react-router-dom';

import { CardList } from 'components/CardList/CardList';
import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
import Header from 'components/Navigation/Header/Header';
import Profile from 'pages/home/AsideProfile/Profile';
// import Solution from 'pages/home/AsideProfile/Solution';
// import PassionTemperature from 'pages/home/PassionTemperature';

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
          {/*<PassionTemperature />*/}
          <Carousel />
          {/*<ContestMenuBar />*/}
          <S.Sidebar>
            <Profile />
            {/*<Solution />*/}
            {/*<Aside />*/}
          </S.Sidebar>
          <CardListMenuBar />
          <CardList />
        </S.Layout>
      )}
    </>
  );
};
