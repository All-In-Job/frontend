import { useState } from 'react';

import * as S from './ActivityHistory.style';
import ActivityHistoryDetails from './ActivityHistoryDetails';
import { ReactComponent as AddCircle } from './res/img/add_circle.svg';

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

const ActivityHistory = () => {
  const [clickedTab, setClickedTab] = useState('competition');
  return (
    <S.ActivityHistoryContainer>
      <S.Title>활동내역</S.Title>
      <S.TabsWrapper>
        <S.Tabs>
          {Tabs.map(tab => (
            <S.Tab
              key={tab.id}
              onClick={() => setClickedTab(tab.id)}
              isActive={tab.id === clickedTab}
            >
              <S.Name>{tab.name}</S.Name>
            </S.Tab>
          ))}
        </S.Tabs>
        <S.AddButton>
          <AddCircle width='16' height='16' />
          추가
        </S.AddButton>
      </S.TabsWrapper>
      <ActivityHistoryDetails />
    </S.ActivityHistoryContainer>
  );
};

export default ActivityHistory;
