import { Outlet, useOutlet } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

export const Home = () => {
  const outlet = useOutlet();

  const isNotLoginPage = location.pathname !== '/login';

  return (
    <>
      <Layout>
        {isNotLoginPage && <Header />}
        {outlet ? <Outlet /> : <Main />}
      </Layout>
    </>
  );
};
