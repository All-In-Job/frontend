import { createContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { HashTagData } from 'components/HashTagFilter/type';

type MenuListContext = {
  selectedHashs: HashTagData[];
  setSelectedHashs: React.Dispatch<React.SetStateAction<HashTagData[]>>;
};

export const MenuListContext = createContext<MenuListContext | null>(null);

const MenuListProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedHashs, setSelectedHashs] = useState<HashTagData[]>([]);
  const { menuName } = useParams();

  useEffect(() => {
    setSelectedHashs([]);
  }, [menuName]);

  return (
    <MenuListContext.Provider value={{ selectedHashs, setSelectedHashs }}>
      {children}
    </MenuListContext.Provider>
  );
};

export default MenuListProvider;
