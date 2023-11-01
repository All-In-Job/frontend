import { useContext } from 'react';

import { MenuListContext } from 'contexts/menuListContext';
import { useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/CertificatePageList/CertificatePageList';
import { CommunityPageList } from 'components/CommunityItem/CommunityPageList';
import { InternPageList } from 'components/InternPageList/InternPageList';
import { LanguagePageList } from 'components/LanguagePageList/LanguagePageList';

const MenuList = () => {
  const { menuName } = useParams();
  const menuList = useContext(MenuListContext);

  console.log(menuList);

  const menuToComponent: Record<string, JSX.Element> = {
    qnet: <CertificatePageList />,
    language: <LanguagePageList />,
    intern: <InternPageList />,
    community: <CommunityPageList />,
  };

  const selectedComponent = menuToComponent[menuName as string];

  return (
    <div>
      <div>{menuName} 리스트 컴포넌트</div>
      {selectedComponent || null}
    </div>
  );
};

export default MenuList;
