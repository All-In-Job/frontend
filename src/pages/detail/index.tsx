import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { ResponseData, requestDetailCrawlingData } from 'apis/detailCrawling';
import { CertificateDetailInfo } from 'components/CertificateDetailInfo/CertificateDetailInfo';
import { DetailPageInfo } from 'components/DetailPageInfo';

export const DetailPage = () => {
  const { menuName, detailId } = useParams();
  const [detailData, setDetailData] = useState<ResponseData>();

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

  if (detailData)
    return (
      <>
        <DetailPageInfo
          title={detailData?.title}
          dDay={12}
          bookmarkCount={detailData?.scrap}
          viewCount={detailData?.view}
        >
          <CertificateDetailInfo
            mainImage={detailData.mainImage}
            title={detailData.title}
            enTitle={detailData.enTitle}
            relateDepartment={detailData.relateDepartment}
            institution={detailData.institution}
          />
        </DetailPageInfo>
      </>
    );
};
