import styled from '@emotion/styled';
// import HomeCardListProvider from 'contexts/homeCardMenuContext/homeCardMenuContext';

import { ActivityHistory } from 'components/ActivityHistory/ActivityHistory';
// import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
// import { MainPageList } from 'components/MainPageList/MainPageList';
// import Profile from 'pages/home/AsideProfile/Profile';

export const Main = () => {
  return (
    <>
      <Carousel />
      {/*<Sidebar>*/}
      {/*  <Profile />*/}
      {/*</Sidebar>*/}
      {/* <HomeCardListProvider>
        <CardListMenuBar />
        <MainPageList />
      </HomeCardListProvider> */}
      <ActivityHistory />
    </>
  );
};

export const Sidebar = styled.aside`
  background-color: lightslategrey;
  grid-column: span 3;
`;
