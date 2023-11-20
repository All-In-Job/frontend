import styled from '@emotion/styled';
import HomeCardListProvider from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useLoaderData } from 'react-router-dom';

import Aside from 'components/Aside/Aside';
import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
import { MainPageList } from 'components/MainPageList/MainPageList';
import AsideProfile from 'pages/home/AsideProfile';

export const Main = () => {
  const loader = useLoaderData();

  return (
    <>
      <Carousel />
      <Sidebar>{loader ? <AsideProfile /> : <Aside />}</Sidebar>
      <HomeCardListProvider>
        <CardListMenuBar />
        <MainPageList />
      </HomeCardListProvider>
    </>
  );
};

export const Sidebar = styled.aside`
  position: absolute;
  right: 1vw;
  //background-color: lightslategrey;
`;
