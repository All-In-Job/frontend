import { useState } from 'react';

import * as S from './ActivityList.style';
import Modal from './Modal';
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
    <S.ActivityContainer>
      <S.ActivityTitle>활동내역</S.ActivityTitle>
      <S.ActivityList>
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
        <S.Button>
          <AddCircle />
          추가
        </S.Button>
      </S.ActivityList>
      <Modal />
    </S.ActivityContainer>
  );
};

export default ActivityHistory;
