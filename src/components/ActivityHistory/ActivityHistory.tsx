import { useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import { ActivityListData } from 'types/activityHistory';

import { deleteThermometerData, findPathThermometer } from 'apis/thermometer';
import { idsState, tabIdState } from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import { ActivityList } from './ActivityComponents/ActivityList';
import ModalRenderer from './ActivityComponents/ModalRenderer';
import { Registration } from './ActivityComponents/Registration';
import { TabNavigation } from './ActivityComponents/TabNavigation';
import * as S from './ActivityHistory.styles';

type ActivityHistoryProps = {
  setUpdateTemperature: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ActivityHistory = ({ setUpdateTemperature }: ActivityHistoryProps) => {
  const [activityList, setActivityList] = useState<ActivityListData[]>([]);
  const [isAcitiviyModalVisible, setIsModalVisible] = useRecoilState(isActivityModalState);
  const [activityListId, setActivityListId] = useRecoilState(idsState('activityListId'));
  const tabId = useRecoilValue(tabIdState);

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
    setUpdateTemperature(true);
  }, [tabId]);

  const updateActivityList = async (tabId: string) => {
    try {
      const res = await findPathThermometer(tabId);
      setActivityList(res.data.data);
      setUpdateTemperature(true);
      console.log(res.data.data);
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
      console.log('활동내역 삭제 성공:', res.data);
      updateActivityList(tabId); //activityList 업데이트
      setUpdateTemperature(true);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  console.log(activityList);

  return (
    <S.ActivityHistory>
      <S.Heading>{'활동내역'}</S.Heading>
      <TabNavigation onModalOpen={onModalOpen} />
      {activityList.length === 0 && <Registration onModalOpen={onModalOpen} />}
      <ActivityList
        activityList={activityList}
        onEdit={onEdit}
        onDeleteFormData={onDeleteFormData}
      />
      {isAcitiviyModalVisible && (
        <ModalRenderer
          activityList={activityList}
          activityListId={activityListId}
          updateActivityList={() => updateActivityList(tabId)}
        />
      )}
    </S.ActivityHistory>
  );
};
