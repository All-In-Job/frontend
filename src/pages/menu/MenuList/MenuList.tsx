import { useOutletContext, useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/Certificate/CertificatePageList/CertificatePageList';
import { CommunityPageList } from 'components/Community/CommunityItem/CommunityPageList';
import { InternPageList } from 'components/InternPageList/InternPageList';
import { LanguagePageList } from 'components/LanguagePageList/LanguagePageList';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { RestPageList } from 'components/RestPageList/RestPageList';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

const MenuList = () => {
  const { menuName } = useParams();
  const { selectedKeyword } = useOutletContext<UseOutletType>();
  console.log(selectedKeyword);

  const menuToComponent: Record<string, JSX.Element> = {
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
