import { useEffect, useState } from 'react';

import { ReactComponent as Bookmark } from 'assets/icons/solid_bookmark.svg';
import { useParams } from 'react-router-dom';
import { Certificate } from 'types/certificate.type';

import { requestDetailCrawlingData } from 'apis/detailCrawling';

export const DetailPage = () => {
  const param = useParams();
  const [detailData, setDetailData] = useState<Certificate>();

  useEffect(() => {
    (async () => {
      try {
        const res = await requestDetailCrawlingData(param.menuName, param.detailId);
        setDetailData(res.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [param]);

  console.log(detailData);
  return (
    <div>
      <div>
        <div></div>
        <h1></h1>
        <button>
          <Bookmark />
          <h4>스크랩</h4>
        </button>
      </div>
    </div>
  );
};
