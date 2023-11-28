import { useRecoilValue } from 'recoil';
import { ActivityListData } from 'types/activityHistory';

import { ActivityHistoryModal } from 'components/Modals/ActivityHistoryModal/ActivityHistoryModal';
import { tabIdState } from 'store/activityHistory';

type ModalRendererProps = {
  activityList: ActivityListData[];
  activityListId: string;
  updateActivityList: (tabId: string) => Promise<void>;
};
export const ModalRenderer = ({
  activityList,
  activityListId,
  updateActivityList,
}: ModalRendererProps) => {
  const tabId = useRecoilValue(tabIdState);

  return (
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
        <ActivityHistoryModal list={null} updateActivityList={() => updateActivityList(tabId)} />
      )}
    </>
  );
};

export default ModalRenderer;
