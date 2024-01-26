import { FC, useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { isAxiosError } from 'axios';
import { Scrap } from 'types/scrap';

import { getUserScrap, getUserScrapTotalCount } from 'apis/scrap';
import Badge from 'pages/home/AsideProfile/components/Badge';
import ItemWithImage from 'pages/scrap/components/ItemWithImage';
import PageController from 'pages/scrap/components/PageController';

import { NoResultScrap } from './NoResultScrap';

const titleList = ['공모전', '대외활동', '어학', '자격증', '인턴'];

interface Props {
  title: string;
  index: number;
}

const ScrapSection: FC<Props> = ({ title, index }) => {
  const [scrapList, setScrapList] = useState<Scrap[]>([]);
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState<number>(1);
  const totalPage = Math.ceil(totalCount / 4);

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

  useEffect(() => {
    updateScrapList();
  }, [currentPage, isActive]);

  const updateScrapList = async () => {
    try {
      const res = await getUserScrap(title, currentPage);
      const count = await getUserScrapTotalCount(title, true);
      setScrapList(res.data.data);
      setTotalCount(count.data.data);
      setIsActive(true);
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  return (
    <>
      <FilledBadge title={titleList[index]} />
      {scrapList ? (
        <VerticalAlign>
          <HorizontalItemList>
            {scrapList.map(item => (
              <ItemWithImage key={item.id} {...item} setIsActive={setIsActive} />
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
      ) : (
        <NoResultScrap />
      )}
    </>
  );
};

export default ScrapSection;

const HorizontalItemList = styled.ul`
  display: flex;
  width: 100%;
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
  /* grid-column: span 12; */
`;
