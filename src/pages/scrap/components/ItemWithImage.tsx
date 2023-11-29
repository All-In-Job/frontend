import styled from '@emotion/styled';
import { Scrap } from 'types/scrap';

import { ScrapButton } from 'components/commons/Buttons/Scrap/ScrapButton';
import Badge from 'pages/home/AsideProfile/components/Badge';
import { ReactComponent as MiniBookMarkIcon } from 'pages/scrap/res/images/miniBookmark.svg';
import { ReactComponent as ViewIcon } from 'pages/scrap/res/images/view.svg';

const ItemWithImage = ({
  Dday,
  enterprise,
  institution,
  mainImage,
  scrap,
  title,
  view,
  period,
  examDate,
  closeDate,
  location,
  id,
  isScrap,
}: Scrap) => {
  const isQnet = period && examDate;
  const isLanguage = closeDate && examDate;
  const isIntern = !(location == null);

  return (
    <Item>
      <ImageContainer>
        <Img src={mainImage} />
        <Date>
          <DateBadge title={Dday} />
        </Date>
        <BookMarkWrapper>
          <ScrapButton id={id} isScrap={isScrap} fill={'primary'} />
        </BookMarkWrapper>
      </ImageContainer>
      {!isQnet && !isLanguage ? (
        <ItemTitle>{title}</ItemTitle>
      ) : (
        <ItemTitle className='rest'>{title}</ItemTitle>
      )}

      <ItemHost>{enterprise || institution}</ItemHost>
      {isIntern && <ItemLocation>{location!}</ItemLocation>}
      {isLanguage && (
        <Vertical>
          <FullDate>{'시험일정 : ' + closeDate}</FullDate>
          <FullDate>{'접수마감 : ' + examDate}</FullDate>
        </Vertical>
      )}
      {isQnet && (
        <Vertical>
          <FullDate>{'접수일정 : ' + period}</FullDate>
          <FullDate>{'시험일정 : ' + examDate}</FullDate>
        </Vertical>
      )}
      <Record>
        <RecordItem>
          <MiniBookMarkIcon />
          <RecordCount>{scrap}</RecordCount>
        </RecordItem>
        <VerticalDivider />
        <RecordItem>
          <ViewIcon />
          <RecordCount>{view}</RecordCount>
        </RecordItem>
      </Record>
    </Item>
  );
};

export default ItemWithImage;

const Item = styled.li`
  margin-right: 24px;
  width: 282px;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  width: 282px;
  height: 282px;
  border-radius: 12px;
  background: var(--background-primary, #ededed);
  overflow: hidden;
`;
const BookMarkWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  cursor: pointer;
  transition: all linear 200ms;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const ItemTitle = styled.h4`
  height: 52px;
  margin-bottom: 8px;
  color: var(--black-500, #121110);
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  &.rest {
    height: auto;
  }
`;

const ItemHost = styled.span`
  color: var(--black-200, #a0a09f);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const ItemLocation = styled.span`
  color: var(--black-300, #717070);
  display: block;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
`;

const Date = styled.div`
  position: absolute;
  margin: 16px 0 0 16px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const FullDate = styled.span`
  /* margin-left: 5px; */
  color: var(--black-300, #717070);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

const Record = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RecordItem = styled.div`
  display: flex;
  align-items: center;
`;
const RecordCount = styled.span`
  margin-left: 4px;
  color: var(--black-200, #a0a09f);
  text-align: center;

  /* Label 3/Bold */
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;

const VerticalDivider = styled.div`
  margin: 0 9px;
  width: 2px;
  height: 14px;
  background-color: #f2f2f2;
`;

const DateBadge = styled(Badge)`
  margin-right: 6px;
  color: var(--orange-500, #fd6b36);
  border-radius: 4px;
  background: var(--orange-100, #ffe8df);
  border-color: var(--orange-100, #fd6b36);
  text-align: center;

  /* Label 2/Bold */
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 160% */
`;

const Vertical = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0 8px 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
