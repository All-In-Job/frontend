import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { requestCommunityData } from 'apis/community';
import { requestCommunityCount } from 'apis/communityCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { useControlPageParam } from 'hooks/useControlPageParam';

import CommunityItem from './CommunityItem';

export const CommunityPageList = () => {
  const { menuName } = useParams();
  const [communityList, setCommunityList] = useState<Community[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;

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
  if (communityList)
    return (
      <>
        <List>
          {communityList.map(el => (
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
          ))}
        </List>

        <MenuPagination
          currentPage={currentPage}
          totalItemsCount={totalCount}
          pageItemsCount={communityList.length}
        />
      </>
    );
};

const List = styled.div``;
