import { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ActivityList } from 'types/activityHistory';

import { deleteThermometerData, findPathThermometer } from 'apis/thermometer';
import { ActivityHistoryModal } from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal';
import { idsState } from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import * as S from './ActivityHistory.styles';
import categoryList from './data/category.json';
import { ReactComponent as AddIcon } from './res/img/add_circle.svg';
import { ReactComponent as DeleteBtn } from './res/img/delete.svg';
import { ReactComponent as EditBtn } from './res/img/edit.svg';

export const ActivityHistory = () => {
  const [activityList, setActivityList] = useState<ActivityList[]>([]);
  const [tabId, setTabId] = useState<string>('competition');
  const [isAcitiviyModalVisible, setIsModalVisible] = useRecoilState(isActivityModalState);
  const [activityListId, setActivityListId] = useRecoilState(idsState('activityListId'));
  const user = useLoaderData() as { nickname: string };

  const onModalOpen = () => {
    setActivityListId('');
    setIsModalVisible(prev => !prev);
  };

  const onEdit = (id: string) => {
    setActivityListId(id);
    setIsModalVisible(prev => !prev);
  };

  useEffect(() => {
    updateActivityList(tabId);
  }, [tabId]);

  const updateActivityList = async (tabId: string) => {
    try {
      const res = await findPathThermometer(tabId);
      setActivityList(res.data.data);
    } catch (error) {
      console.log('Error getting data:', error);
      throw error;
    }
  };

  const onDeleteFormData = async (id: string) => {
    const deleteData = {
      path: tabId,
      thermometerId: id,
    };

    try {
      const res = await deleteThermometerData(deleteData);
      console.log('서버 응답:', res);
      console.log('활동내역 삭제 성공:', res.data);

      updateActivityList(tabId); //activityList 업데이트
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
            <S.Tab key={tab.id} onClick={() => setTabId(tab.id)} isActive={tab.id === tabId}>
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
        <S.Text>{`${user.nickname}님, 활동내역을 추가해서 열정온도를 올려보세요!`}</S.Text>
        <S.AddBtn onClick={onModalOpen}>
          <AddIcon width='36' height='36' />
        </S.AddBtn>
      </S.RegistrationBox>

      {activityList.map(list => {
        return (
          <S.ActivityList key={list.id}>
            <S.ActivityBox>
              <S.TextBox>{list.activeTitle}</S.TextBox>
              <S.Duration>{list.period}</S.Duration>
              <S.ButtonBox>
                <EditBtn onClick={() => onEdit(list.id)} />
                <DeleteBtn onClick={() => onDeleteFormData(list.id)} />
              </S.ButtonBox>
            </S.ActivityBox>
            <S.Description>{list.activeContent}</S.Description>
          </S.ActivityList>
        );
      })}

      {isAcitiviyModalVisible && (
        <>
          {activityListId ? (
            activityList
              .filter(list => activityListId === list.id)
              .map(list => (
                <ActivityHistoryModal
                  key={list.id}
                  list={list}
                  updateActivityList={() => updateActivityList(tabId)}
                />
              ))
          ) : (
            <ActivityHistoryModal
              list={null}
              updateActivityList={() => updateActivityList(tabId)}
            />
          )}
        </>
      )}
    </S.ActivityHistory>
  );
};
