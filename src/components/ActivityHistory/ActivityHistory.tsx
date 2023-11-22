import { FormEventHandler, useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';
import { ActivityList } from 'types/activityHistory';

import { deleteActivityHistory } from 'apis/thermometer';
import { ActivityHistoryModal } from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal';
import { activityListIdState } from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import * as S from './ActivityHistory.styles';
import categoryList from './data/category.json';
import { ReactComponent as AddIcon } from './res/img/add_circle.svg';
import { ReactComponent as DeleteBtn } from './res/img/delete.svg';
import { ReactComponent as EditBtn } from './res/img/edit.svg';

export const ActivityHistory = () => {
  const [activityList, setActivityList] = useState<ActivityList[]>([]);
  const [clickedTab, setClickedTab] = useState<string>('competition');
  const [isAcitiviyModalVisible, setIsModalVisible] = useRecoilState(isActivityModalState);
  const [activityListId, setActivityListId] = useRecoilState(activityListIdState);

  const onModalOpen = () => {
    setActivityListId('');
    setIsModalVisible(prev => !prev);
  };
  const onEdit = (id: string) => {
    setActivityListId(id);
    setIsModalVisible(prev => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/mocks/activityList.json');
        setActivityList(res.data.data);
      } catch (error) {
        console.log('Error geting data:', error);
      }
    })();
  }, []);

  const onDeleteFormData: FormEventHandler = async e => {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const postData = {
      path: clickedTab,
      thermometerId: activityListId,
    };

    try {
      const res = await deleteActivityHistory(postData, headers);
      console.log('서버 응답:', res);
      console.log('활동내역 삭제 성공:', res.data);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

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
      {activityList.map(list => {
        return (
          clickedTab === list.path && (
            <S.ActivityList key={list.id}>
              <S.ActivityBox>
                <S.TextBox>{list.activeTitle}</S.TextBox>
                <S.Duration>{list.period}</S.Duration>
                <S.ButtonBox>
                  <EditBtn onClick={() => onEdit(list.id)} />
                  <DeleteBtn onClick={onDeleteFormData} />
                </S.ButtonBox>
              </S.ActivityBox>
              <S.Description>{list.activeContent}</S.Description>
            </S.ActivityList>
          )
        );
      })}
      {isAcitiviyModalVisible && (
        <>
          {activityListId ? (
            activityList
              .filter(list => activityListId === list.id)
              .map(list => <ActivityHistoryModal key={list.id} list={list} />)
          ) : (
            <ActivityHistoryModal list={null} />
          )}
        </>
      )}
    </S.ActivityHistory>
  );
};
