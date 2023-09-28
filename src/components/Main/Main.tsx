import styled from '@emotion/styled';

import { CardList } from 'components/CardList/CardList';
import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
import Profile from 'pages/home/AsideProfile/Profile';

export const Main = () => {
  return (
    <>
      <Carousel />
      <Sidebar>
        <Profile />
      </Sidebar>
      <CardListMenuBar />
      <CardList />
    </>
  );
};

export const Sidebar = styled.aside`
  background-color: lightslategrey;
  grid-column: span 3;
`;
