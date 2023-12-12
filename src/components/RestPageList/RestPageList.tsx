import { SetStateAction, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { PostCardProps } from 'types/postCard.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import PostCard from 'components/commons/PostCard/PostCard';
import { NoResult } from 'components/Error/NoResult';
import { HashTagData } from 'components/HashTagFilter/type';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { moneyToNumber } from './utils/moneyToNumber';

type UseOutletType = {
  selectedKeyword: HashTagData[];
};

export const RestPageList = () => {
  const { menuName } = useParams();
  const [postPageList, setPostPageList] = useState<PostCardProps[]>([]);
  const [totalCount, setTotalCount] = useState(1);

  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;
  const userId = useLoaderData() as { id: string };

  const { selectedKeyword } = useOutletContext<UseOutletType>();
  const [interests, setInterests] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [scale, setScale] = useState<string[]>([]);
  const [target, setTarget] = useState<string[]>([]);

  useEffect(() => {
    const updatedInterests: SetStateAction<string[]> = [];
    const updatedBenefits: SetStateAction<string[]> = [];
    const updatedScale: SetStateAction<string[]> = [];
    const updatedTarget: SetStateAction<string[]> = [];

    selectedKeyword.forEach(el => {
      if (el.path === 'competition_field') {
        updatedInterests.push(el.id);
      } else if (el.path === 'award_scale') {
        const convertedNumber = moneyToNumber(el.id);
        updatedScale.push(convertedNumber);
      } else if (el.path === 'award_benefits') {
        updatedBenefits.push(el.id);
      } else {
        updatedTarget.push(el.id);
      }
    });
    setInterests(updatedInterests);
    setBenefits(updatedBenefits);
    setScale(updatedScale);
    setTarget(updatedTarget);
  }, [selectedKeyword]);

  console.log(selectedKeyword);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const arrayToString = (arr: string[]) => {
          return arr.length === 0 ? undefined : arr.join(',');
        };

        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
          interests: arrayToString(interests),
          benefits: arrayToString(benefits),
          scale: arrayToString(scale),
          target: arrayToString(target),
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
  }, [menuName, getPageParam, userId, interests, benefits, scale]);

  return (
    <>
      {postPageList.length !== 0 ? (
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
          <MenuPagination
            currentPage={currentPage}
            totalItemsCount={totalCount}
            itemsPerPage={12}
          />
        </>
      ) : (
        <NoResult />
      )}
    </>
  );
};

const PostCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 53px 24px;
`;
