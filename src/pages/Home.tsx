import { useEffect, useLayoutEffect, useRef } from 'react';

import { Outlet, useLocation, useNavigate, useOutlet, useSearchParams } from 'react-router-dom';

import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';
import theme from 'styles/theme';

import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  const navigate = useNavigate();
  const location = useLocation();

  const layoutEl = useRef<HTMLDivElement>(null);
  const kakaoToken = useSearchParams()[0].get('code');
  const orangeBg = ['/login', '/signup', '/find-id'];

  useLayoutEffect(() => {
    const Layout = layoutEl.current;
    Layout &&
      setLayoutMarginTop(Layout, getHeaderHeight(Layout.previousSibling as HTMLHeadElement));

    if (kakaoToken) {
      // 서버에 카카오 액세스 토큰 전송하여 가입된 유저인지 확인
      // 1. 서버에 가입된 유저이면 메인 페이지로 이동
      // navigate('/');
      // 2. 서버에서 가입된 유저가 아니라고 하면 아래 로직 처리
      window.opener.postMessage({ kakaoToken }, window.location.origin);
      window.close();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleKakaoAuth);
  }, []);

  const handleKakaoAuth = (e: MessageEvent) => {
    const { code } = e.data;
    if (!code) return;

    navigate('/signup/basic-info', { state: code });
  };

  const getHeaderHeight = (header: HTMLElement | null) => {
    if (header) return header.offsetHeight;
    return 0;
  };
  const setLayoutMarginTop = (layout: HTMLElement, height: number) => {
    layout.style.marginTop = height + 'px';
  };

  if (kakaoToken) return null;
  return (
    <>
      <Header />
      <S.Layout
        ref={layoutEl}
        style={{
          backgroundColor: orangeBg.find(value => value === location.pathname)
            ? theme.palette.orange400
            : '',
        }}
      >
        {outlet ? <Outlet /> : <Main />}
      </S.Layout>
    </>
  );
};

// normal
// main, menu
