import { Link } from 'react-router-dom';
import { Inter } from 'types/intern.type';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';
// import { ReactComponent as Bookmark } from 'components/InternPageList/res/img/bookmark.svg';

import * as S from './InternPageItem.styles';

export const InternPageItem = ({
  id,
  preferentialTreatment,
  view,
  mainImage,
  closeDate,
  location,
  title,
  enterprise,
  isScrap,
}: Inter) => {
  return (
    <S.InternWrapper>
      <Link to={id} target={'_blank'}>
        <S.CompanyBox>
          <S.Img src={mainImage}></S.Img>
          <span>{enterprise}</span>
        </S.CompanyBox>
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.JobRole>{preferentialTreatment}</S.JobRole>
        </S.TextBox>
      </Link>
      <S.Location>{location}</S.Location>
      <S.date>{closeDate}</S.date>
      <S.View>{view}</S.View>
      <S.Scrap>
        <ScrapButton id={id} isScrap={isScrap} fill={'secondary'} />
        {/* <S.BookmarkBtn>
          <Bookmark />
        </S.BookmarkBtn> */}
      </S.Scrap>
    </S.InternWrapper>
  );
};
