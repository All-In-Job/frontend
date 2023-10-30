import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';
import { Count } from 'components/commons/Count/Count';

import * as S from './index.styles';
import { ReactComponent as CountBookmark } from './res/icon-bookmark.svg';
import { ReactComponent as HorizontalRuleIcon } from './res/icon-horizontal_rule.svg';
import { ReactComponent as ViewIcon } from './res/icon-view.svg';

type Props = {
  title: string | undefined;
  dDay: number | undefined;
  bookmarkCount: number | undefined;
  viewCount: number | undefined;
  children: React.ReactNode | undefined;
};

export const DetailPageInfo = ({ title, dDay, bookmarkCount, viewCount, children }: Props) => {
  return (
    <S.Wrapper>
      <S.Head>
        <S.TitleWrapper>
          <S.DDay>{`D-${dDay}`}</S.DDay>
          <S.Title>{title}</S.Title>
        </S.TitleWrapper>
        <ScrapButton />
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
