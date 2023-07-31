import {useState} from "react";
import * as S from "./postCard.styles";

function PostCard() {
  const [isPick, setIsPick] = useState(false);

  const onClickPick = () => {
    setIsPick((prev) => !prev);
  };

  return (
    <S.PostCardContainer>
      <S.PostCardImgBox>
        <img />
        <S.PickButton onClick={onClickPick} isPick={isPick}>
          <img src="src/components/commons/PostCard/res/img/icon_bookmark.png" />
        </S.PickButton>
      </S.PostCardImgBox>

      <S.PostCardInfo>
        <S.InfoHost>주최기관</S.InfoHost>
        <S.InfoTitle>2023 Meta Spark AR 콘텐츠 공모전</S.InfoTitle>
        <S.InfoDate>
          <S.DateDday>D-1</S.DateDday>
          <S.DateCreation>2023.08.24</S.DateCreation>
        </S.InfoDate>
      </S.PostCardInfo>

      <S.PostCardFooter>
        <li>
          <S.FooterIcon />
          <S.FooterCount>264</S.FooterCount>
        </li>
        <li>
          <S.FooterIcon />
          <S.FooterCount>4715</S.FooterCount>
        </li>
      </S.PostCardFooter>

      <S.PostCardTag>
        <div />
      </S.PostCardTag>
    </S.PostCardContainer>
  );
}

export default PostCard;
