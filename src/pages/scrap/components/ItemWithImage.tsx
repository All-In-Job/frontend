import { FC } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Badge from 'pages/home/AsideProfile/components/Badge';
import { SectionData } from 'pages/scrap/mock/competitions';
import { ReactComponent as BookMarkIcon } from 'pages/scrap/res/images/bookmark.svg';
import { ReactComponent as MiniBookMarkIcon } from 'pages/scrap/res/images/miniBookmark.svg';
import { ReactComponent as ViewIcon } from 'pages/scrap/res/images/view.svg';

const ItemWithImage: FC<SectionData> = ({
  Dday,
  date,
  institution,
  mainImage,
  scrap,
  title,
  view,
  examSchedules,
  receptionSchedules,
  location,
}) => {
  const nav = useNavigate();
  function moveToBookMark() {
    nav('#');
  }

  const isQnet = examSchedules && receptionSchedules;
  const isIntern = !(location == null);

  return (
    <Item>
      <ImageContainer>
        <img src={mainImage} alt='mainImage' />
        <BookMarkWrapper onClick={moveToBookMark}>
          <BookMarkIcon />
        </BookMarkWrapper>
      </ImageContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemHost>{institution}</ItemHost>
      {isIntern && <ItemHost>{location!}</ItemHost>}
      <Date>
        <DateBadge title={Dday} />
        {isQnet ? (
          <Vertical>
            <FullDate>{examSchedules}</FullDate>
            <FullDate>{receptionSchedules}</FullDate>
          </Vertical>
        ) : (
          <FullDate>{date}</FullDate>
        )}
      </Date>
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
  margin-bottom: 8px;
  color: var(--black-500, #121110);
  white-space: normal;

  /* Title 1/Bold */
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */
`;

const ItemHost = styled.span`
  color: var(--black-200, #a0a09f);
  text-align: center;

  /* Body 1/Semi */
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 162.5% */
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const FullDate = styled.span`
  margin-left: 5px;
  color: var(--black-200, #a0a09f);
  text-align: center;
  font-family: SUIT;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  border-color: var(--orange-100, #ffe8df);
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
  align-items: center;
`;
