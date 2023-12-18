import { useEffect } from 'react';

import { Outlet, useOutlet } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { getLoginUserInfo } from 'apis/user';
import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import Header from 'components/Navigation/Header/Header';
import { loginUserState } from 'store/user';

export const Home = () => {
  const [, setLoginUser] = useRecoilState(loginUserState);
  const outlet = useOutlet();

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
      <Layout>{outlet ? <Outlet /> : <Main />}</Layout>
    </>
  );
};
