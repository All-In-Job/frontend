import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { PostCardProps } from 'types/postCard.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import PostCard from 'components/commons/PostCard/PostCard';
import { arrayToString } from 'components/commons/utils/arrayToString';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { useControlPageParam } from 'hooks/useControlPageParam';

type UseOutletType = {
  selectedKeyword: Keyword[];
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
  const [scale, setScale] = useState<string[]>([]);
  const [benefits, setBenefits] = useState<string[]>([]);
  const [target, setTarget] = useState<string[]>([]);

  const [field, setField] = useState<string[]>([]); // 활동분야
  const [month, setMonth] = useState<string[]>([]); // 활동기간
  const [location, setLocation] = useState<string[]>([]); // 지역

  useEffect(() => {
    if (menuName !== 'competition') return;

    const updatedInterests: string[] = [];
    const updatedScale: string[] = [];
    const updatedBenefits: string[] = [];
    const updatedTarget: string[] = [];

    selectedKeyword.forEach(el => {
      switch (el.path) {
        case 'competition_field':
          updatedInterests.push(el.id);
          break;
        case 'award_scale':
          updatedScale.push(el.id);
          break;
        case 'award_benefits':
          updatedBenefits.push(el.id);
          break;
        case 'support_target':
          updatedTarget.push(el.id);
          break;
      }
    });

    setInterests(updatedInterests);
    setScale(updatedScale);
    setBenefits(updatedBenefits);
    setTarget(updatedTarget);
  }, [menuName, selectedKeyword]);

  useEffect(() => {
    if (menuName !== 'outside') return;

    const updatedField: string[] = [];
    const updatedInterests: string[] = [];
    const updatedBenefits: string[] = [];
    const updatedMonth: string[] = [];
    const updatedLocation: string[] = [];

    selectedKeyword.forEach(el => {
      switch (el.path) {
        case 'activity_field':
          updatedField.push(el.id);
          break;
        case 'area_of_interest':
          updatedInterests.push(el.id);
          break;
        case 'activity_benefits':
          updatedBenefits.push(el.id);
          break;
        case 'activity_duration':
          updatedMonth.push(el.id);
          break;
        case 'location':
          updatedLocation.push(el.id);
          break;
      }
    });

    setField(updatedField);
    setInterests(updatedInterests);
    setBenefits(updatedBenefits);
    setMonth(updatedMonth);
    setLocation(updatedLocation);
  }, [menuName, selectedKeyword]);

  console.log(selectedKeyword);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
          interests: arrayToString(interests),
          scale: arrayToString(scale),
          benefits: arrayToString(benefits),
          target: arrayToString(target),
          field: arrayToString(field),
          month: arrayToString(month),
          location: arrayToString(location),
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
  }, [menuName, getPageParam, userId, interests, scale, benefits, target, field, month, location]);

  return (
    <>
      {postPageList.length !== 0 ? (
        <RestPageListContainer>
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
        </RestPageListContainer>
      ) : (
        <NoResult />
      )}
    </>
  );
};

const RestPageListContainer = styled.div`
  width: 100%;
`;
const PostCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 53px 24px;
`;
