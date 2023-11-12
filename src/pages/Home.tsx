import { Outlet, useOutlet } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

export const Home = () => {
  const outlet = useOutlet();

  const isHeaderShown = () => {
    const { pathname } = location;
    if (pathname.includes('login')) return null;
    if (pathname.includes('signup')) return null;
    return <Header />;
  };

  return (
    <>
      {isHeaderShown()}
      <Layout>{outlet ? <Outlet /> : <Main />}</Layout>
    </>
  );
};
