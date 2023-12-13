import { useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import CertificateCategoryFilter from 'components/CertificateCategoryFilter/CertificateCategoryFilter';
import LanguageCategoryFilter from 'components/LanguageCategoryFilter/LanguageCategoryFilter';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import RestCategoryFilter from 'components/RestCategoryFilter/RestCategoryFilter';

const menuPaths = ['competition', 'outside', 'qnet', 'language', 'intern', 'community'];

const Menu = () => {
  const [selectedKeyword] = useState<Keyword[]>([]);

  const { menuName, categoryId } = useParams();
  const navigate = useNavigate();

  const menuToCategoryFilter: Record<string, JSX.Element> = {
    competition: <RestCategoryFilter />,
    outside: <RestCategoryFilter />,
    intern: <RestCategoryFilter />,
    qnet: <CertificateCategoryFilter />,
    language: <LanguageCategoryFilter />,
  };

  const selectedCategoryFilter = menuToCategoryFilter[menuName as string];

  if (!categoryId) navigate('/');
  if (!menuPaths.find(path => path === menuName)) {
    throw new Error('Not Found Address');
  }

  return (
    <MenuWrapper>
      <MenuHeadContent>{selectedCategoryFilter}</MenuHeadContent>

      <Outlet context={{ selectedKeyword }} />
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  grid-column: span 12;
  margin-top: 32px;
`;
const MenuHeadContent = styled.div`
  padding-bottom: 32px;
`;
