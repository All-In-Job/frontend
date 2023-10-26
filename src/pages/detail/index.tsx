import { useEffect, useState } from 'react';

import { ReactComponent as Bookmark } from 'assets/icons/solid_bookmark.svg';
import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestDetailCrawlingData } from 'apis/detailCrawling';

// import * as S from './index.styles';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<Certificate>();
  const [dDay, setDDay] = useState('');

  const DdayCalculator = (date: string) => {
    const stringDate = date.toString();
    const currentDate = new Date().getTime();
    const Dday = new Date(stringDate.split('~')[0]).getTime();
    const result = Math.ceil((Dday - currentDate) / (1000 * 60 * 60 * 24));
    return result.toString();
  };
  console.log(detailData);
  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingData(menuName, detailId);
        setDetailData(res.data.data);
        if (res.data.data.examSchedules) {
          setDDay(DdayCalculator(res.data.data.examSchedules[0].wtReceipt));
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, detailId]);

  return (
    <div>
      <div>
        <div>{`D-${dDay}`}</div>
        <h1></h1>
        <button>
          <Bookmark />
          <h4>스크랩</h4>
        </button>
      </div>
    </div>
  );
};
