import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { ActivityHistoryModal } from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal';
import { isActivityModalState } from 'store/modal';

import * as S from './ActivityHistory.styles';
import categoryList from './data/category.json';
import ActivityList from './data/mock.json';
import { ReactComponent as AddIcon } from './res/img/add_circle.svg';
import { ReactComponent as DeleteBtn } from './res/img/delete.svg';
import { ReactComponent as EditBtn } from './res/img/edit.svg';

export const ActivityHistory = () => {
  const [clickedTab, setClickedTab] = useState<string>('competition');
  const [isAcitiviyModalVisible, setIsModalVisible] = useRecoilState(isActivityModalState);
  const onModalOpen = () => {
    setIsModalVisible(prev => !prev);
  };
  console.log(clickedTab);
  return (
    <S.ActivityHistory>
      <S.Heading>활동내역</S.Heading>
      <S.TabsWrapper>
        <S.Tabs>
          {categoryList.map(tab => (
            <S.Tab
              key={tab.id}
              onClick={() => setClickedTab(tab.id)}
              isActive={tab.id === clickedTab}
            >
              <S.Name>{tab.title}</S.Name>
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
      {ActivityList.map(list => {
        return (
          clickedTab === list.path && (
            <S.ActivityList key={list.path}>
              <S.ActivityBox>
                <S.TextBox>{list.activeTitle}</S.TextBox>
                <S.Duration>{list.period}</S.Duration>
                <S.ButtonBox>
                  <EditBtn />
                  <DeleteBtn />
                </S.ButtonBox>
              </S.ActivityBox>
              <S.Description>{list.activeContent}</S.Description>
            </S.ActivityList>
          )
        );
      })}
      {isAcitiviyModalVisible ? <ActivityHistoryModal /> : null}
    </S.ActivityHistory>
  );
};
