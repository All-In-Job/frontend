import { ReactComponent as Bookmark } from 'assets/icons/solid_bookmark.svg';
import { useParams } from 'react-router-dom';

export const DetailPage = () => {
  const { detailId } = useParams();
  console.log(detailId);
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
