import { useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/CertificatePageList/CertificatePageList';

const MenuList = () => {
  const { menuName } = useParams();

  return <div>{menuName === 'qnet' && <CertificatePageList />}</div>;
};

export default MenuList;
