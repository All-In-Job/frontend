import { ReactNode } from 'react';

import { useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/Certificate/CertificatePageList/CertificatePageList';
import { CommunityPageList } from 'components/Community/CommunityItem/CommunityPageList';
import { InternPageList } from 'components/InternPageList/InternPageList';
import { LanguagePageList } from 'components/LanguagePageList/LanguagePageList';
import { RestPageList } from 'components/RestPageList/RestPageList';

const MenuList = () => {
  const { menuName } = useParams();

  const menuToComponent: Record<string, ReactNode> = {
    outside: <RestPageList />,
    competition: <RestPageList />,
    qnet: <CertificatePageList />,
    language: <LanguagePageList />,
    intern: <InternPageList />,
    community: <CommunityPageList />,
  };

  const selectedComponent = menuToComponent[menuName as string];

  return <div>{selectedComponent || null}</div>;
};

export default MenuList;
