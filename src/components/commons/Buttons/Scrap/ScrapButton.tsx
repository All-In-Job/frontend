import { useContext, useState } from 'react';

import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useNavigate, useParams } from 'react-router-dom';

import { scrapping } from 'apis/scrap';

import * as S from './ScrapButton.styles';

type ScrapButtonProps = {
  id: string | undefined;
  isScrap: boolean | undefined;
  fill: string;
};

export const ScrapButton = ({ id, isScrap, fill }: ScrapButtonProps) => {
  const [isActive, setIsActive] = useState(isScrap);
  const homeCardList = useContext(HomeCardListContext);
  const { menuName } = useParams();
  const navigate = useNavigate();
  const ScrapIcon = fill === 'primary' ? S.ScrapPrimary : S.ScrapSecondary;

  const handleScrap = async () => {
    if (isScrap == undefined) {
      return navigate('/login');
    }

    const postData = {
      path: homeCardList?.getParams || menuName,
      scrapId: id,
    };

    try {
      const res = await scrapping(postData);
      console.log(res);
      setIsActive(isScrap => !isScrap);
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <S.ScrapButton onClick={handleScrap}>
      <ScrapIcon data-isscrap={isActive} />
    </S.ScrapButton>
  );
};
