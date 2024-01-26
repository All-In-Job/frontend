import { useContext, useState } from 'react';

import { isAxiosError } from 'axios';
import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useNavigate, useParams } from 'react-router-dom';

import { scrapping } from 'apis/scrap';

import * as S from './ScrapButton.styles';

type ScrapButtonProps = {
  path?: string;
  id: string | undefined;
  isScrap: boolean | undefined;
  fill: string;
  setScrapCount?: React.Dispatch<React.SetStateAction<number>>;
};

export const ScrapButton = ({ path, id, isScrap, fill, setScrapCount }: ScrapButtonProps) => {
  const [isActive, setIsActive] = useState(isScrap);
  const homeCardList = useContext(HomeCardListContext);
  const { menuName } = useParams();
  const navigate = useNavigate();
  const ScrapIcon = fill === 'primary' ? S.ScrapPrimary : S.ScrapSecondary;

  const handleScrap = async () => {
    if (isScrap == undefined) return navigate('/login');

    const postData = {
      path: homeCardList?.getParams || menuName || path,
      scrapId: id,
    };

    try {
      await scrapping(postData);
      setIsActive(isScrap => !isScrap);
      if (setScrapCount)
        isActive ? setScrapCount(prev => prev - 1) : setScrapCount(prev => prev + 1);
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.response?.data);
    }
  };

  return (
    <S.ScrapButton onClick={handleScrap}>
      <ScrapIcon data-isscrap={isActive} />
    </S.ScrapButton>
  );
};
