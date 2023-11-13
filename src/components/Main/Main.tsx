import { useEffect } from 'react';

import styled from '@emotion/styled';
import { signupApi } from 'apis';
import HomeCardListProvider from 'contexts/homeCardMenuContext/homeCardMenuContext';

import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
import { MainPageList } from 'components/MainPageList/MainPageList';

export const Main = () => {
  useEffect(() => {
    signupApi({
      url: 'getLoginUserInfo',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Carousel />
      {/*<Sidebar>*/}
      {/*  <Profile />*/}
      {/*</Sidebar>*/}
      <HomeCardListProvider>
        <CardListMenuBar />
        <MainPageList />
      </HomeCardListProvider>
    </>
  );
};

export const Sidebar = styled.aside`
  background-color: lightslategrey;
  grid-column: span 3;
`;
