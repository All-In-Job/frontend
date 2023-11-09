import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { isAcitiviyModalState } from 'store/modal';

import * as S from './ActivityHistory.styles';
import Modal from './Modal';
import { ReactComponent as AddIcon } from './res/img/add_circle.svg';
import { ReactComponent as DeleteBtn } from './res/img/delete.svg';
import { ReactComponent as EditBtn } from './res/img/edit.svg';

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
  const [isAcitiviyModalVisible, setIsModalVisible] = useRecoilState(isAcitiviyModalState);
  const onModalOpen = () => {
    setIsModalVisible(prev => !prev);
    console.log(isAcitiviyModalVisible);
  };

  // console.log(isAcitiviyModalVisible);
  return (
    <S.ActivityHistory>
      <S.Heading>활동내역</S.Heading>
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
        <S.AddBtn onClick={onModalOpen}>
          <AddIcon width='16' height='16' />
          추가
        </S.AddBtn>
      </S.TabsWrapper>
      <S.RegistrationBox>
        <S.Text>올인잡님, 활동내역을 추가해서 열정온도를 올려보세요!</S.Text>
        <S.AddBtn onClick={onModalOpen}>
          <AddIcon width='36' height='36' />
        </S.AddBtn>
      </S.RegistrationBox>
      <S.ActivityList>
        <S.ActivityBox>
          <S.TextBox>
            <S.Title>2023 Meta Spark AR 콘텐츠 공모전</S.Title>
            <S.Duration>2023.01.01 ~ 2023.01.01</S.Duration>
          </S.TextBox>
          <S.ButtonBox>
            <EditBtn />
            <DeleteBtn />
          </S.ButtonBox>
        </S.ActivityBox>
        <S.Description>활동내용 (메타버스 콘텐츠 아이디어 기획)</S.Description>
      </S.ActivityList>
      {isAcitiviyModalVisible ? <Modal /> : null}
    </S.ActivityHistory>
  );
};

export default ActivityHistory;
