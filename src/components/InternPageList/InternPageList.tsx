import { useEffect, useState } from 'react';

import { useLoaderData, useOutletContext, useParams } from 'react-router-dom';
import { Inter } from 'types/intern.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { arrayToString } from 'components/commons/utils/arrayToString';
import { NoResult } from 'components/Error/NoResult';
import { Keyword } from 'components/MenuFilter/KeywordFilter';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { InternPageItem } from './InternInfo/InternPageItem';
import * as S from './InternPageList.styles';

type UseOutletType = {
  selectedKeyword: Keyword[];
};

const TableName = ['기업명', '공고명', '지역', '마감일', '조회수', '스크랩'];

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
    const updatedInstitution: string[] = [];
    const updatedPreferentialTreatment: string[] = [];
    const updatedLocation: string[] = [];

    selectedKeyword.forEach(el => {
      switch (el.path) {
        case 'company_type':
          updatedInstitution.push(el.id);
          break;
        case 'job_position':
          updatedPreferentialTreatment.push(el.id);
          break;
        case 'work_location':
          updatedLocation.push(el.id);
          break;
      }
    });

    setInstitution(updatedInstitution);
    setPreferentialTreatment(updatedPreferentialTreatment);
    setLocation(updatedLocation);
  }, [selectedKeyword]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queries = {
          path: menuName,
          page: getPageParam,
          id: userId?.id,
          institution: arrayToString(institution),
          preferentialTreatment: arrayToString(preferentialTreatment),
          location: arrayToString(location),
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
  }, [menuName, getPageParam, userId, location, institution, preferentialTreatment]);

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
              path={`/${menuName}/detail/${el.id}`}
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
