import { FC, useState } from 'react';

import styled from '@emotion/styled';

import Badge from 'pages/home/AsideProfile/components/Badge';
import ItemWithImage from 'pages/scrap/components/ItemWithImage';
import PageController from 'pages/scrap/components/PageController';
import { competitions } from 'pages/scrap/mock/competitions';

const titleList = ['공모전', '대외활동', '어학', '자격증', '인턴'];

interface Props {
  title: string;
  index: number;
}

const ScrapSection: FC<Props> = ({ title, index }) => {
  console.log(title);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10;

  const canBack = currentPage !== 1;
  const canForward = currentPage < totalPage;

  function handleClickNext() {
    if (!canForward) return;
    setCurrentPage(pre => pre + 1);
  }

  function handleClickBack() {
    if (!canBack) return;
    setCurrentPage(pre => pre - 1);
  }

  return (
    <>
      <FilledBadge title={titleList[index]} />
      <VerticalAlign>
        <HorizontalItemList>
          {competitions.map(item => (
            <ItemWithImage key={item.id} {...item} />
          ))}
        </HorizontalItemList>
        <PageController
          canBack={canBack}
          canForward={canForward}
          currentPage={currentPage}
          onClickNext={handleClickNext}
          onClickPrev={handleClickBack}
          totalPage={totalPage}
        />
      </VerticalAlign>
    </>
  );
};

export default ScrapSection;

const HorizontalItemList = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
`;

const FilledBadge = styled(Badge)`
  margin: 24px 0;
  padding: 8px 8px;
  background-color: var(--orange-500, #fd6b36);
  color: var(--title-white, #f6f6f6);

  /* Title 1/Bold */
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const VerticalAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
