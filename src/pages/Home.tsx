import { Outlet, useOutlet } from 'react-router-dom';

import Header from 'components/Navigation/Header/Header';
import CommonPopup from 'components/Popup/CommonPopup';
import usePopup from 'hooks/usePopup';

import Profile from './home/AsideProfile/Profile';
import Solution from './home/AsideProfile/Solution';
import PassionTemperature from './home/PassionTemperature';
import { ReactComponent as Badge } from './home/res/img/badge.svg';
import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  const { isShow, setIsShow } = usePopup();

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
            <CommonPopup
              popupController={{ isShow, setIsShow }}
              popup={
                <>
                  {isShow && (
                    <>
                      <Profile />
                      <Solution />
                    </>
                  )}
                </>
              }
              popupButton={<>{!isShow && <Badge onClick={() => setIsShow(!isShow)} />}</>}
            />

            {/*<Aside />*/}
          </S.Sidebar>
        </S.Layout>
      )}
    </>
  );
};
