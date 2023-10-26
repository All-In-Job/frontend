import { useParams } from 'react-router-dom';

// import { CertificatePageList } from 'components/CertificatePageList/CertificatePageList';
import { CommunityPageList } from 'components/CommunityItem/CommunityPageList';

const MenuList = () => {
  const { menuName } = useParams();

  return (
    <div>
      <div>{menuName} 리스트 컴포넌트</div>
      {menuName === 'community' && <CommunityPageList />}
    </div>
  );
};

export default MenuList;
