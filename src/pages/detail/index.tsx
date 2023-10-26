import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestDetailCrawlingData } from 'apis/detailCrawling';

import { ReactComponent as CountBookmark } from './res/icon-bookmark.svg';
import { ReactComponent as HorizontalRuleIcon } from './res/icon-horizontal_rule.svg';
import { ReactComponent as SolidBookmarkIcon } from './res/icon-solid-bookmark.svg';
import { ReactComponent as ViewIcon } from './res/icon-view.svg';

// import * as S from './index.styles';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<Certificate>();

  // const DdayCalculator = (date: string) => {
  //   const stringDate = date.toString();
  //   const currentDate = new Date().getTime();
  //   // const Dday = new Date(stringDate.split('~')[0]).getTime();
  //   const result = Math.ceil((Dday - currentDate) / (1000 * 60 * 60 * 24));
  //   return result.toString();
  // };

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
      <div>
        <div>{`D-`}</div>
        <h1>{detailData?.title}</h1>
        <button>
          <SolidBookmarkIcon />
          <h4>스크랩</h4>
        </button>
        <div>
          <div>
            <CountBookmark />
            <p></p>
          </div>
          <HorizontalRuleIcon />
          <div>
            <ViewIcon />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
