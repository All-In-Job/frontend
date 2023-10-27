import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestDetailCrawlingData } from 'apis/detailCrawling';
import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';
import { Count } from 'components/commons/Count/Count';

import * as S from './index.styles';
import { ReactComponent as CountBookmark } from './res/icon-bookmark.svg';
import { ReactComponent as HorizontalRuleIcon } from './res/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from './res/icon-view.svg';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<Certificate>();

  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingData(menuName, detailId);
        setDetailData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, detailId]);

  return (
    <div>
      <S.Head>
        <S.TitleWrapper>
          <S.DDay>{`D-${12}`}</S.DDay>
          <S.Title>{detailData?.title}</S.Title>
        </S.TitleWrapper>
        <ScrapButton />
      </S.Head>
      <S.CountContainer>
        <Count count={123} children={<CountBookmark />} />
        <HorizontalRuleIcon />
        <Count count={123} children={<ViewIcon />} />
      </S.CountContainer>
    </div>
  );
};
