import { useParams } from 'react-router-dom';

import { CertificatePageList } from 'components/CertificatePageList/CertificatePageList';

const MenuList = () => {
  const { menuName } = useParams();

  return (
    <div>
      <div>{menuName} 리스트 컴포넌트</div>
      <CertificatePageList />
    </div>
  );
};

export default MenuList;
