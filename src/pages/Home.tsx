import { Outlet, useOutlet } from 'react-router-dom';

import Header from 'components/Navigation/Header/Header';

import Profile from './home/AsideProfile/Profile';
import Solution from './home/AsideProfile/Solution';
import PassionTemperature from './home/PassionTemperature';
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
            <PassionTemperature />
            {/*<Carousel />*/}
            {/*<ContestMenuBar />*/}
            {/*<CardList />*/}
          </S.Main>
          <S.Sidebar>
            <Profile />
            <Solution />
            {/*<Aside />*/}
          </S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
