import { Outlet, useOutlet } from 'react-router-dom';

import Header from 'components/Navigation/Header/Header';
import CreatePortal from 'components/Popup/CreatePortal';
import usePopup from 'hooks/usePopup';

import Profile from './home/AsideProfile/Profile';
import Solution from './home/AsideProfile/Solution';
import PassionTemperature from './home/PassionTemperature';
import { ReactComponent as Badge } from './home/res/img/badge.svg';
import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  const { isShow, setIsShow } = usePopup();
  console.log(isShow);
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
            {/* <CardList /> */}
          </S.Main>
          <S.Sidebar>
            <div id='popup' />
            {isShow ? (
              <CreatePortal domId='popup' onClose={() => setIsShow(false)}>
                <>
                  <Profile />
                  <Solution />
                </>
              </CreatePortal>
            ) : (
              <Badge onClick={() => setIsShow(!isShow)} />
            )}

            {/*<Aside />*/}
          </S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
