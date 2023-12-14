import { SetStateAction, useEffect, useState } from 'react';

import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Inter } from 'types/intern.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { NoResult } from 'components/Error/NoResult';
import { HashTagData } from 'components/HashTagFilter/type';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { InternPageItem } from './InternInfo/InternPageItem';
import * as S from './InternPageList.styles';

const TableName = ['기업명', '공고명', '지역', '마감일', '조회수', '스크랩'];
type UseOutletType = {
  selectedKeyword: HashTagData[];
};
export const InternPageList = () => {
  const { menuName } = useParams();
  const [InternPageList, setInternPageList] = useState<Inter[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;
  const userId = useLoaderData() as { id: string };

  const { selectedKeyword } = useOutletContext<UseOutletType>();

  const [institution, setInstitution] = useState<string[]>([]);
  const [preferentialTreatment, setPreferentialTreatment] = useState<string[]>([]);
  const [location, setLocation] = useState<string[]>([]);

  useEffect(() => {
    const updatedInstitution: SetStateAction<string[] | undefined> = [];
    const updatedPreferentialTreatment: SetStateAction<string[] | undefined> = [];
    const updatedLocation: SetStateAction<string[]> = [];

    selectedKeyword.forEach(el => {
      if (el.path === 'company_type') {
        updatedInstitution.push(el.id);
      } else if (el.path === 'job_position') {
        updatedPreferentialTreatment.push(el.id);
      } else {
        updatedLocation.push(el.id);
      }
    });

    setInstitution(updatedInstitution);
    setPreferentialTreatment(updatedPreferentialTreatment);
    setLocation(updatedLocation);
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
          location: arrayToString(location),
          institution: arrayToString(institution),
          preferentialTreatment: arrayToString(preferentialTreatment),
          id: userId?.id,
        };

        const res = await requestCrawlingData(menuName as string, queries);
        const totalCount = await requestCrawlingTotalCount(menuName as string);
        setInternPageList(res.data.data as Inter[]);
        setTotalCount(totalCount.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [
    menuName,
    getPageParam,
    userId,
    selectedKeyword,
    location,
    institution,
    preferentialTreatment,
  ]);

  return (
    <>
      {InternPageList.length !== 0 ? (
        <S.InternContainer>
          <S.TableTitle>
            {TableName.map(el => {
              return <S.Heading key={el}>{el}</S.Heading>;
            })}
          </S.TableTitle>
          {InternPageList.map(el => (
            <InternPageItem
              key={el.id}
              id={el.id}
              preferentialTreatment={el.preferentialTreatment}
              view={el.view}
              mainImage={el.mainImage}
              enterprise={el.enterprise}
              scrap={el.scrap}
              closeDate={el.closeDate}
              location={el.location}
              title={el.title}
              isScrap={el.isScrap}
            />
          ))}
          <MenuPagination
            currentPage={currentPage}
            totalItemsCount={totalCount}
            itemsPerPage={12}
          />
        </S.InternContainer>
      ) : (
        <NoResult />
      )}
    </>
  );
};
