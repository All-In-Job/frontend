import { useContext, useState } from 'react';

import { HomeCardListContext } from 'contexts/homeCardMenuContext/homeCardMenuContext';
import { useNavigate } from 'react-router-dom';

import { scrap } from 'apis/scrap';

import * as S from './ScrapButton.styles';

type ScrapButtonProps = {
  id: string;
  isScrap: boolean | undefined;
  fill: string;
};

export const ScrapButton = ({ id, isScrap, fill }: ScrapButtonProps) => {
  const [isActive, setIsActive] = useState(isScrap);
  const homeCardList = useContext(HomeCardListContext);
  const navigate = useNavigate();

  const ScrapIcon = fill === 'primary' ? S.ScrapPrimary : S.ScrapSecondary;

  console.log(fill);

  const handleScrap = async () => {
    if (isScrap == undefined) {
      navigate('/login');
    }

    const postData = {
      path: homeCardList?.getParams,
      scrapId: id,
    };

    try {
      const res = await scrap(postData);
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
