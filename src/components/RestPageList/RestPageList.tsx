import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLoaderData, useParams } from 'react-router-dom';
import { PostCardProps } from 'types/postCard.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import PostCard from 'components/commons/PostCard/PostCard';
import { useControlPageParam } from 'hooks/useControlPageParam';

export const RestPageList = () => {
  const { menuName } = useParams();
  const [postPageList, setPostPageList] = useState<PostCardProps[]>([]);
  const [totalCount, setTotalCount] = useState(1);

  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;
  const userId = useLoaderData() as { id: string };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
        };

        const res = await requestCrawlingData(menuName as string, queries);
        const totalCount = await requestCrawlingTotalCount(menuName as string);
        setPostPageList(res.data.data as PostCardProps[]);
        setTotalCount(totalCount.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [menuName, getPageParam, userId]);

  return (
    <>
      <PostCardWrapper>
        {postPageList.map(el => {
          return (
            <PostCard
              key={el.id}
              id={el.id}
              mainImage={el.mainImage}
              enterprise={el.enterprise}
              title={el.title}
              Dday={el.Dday}
              applicationPeriod={el.applicationPeriod}
              scrap={el.scrap}
              view={el.view}
              location={el.location}
              index={null}
              isScrap={el.isScrap}
            />
          );
        })}
      </PostCardWrapper>
      <MenuPagination currentPage={currentPage} totalItemsCount={totalCount} itemsPerPage={12} />
    </>
  );
};

const PostCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 53px 24px;
`;
