import { FC } from 'react';

import styled from '@emotion/styled';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';

type Props = {
  id: string;
  mainImage: string;
  Dday: string;
  index: number | null;
  isChangeInfoLayout?: boolean;
  isScrap: boolean | undefined;
};

const PostCardImage: FC<Props> = ({ id, mainImage, Dday, index, isChangeInfoLayout, isScrap }) => {
  return (
    <ImageContainer imgHeight={isChangeInfoLayout ? '118px' : '282px'}>
      {Boolean(mainImage) && <img src={mainImage} />}

      {!isChangeInfoLayout && Boolean(Dday) && (
        <TagContainer>
          {index == null ? null : index < 4 ? <PostCardTag>SPECIAL</PostCardTag> : null}
          <DateDday>{Dday}</DateDday>
        </TagContainer>
      )}

      <ScrapContainer>
        <ScrapButton id={id} isScrap={isScrap} fill={'primary'} />
      </ScrapContainer>
    </ImageContainer>
  );
};

export default PostCardImage;

const ImageContainer = styled.div<{ imgHeight: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.imgHeight};
  border-radius: 14px;
  background-color: #ddd;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

const TagContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  align-items: center;
  line-height: 32px;
`;

const DateDday = styled.p`
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.palette.orange500};
  color: ${props => props.theme.palette.orange500};
  background-color: ${props => props.theme.palette.orange100};
  font-size: ${props => props.theme.textStyle.label02};
  font-family: Bold;
`;

const PostCardTag = styled.div`
  padding: 0 8px;
  margin-right: 8px;
  border-radius: 4px;
  color: ${props => props.theme.palette.orange100};
  background-color: ${props => props.theme.palette.orange500};
  font-size: 14px;
  font-family: SemiBold;
`;

const ScrapContainer = styled.div`
  position: absolute;
  width: 16px;
  height: 23px;
  right: 16px;
  bottom: 16px;
  background-color: transparent;
  cursor: pointer;
`;
