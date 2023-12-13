import { useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import CertificateCategoryFilter from 'components/CertificateCategoryFilter/CertificateCategoryFilter';
import LanguageCategoryFilter from 'components/LanguageCategoryFilter/LanguageCategoryFilter';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import RestCategoryFilter from 'components/RestCategoryFilter/RestCategoryFilter';

const menuPaths = ['competition', 'outside', 'qnet', 'language', 'intern', 'community'];

const Menu = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<Keyword[]>([]);

  const { menuName, categoryId } = useParams();
  const navigate = useNavigate();

  if (!categoryId) navigate('/');
  if (!menuPaths.find(path => path === menuName)) {
    throw new Error('Not Found Address');
  }

  const onSearch = (selectedKeywords: Keyword[]) => {
    setSelectedKeyword(selectedKeywords);
  };

  const menuToCategoryFilter: Record<string, JSX.Element> = {
    competition: <RestCategoryFilter onSearchSelectedKeyword={onSearch} />,
    outside: <RestCategoryFilter onSearchSelectedKeyword={onSearch} />,
    intern: <RestCategoryFilter onSearchSelectedKeyword={onSearch} />,
    qnet: <CertificateCategoryFilter onSearchSelectedKeyword={onSearch} />,
    language: <LanguageCategoryFilter onSearchSelectedKeyword={onSearch} />,
  };

  const selectedCategoryFilter = menuToCategoryFilter[menuName as string];

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
