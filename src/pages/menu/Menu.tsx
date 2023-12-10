import { useState } from 'react';

import styled from '@emotion/styled';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

// import CategoryFilter from 'components/CategoryFilter';
// import { CategoryData } from 'components/CategoryFilter/type';
// import HashTagFilter from 'components/HashTagFilter';
import { HashTagData } from 'components/HashTagFilter/type';
import RestCategoryFilter from 'components/RestCategoryFilter/RestCategoryFilter';

// import { MenuId, getMenuById } from './menuCategoies';

const menuPaths = ['competition', 'outside', 'qnet', 'language', 'intern', 'community'];

const Menu = () => {
  // const [keywords, setKeywords] = useState<HashTagData[]>([]);
  const [selectedKeyword] = useState<HashTagData[]>([]);

  const { menuName, categoryId } = useParams();
  const navigate = useNavigate();
  // const foundMenuCategories = getMenuById(menuName! as MenuId);

  const menuToCategoryFilter: Record<string, JSX.Element> = {
    competition: <RestCategoryFilter />,
    outside: <RestCategoryFilter />,
    intern: <RestCategoryFilter />,
  };

  const selectedCategoryFilter = menuToCategoryFilter[menuName as string];

  if (!categoryId) navigate('/');
  if (!menuPaths.find(path => path === menuName)) {
    throw new Error('Not Found Address');
  }

  // const categoryList: CategoryData[] =
  //   foundMenuCategories?.items.map(item => ({
  //     id: item.id,
  //     title: item.category,
  //   })) || [];

  // const searchKeywordsByCategory = useCallback(
  //   (selectedCategory: CategoryData[]) => {
  //     if (selectedCategory.length > 0) {
  //       const foundItem = foundMenuCategories?.items.find(
  //         item => item.id === selectedCategory[0].id,
  //       );

  //       if (foundItem) {
  //         const keywords = foundItem?.keywords || {};
  //         const keywordsArr: HashTagData[] = Object.entries(keywords).map(([id, title]) => ({
  //           id,
  //           title,
  //         }));

  //         setKeywords(keywordsArr);
  //       }
  //     }
  //   },
  //   [foundMenuCategories],
  // );

  // const searchSelectedKeywords = useCallback(
  //   (selectedKeywords: HashTagData[]) => {
  //     setSelectedKeyword(selectedKeywords);
  //   },
  //   [selectedKeyword],
  // );

  return (
    <MenuWrapper>
      {/* <MenuHeadContent>
        <CategoryFilter
          title={foundMenuCategories?.title as string}
          categoryList={categoryList}
          onSearch={searchKeywordsByCategory}
          onClickMyInterest={() => true}
        />
        <HashTagFilter
          title='키워드'
          hashTagList={keywords}
          onSearch={searchSelectedKeywords}
          onRefresh={() => function () {}}
        />
      </MenuHeadContent> */}

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
