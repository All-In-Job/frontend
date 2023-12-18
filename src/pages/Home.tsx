import { useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useLoaderData, useOutlet } from 'react-router-dom';

import Aside from 'components/Aside/Aside';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

import AsideProfile from './home/AsideProfile';

export const Home = () => {
  const outlet = useOutlet();
  const loader = useLoaderData();

  const [marginTop, setMarginTop] = useState('');

  const isHeaderShown = () => {
    const { pathname } = location;
    if (pathname.includes('login')) return null;
    if (pathname.includes('signup')) return null;
    return <Header />;
  };

  return (
    <>
      {isHeaderShown()}
      <Layout setMarginTop={setMarginTop}>{outlet ? <Outlet /> : <Main />}</Layout>
      <Sidebar style={{ marginTop }}>{loader ? <AsideProfile /> : <Aside />}</Sidebar>
    </>
  );
};

const Sidebar = styled.aside``;
