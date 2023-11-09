import { Outlet, useOutlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Layout } from 'components/Layout/Layout';
import { Main } from 'components/Main/Main';
import { MyInfoUpdateModal } from 'components/Modals/MyInfoUpdateModal';
import Header from 'components/Navigation/Header/Header';
import { isModalVisibleState } from 'store/modal';

export const Home = () => {
  const outlet = useOutlet();
  const isModalVisible = useRecoilValue(isModalVisibleState);

  const isHeaderShown = () => {
    const { pathname } = location;
    if (pathname.includes('login')) return null;
    if (pathname.includes('signup')) return null;
    return <Header />;
  };

  const isModalShown = () => {
    if (isModalVisible.myInfoUpdate) return <MyInfoUpdateModal />;
    return null;
  };

  return (
    <>
      {isModalShown()}
      {isHeaderShown()}
      <Layout>{outlet ? <Outlet /> : <Main />}</Layout>
    </>
  );
};
