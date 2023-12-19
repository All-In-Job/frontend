import { useEffect, useState } from 'react';
import * as React from 'react';

import styled from '@emotion/styled';
import { Outlet, useLoaderData, useOutlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getLoginUserInfo } from 'apis/user';
import Aside from 'components/Aside/Aside';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';
import { loginUserState } from 'store/user';

import AsideProfile from './home/AsideProfile';

import Element = React.JSX.Element;

export const Home = () => {
  const [, setLoginUser] = useRecoilState(loginUserState);
  const outlet = useOutlet();
  const loader = useLoaderData();

  const [marginTop, setMarginTop] = useState('');

  const isComponentShown = (Component: () => Element) => {
    const { pathname } = location;
    if (pathname.includes('login')) return null;
    return React.createElement(Component, null, null);
  };

  const hasAside = () => {
    const { pathname } = location;
    if (pathname.includes('login')) return { marginTop: 0, height: '100%' };
    return { display: 'flex', justifyContent: 'center', gap: 35, marginTop };
  };

  useEffect(() => {
    (async () => {
      const res = (await getLoginUserInfo()).data.data;
      setLoginUser({ id: res.id, nickname: res.nickname, profileImage: res.profileImage });
    })();
  }, []);

  return (
    <div style={hasAside()}>
      {isComponentShown(Header)}
      <Layout setMarginTop={location.pathname.includes('login') ? undefined : setMarginTop}>
        {outlet ? <Outlet /> : <Main />}
      </Layout>
      <Sidebar>{isComponentShown(loader ? AsideProfile : Aside)}</Sidebar>
    </div>
  );
};

const Sidebar = styled.aside``;
