import { createContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { CardMenus, cardMenus } from './cardMenus';

type HomeCardListContext = {
  selectedCardMenu: (type: string) => void;
  getParams: string;
  cardMenus: CardMenus[];
};

export const HomeCardListContext = createContext<HomeCardListContext | null>(null);

const HomeCardListProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  let getParams = searchParams.get('menu');

  if (!getParams) getParams = cardMenus[0].path;

  const selectedCardMenu = (type: string) => {
    navigate(`?menu=${type}`);
  };

  return (
    <HomeCardListContext.Provider value={{ selectedCardMenu, getParams, cardMenus }}>
      {children}
    </HomeCardListContext.Provider>
  );
};

export default HomeCardListProvider;
