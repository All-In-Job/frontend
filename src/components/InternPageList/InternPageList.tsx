import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Inter } from 'types/intern.type';

import { requestCrawlingData } from 'apis/crawling';
import { requestCrawlingTotalCount } from 'apis/crawlingCount';
import MenuPagination from 'components/commons/Pagination/MenuPagination';
import { useControlPageParam } from 'hooks/useControlPageParam';

import { InternPageItem } from './InternInfo/InternPageItem';
import * as S from './InternPageList.styles';

const TableName = ['기업명', '공고명', '지역', '마감일', '조회수', '스크랩'];

export const InternPageList = () => {
  const { menuName } = useParams();
  const [InternPageList, setInternPageList] = useState<Inter[]>([]);
  const [totalCount, setTotalCount] = useState(1);
  const { getPageParam } = useControlPageParam();
  const currentPage = getPageParam ? Number(getPageParam) : 1;

  useEffect(() => {
    const queries = {
      path: menuName,
      page: getPageParam,
    };

    (async () => {
      try {
        const res = await requestCrawlingData(menuName as string, queries);
        const totalCount = await requestCrawlingTotalCount(menuName as string);
        setInternPageList(res.data.data as Inter[]);
        setTotalCount(totalCount.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, getPageParam]);

  return (
    <>
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
          />
        ))}
      </S.InternContainer>

      <MenuPagination
        currentPage={currentPage}
        totalItemsCount={totalCount}
        pageItemsCount={InternPageList.length}
      />
    </>
  );
};
