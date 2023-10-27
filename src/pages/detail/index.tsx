import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ResponseData, requestDetailCrawlingData } from 'apis/detailCrawling';
import { CertificateDetailInfo } from 'components/CertificateDetailInfo/CertificateDetailInfo';
import { DetailPageInfo } from 'components/DetailPageInfo';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<ResponseData | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingData(menuName, detailId);
        if (res) {
          setDetailData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName, detailId]);

  return (
    <DetailPageInfo title={detailData?.title as string} dDay={12} bookmarkCount={12} viewCount={12}>
      <CertificateDetailInfo image={detailData?.image} />
    </DetailPageInfo>
  );
};
