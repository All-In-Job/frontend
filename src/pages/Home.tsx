import { useLayoutEffect, useRef } from 'react';

import { Outlet, useOutlet } from 'react-router-dom';

import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';

import * as S from './home.style';

export const Home = () => {
  const outlet = useOutlet();

  const layoutEl = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const Layout = layoutEl.current;
    Layout &&
      setLayoutMarginTop(Layout, getHeaderHeight(Layout.previousSibling as HTMLHeadElement));
  }, []);

  const getHeaderHeight = (header: HTMLElement | null) => {
    if (header) return header.offsetHeight;
    return 0;
  };
  const setLayoutMarginTop = (layout: HTMLElement, height: number) => {
    layout.style.marginTop = height + 'px';
  };

  return (
    <>
      <Header />
      <S.Layout>{outlet ? <Outlet /> : <Main />}</S.Layout>
    </>
  );
};
