import { useState } from 'react';

import ActivityCardList from './ActivityCardList';
import * as S from './ActivityList.style';

const Tabs = [
  {
    id: 'competition',
    name: '공모전',
  },
  {
    id: 'outside',
    name: '대외활동',
  },
  {
    id: 'qnet',
    name: '자격증',
  },
  {
    id: 'toeic',
    name: '어학',
  },
  {
    id: 'intern',
    name: '인턴',
  },
];

const ActivityList = () => {
  const [clickedTab, setClickedTab] = useState('competition');

  return (
    <S.ActivityContainer>
      <S.ActivityTitle>활동내역</S.ActivityTitle>
      <S.ActivityTabs>
        {Tabs.map(tab => (
          <S.ActivityTab
            key={tab.id}
            onClick={() => setClickedTab(tab.id)}
            isActive={tab.id === clickedTab}
          >
            <S.Name>{tab.name}</S.Name>
          </S.ActivityTab>
        ))}
      </S.ActivityTabs>
      <ActivityCardList key={clickedTab} path={clickedTab} />
    </S.ActivityContainer>
  );
};

export default ActivityList;
