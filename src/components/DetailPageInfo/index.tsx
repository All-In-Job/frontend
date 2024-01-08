import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';
import { Count } from 'components/commons/Count/Count';

import * as S from './index.styles';
import { ReactComponent as CountBookmark } from './res/icon-bookmark.svg';
import { ReactComponent as HorizontalRuleIcon } from './res/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from './res/icon-view.svg';

type Props = {
  title: string;
  dDay: string;
  bookmarkCount: number;
  viewCount: number;
  children: React.ReactNode;
  id: string | undefined;
  isScrap: boolean | undefined;
};

export const DetailPageInfo = ({
  title,
  dDay,
  bookmarkCount,
  viewCount,
  children,
  id,
  isScrap,
}: Props) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.TitleWrapper>
          {dDay && <S.DDay>{dDay}</S.DDay>}
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        <S.Scrap>
          <ScrapButton id={id} isScrap={isScrap} fill={'secondary'} />
          <h4>스크랩</h4>
        </S.Scrap>
      </S.Head>
      {children}
      <S.CountContainer>
        <Count count={bookmarkCount} children={<CountBookmark />} />
        <HorizontalRuleIcon />
        <Count count={viewCount} children={<ViewIcon />} />
      </S.CountContainer>
    </S.Wrapper>
  );
};
