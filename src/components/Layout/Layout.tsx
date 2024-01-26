import { Dispatch, FC, PropsWithChildren, SetStateAction, useLayoutEffect, useRef } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import theme from 'styles/theme';

import * as S from './layout.styles';

type Props = {
  setMarginTop?: Dispatch<SetStateAction<string>>;
};

export const Layout: FC<PropsWithChildren<Props>> = ({ children, setMarginTop }) => {
  const location = useLocation();
  const layoutEl = useRef<HTMLDivElement>(null);
  const kakaoToken = useSearchParams()[0].get('code');

  const orangeBg = ['/login', '/signup', '/find-id'];

  const setLayoutMarginTop = (height: number) => {
    setMarginTop && setMarginTop(height + 32 + 'px');
  };

  const getHeaderHeight = (header: HTMLElement | null) => {
    if (header) return header.offsetHeight;
    return 0;
  };

  useLayoutEffect(() => {
    const Layout = layoutEl.current;
    if (Layout) {
      const Header = Layout.previousSibling;
      setLayoutMarginTop(getHeaderHeight(Header as HTMLHeadElement));
    }

    if (kakaoToken) {
      // 서버에 카카오 액세스 토큰 전송하여 가입된 유저인지 확인
      // 1. 서버에 가입된 유저이면 메인 페이지로 이동
      // navigate('/');
      // 2. 서버에서 가입된 유저가 아니라고 하면 아래 로직 처리
      window.opener.postMessage({ kakaoToken }, window.location.origin);
      window.close();
    }
  }, []);

  return (
    <S.Layout
      ref={layoutEl}
      style={{
        backgroundColor: orangeBg.find(value => value === location.pathname)
          ? theme.palette.orange400
          : '',
      }}
    >
      {children}
    </S.Layout>
  );
};
