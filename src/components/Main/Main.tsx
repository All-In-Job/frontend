import styled from '@emotion/styled';

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
    </>
  );
};

export const Sidebar = styled.aside`
  background-color: lightslategrey;
  grid-column: span 3;
`;
