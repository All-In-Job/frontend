import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Inter } from 'types/intern.type';

import { requestCrawlingData } from 'apis/crawling';

import { InternPageItem } from './InternInfo/InternPageItem';
import * as S from './InternPageList.styles';

const TableName = ['기업명', '공고명', '지역', '마감일', '조회수', '스크랩'];

export const InternPageList = () => {
  const { menuName } = useParams();
  const [InternPageList, setInternPageList] = useState<Inter[]>([]);

  useEffect(() => {
    const queries = {
      path: menuName,
    };

    (async () => {
      try {
        const res = await requestCrawlingData(menuName as string, queries);
        setInternPageList(res.data.data as Inter[]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName]);

  return (
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
          institution={el.institution}
          view={el.view}
          mainImage={el.mainImage}
          organization={el.organization}
          scrap={el.scrap}
          Dday={el.Dday}
          location={el.location}
          title={el.title}
        />
      ))}
    </S.InternContainer>
  );
};
