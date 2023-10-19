import { useParams } from 'react-router-dom';

const MenuList = () => {
  const { menuName } = useParams();

  return <div>{menuName} 리스트 컴포넌트</div>;
};

export default MenuList;
