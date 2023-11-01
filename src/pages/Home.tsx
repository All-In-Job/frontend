import { useEffect } from 'react';

import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

export const Home = () => {
  const outlet = useOutlet();

  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoAuth = (e: MessageEvent) => {
      const { kakaoToken } = e.data;
      if (!kakaoToken) return;

      navigate('/signup/basic-info', { state: kakaoToken });
    };

    window.addEventListener('message', handleKakaoAuth);

    return () => {
      window.removeEventListener('message', handleKakaoAuth);
    };
  }, [navigate]);

  return (
    <>
      <Header />
      <Layout>{outlet ? <Outlet /> : <Main />}</Layout>
    </>
  );
};

// normal
// main, menu
