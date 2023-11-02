import { useContext } from 'react';

import { MenuListContext } from 'contexts/menuListContext';
import { useOutletContext, useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/Certificate/CertificatePageList/CertificatePageList';
import { CommunityPageList } from 'components/CommunityItem/CommunityPageList';
import { HashTagData } from 'components/HashTagFilter/type';
import { InternPageList } from 'components/InternPageList/InternPageList';
import { LanguagePageList } from 'components/LanguagePageList/LanguagePageList';

type UseOutletType = {
  selectedKeyword: HashTagData[];
};

const MenuList = () => {
  const { menuName } = useParams();
  const menuList = useContext(MenuListContext);
  const { selectedKeyword } = useOutletContext<UseOutletType>();

  console.log(menuList);
  console.log(selectedKeyword);

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
