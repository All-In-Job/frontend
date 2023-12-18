import { useEffect, useState } from 'react';

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

export const Home = () => {
  const [, setLoginUser] = useRecoilState(loginUserState);
  const outlet = useOutlet();
  const loader = useLoaderData();

  const [marginTop, setMarginTop] = useState('');

  const isHeaderShown = () => {
    const { pathname } = location;
    if (pathname.includes('login')) return null;
    if (pathname.includes('signup')) return null;
    return <Header />;
  };

  useEffect(() => {
    (async () => {
      const res = (await getLoginUserInfo()).data.data;
      setLoginUser({ id: res.id, nickname: res.nickname, profileImage: res.profileImage });
    })();
  }, []);

  return (
    <>
      {isHeaderShown()}
      <Layout setMarginTop={setMarginTop}>{outlet ? <Outlet /> : <Main />}</Layout>
      <Sidebar style={{ marginTop }}>{loader ? <AsideProfile /> : <Aside />}</Sidebar>
    </>
  );
};

const Sidebar = styled.aside``;
