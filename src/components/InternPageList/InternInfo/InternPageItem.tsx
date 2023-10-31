import { Inter } from 'types/intern.type';

import { ReactComponent as Bookmark } from 'components/InternPageList/res/img/bookmark.svg';

import * as S from './InternPageItem.styles';

export const InternPageItem = ({
  institution,
  view,
  mainImage,
  Dday,
  location,
  title,
  organization,
}: Inter) => {
  return (
    <S.InternWrapper>
      <S.CompanyBox>
        <S.Img src={mainImage}></S.Img>
        {organization}
      </S.CompanyBox>
      <S.TextBox>
        <S.Title>{title}</S.Title>
        {institution}
      </S.TextBox>
      <S.Location>{location}</S.Location>
      <S.date>{Dday}</S.date>
      <S.View>{view}</S.View>
      <S.Scrap>
        <S.BookmarkBtn>
          <Bookmark />
        </S.BookmarkBtn>
      </S.Scrap>
    </S.InternWrapper>
  );
};
