import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { categoryList } from 'components/ActivityHistory/data/category';
import { ReactComponent as AddIcon } from 'components/ActivityHistory/res/img/add_circle.svg';
import { tabIdState } from 'store/activityHistory';

type TabNavigationProps = {
  onModalOpen: () => void;
};

export const TabNavigation = ({ onModalOpen }: TabNavigationProps) => {
  const [tabId, setTabId] = useRecoilState(tabIdState);

  return (
    <TabsWrapper>
      <Tabs>
        {categoryList.map(tab => (
          <Tab key={tab.id} onClick={() => setTabId(tab.id)} isActive={tab.id === tabId}>
            <Name>{tab.title}</Name>
          </Tab>
        ))}
      </Tabs>
      <AddBtn onClick={onModalOpen}>
        <AddIcon width='16' height='16' />
        {'추가'}
      </AddBtn>
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 2px solid ${props => props.theme.palette.line.normal};
`;

const Tabs = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

const Tab = styled.li<{ isActive: boolean }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isActive ? '#f6f6f6' : props.theme.palette.black200)};
  background-color: ${props =>
    props.isActive ? props.theme.palette.orange500 : props.theme.palette.background.primary};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Name = styled.span`
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

const AddBtn = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme.palette.orange500};
  border: 1px solid ${props => props.theme.palette.orange500};
  border-radius: 4px;
  box-sizing: border-box;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
`;
