import HomeCardListProvider from 'contexts/homeCardMenuContext/homeCardMenuContext';

import { CardListMenuBar } from 'components/CardListMenuBar/CardListMenuBar';
import { Carousel } from 'components/Carousel/Carousel';
import { MainPageList } from 'components/MainPageList/MainPageList';

export const Main = () => {
  return (
    <>
      <Carousel />
      <HomeCardListProvider>
        <CardListMenuBar />
        <MainPageList />
      </HomeCardListProvider>
    </>
  );
};
