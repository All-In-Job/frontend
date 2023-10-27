import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestDetailCrawlingData } from 'apis/detailCrawling';
import { DetailPageInfo } from 'components/DetailPageInfo';

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
    <DetailPageInfo title={detailData?.title as string} dDay={12} bookmarkCount={12} viewCount={12}>
      <div>여기 컴포넌트 추가</div>
    </DetailPageInfo>
  );
};
