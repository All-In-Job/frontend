import { FC } from 'react';

import styled from '@emotion/styled';

type Props = {
  mainImage: string;
  Dday: string;
  index: number | null;
  isChangeInfoLayout?: boolean;
};

const PostCardImage: FC<Props> = ({ mainImage, Dday, index, isChangeInfoLayout }) => {
  return (
    <ImageContainer imgHeight={isChangeInfoLayout ? '118px' : '282px'}>
      {Boolean(mainImage) && <img src={mainImage} />}

      {!isChangeInfoLayout && Boolean(Dday) && (
        <TagContainer>
          {index == null ? null : index < 4 ? <PostCardTag>SPECIAL</PostCardTag> : null}
          <DateDday>{Dday}</DateDday>
        </TagContainer>
      )}
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
