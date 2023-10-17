import { Fragment } from 'react';

import styled from '@emotion/styled';

import { Desc } from './asideProfile.style';
import { ReactComponent as Calendar } from './res/img/calendar.svg';
import { ReactComponent as MyInfo } from './res/img/info.svg';
import { ReactComponent as Script } from './res/img/script.svg';
import { ReactComponent as Temperature } from './res/img/temperature.svg';

const UserTabs = () => {
  const tabDataList = [
    { title: '내정보', icon: <MyInfo /> },
    { title: '열정온도', icon: <Temperature /> },
    { title: '스크랩', icon: <Script /> },
    { title: '달력', icon: <Calendar /> },
  ];

  return (
    <Container>
      {tabDataList.map((tab, idx) => (
        <Fragment key={tab.title}>
          <Tab>
            {tab.icon}
            <TabDesc size='12px'>{tab.title}</TabDesc>
          </Tab>
          {idx !== tabDataList.length - 1 && <Border />}
        </Fragment>
      ))}
    </Container>
  );
};

export default UserTabs;

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  border-radius: 0 0 12px 12px;
  background: var(--background-primary-50, #f8f8f8);
`;

const Tab = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 14px;
  cursor: pointer;
`;

const Border = styled.li`
  min-height: 30px;
  height: 60%;
  width: 1px;

  background-color: var(--line-primary, #e1e2e4);
`;

const TabDesc = styled(Desc)`
  margin-top: 6px;
  color: var(--black-500, #121110);

  /* Caption 1/Bold */
  font-family: SUIT, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  white-space: nowrap;
`;
