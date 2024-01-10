import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { AxiosError } from 'axios';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { requestCommunityData } from 'apis/community';
import { requestCommunityCount } from 'apis/communityCount';
import { findUserProfile } from 'apis/user';
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
  const { getPageParam, searchParameter, setSearchParameter } = useControlPageParam();
  const navigate = useNavigate();
  const currentPage = getPageParam ? Number(getPageParam) : 1;

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [category, setCategory] = useState<string>('전체');

  useEffect(() => {
    if (selectedKeyword.length !== 0) {
      selectedKeyword.forEach(el => {
        setCategory(el.title);
      });
    }
  }, [selectedKeyword]);

  const navigateToWritePage = () => {
    findUserProfile()
      .then(res => {
        if (res.status === 200) {
          navigate('/community/newpost');
        }
      })
      .catch(e => {
        if (e instanceof AxiosError) {
          alert('로그인 후 이용해주시기 바랍니다.');
        }
      });
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await requestCommunityData(getPageParam as string, category);
        setCommunityList(res.data.data);
        if (category === '전체') {
          const totalCount = await requestCommunityCount();
          setTotalCount(totalCount.data.data);
        } else {
          const totalCount = await requestCommunityCount(category);
          setTotalCount(totalCount.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, getPageParam, category]);

  useEffect(() => {
    searchParameter.set('page', String(1));
    setSearchParameter(searchParameter);
  }, [selectedKeyword]);

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
        path={`/${menuName}/detail/${el.id}`}
      />
    ));
  };

  if (communityList)
    return (
      <>
        <StyledHeader>
          <CommunitySearch setCommunityList={setCommunityList} />
          <StyledWriteButton onClick={navigateToWritePage}>작성하기</StyledWriteButton>
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
