import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

export const Home = () => {
  // const outlet = useOutlet();

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('message', handleKakaoAuth);
  }, []);

  const handleKakaoAuth = (e: MessageEvent) => {
    const { code } = e.data;
    if (!code) return;

    navigate('/signup/basic-info', { state: code });
  };

  return (
    <>
      <Header />
      <Layout>
        <Main />
      </Layout>
    </>
  );
};

// normal
// main, menu
