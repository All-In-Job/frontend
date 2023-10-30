import { ReactComponent as SolidBookmarkIcon } from './res/icon-solid-bookmark.svg';
import * as S from './ScrapButton.styles';

export const ScrapButton = () => {
  return (
    <S.ScrapButton>
      <SolidBookmarkIcon />
      <h4>스크랩</h4>
    </S.ScrapButton>
  );
};
