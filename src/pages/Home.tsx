import { Outlet, useOutlet } from 'react-router-dom';

import Header from 'components/Navigation/Header/Header';

import PassionTemperature from './home/PassionTemperature';
import TemperatureCategory from './home/TemperatureCategory';
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
            <TemperatureCategory />
            {/*<Carousel />*/}
            {/*<ContestMenuBar />*/}
            {/*<CardList />*/}
          </S.Main>
          <S.Sidebar>{/*<Aside />*/}</S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
