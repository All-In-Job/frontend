import { useEffect } from 'react';

import { ReactComponent as Bookmark } from 'assets/icons/solid_bookmark.svg';
import { useParams } from 'react-router-dom';

import { requestDetailCrawlingData } from 'apis/detailCrawling';

export const DetailPage = () => {
  const param = useParams();
  // const [detailData, setDetailData] = useState();

  useEffect(() => {
    (async () => {
      try {
        await requestDetailCrawlingData(param.menuName, param.detailId);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [param]);

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
