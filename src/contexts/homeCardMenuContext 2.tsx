import { createContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

type HomeCardListContext = {
  selectedCardMenu: (type: string) => void;
  getParams: string;
};

export const HomeCardListContext = createContext<HomeCardListContext | null>(null);

const HomeCardListProvider = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  let getParams = searchParams.get('menu');

  const navigate = useNavigate();

  if (!getParams) getParams = 'outside';

  const selectedCardMenu = (type: string) => {
    navigate(`?menu=${type}`);
  };

  return (
    <HomeCardListContext.Provider value={{ selectedCardMenu, getParams }}>
      {children}
    </HomeCardListContext.Provider>
  );
};

export default HomeCardListProvider;
