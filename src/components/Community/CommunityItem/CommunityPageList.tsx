import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useOutletContext, useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { requestCommunityData } from 'apis/community';
import { requestCommunityCount } from 'apis/communityCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { useControlPageParam } from 'hooks/useControlPageParam';
import theme from 'styles/theme';

import CommunityItem from './CommunityItem';
import { CommunitySearch } from './CommunitySearch';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

export const CommunityPageList = () => {
  const { menuName } = useParams();
  const [communityList, setCommunityList] = useState<Community[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  // const [category, setCategory] = useState<string[]>([]);

  // useEffect(() => {
  //   const updatedCategory: string[] = [];

  //   selectedKeyword.forEach(el => {
  //     if (el.path) {
  //       setClassify(el.path);
  //       updatedTest.push(el.id);
  //     }
  //   });
  //   setTest(updatedTest);

  //   setCategory(updatedCategory);
  // }, [selectedKeyword]);

  console.log(selectedKeyword);
  useEffect(() => {
    (async () => {
      try {
        const res = await requestCommunityData(getPageParam as string);
        const totalCount = await requestCommunityCount();
        setCommunityList(res.data.data);
        setTotalCount(totalCount.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, getPageParam]);

  const renderList = (list: Community[]) => {
    return list.map(el => (
      <CommunityItem
        id={el.id}
        key={el.id}
        category={el.category}
        title={el.title}
        date={el.date}
        view={el.view}
        like={el.like}
        comment={el.comment}
        user={el.user}
      />
    ));
  };

  if (communityList)
    return (
      <>
        <StyledHeader>
          <CommunitySearch setCommunityList={setCommunityList} />
          <StyledWriteButton>작성하기</StyledWriteButton>
        </StyledHeader>

        <List>{renderList(communityList)}</List>

        <MenuPagination currentPage={currentPage} totalItemsCount={totalCount} itemsPerPage={10} />
      </>
    );
};
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledWriteButton = styled.button`
  width: 108px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid ${theme.palette.black100};
  background-color: ${theme.palette.background.primary50};
  color: ${theme.palette.orange500};
  cursor: pointer;
`;

const List = styled.div``;
