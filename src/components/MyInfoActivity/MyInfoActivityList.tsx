import { FC, useEffect, useState } from 'react';

import { isAxiosError } from 'axios';

import { getUserActivity } from 'apis/myInfo';
import PageController from 'pages/scrap/components/PageController';
import theme from 'styles/theme';

import { MyInfoActivityCard, MyInfoActivityCardProps } from './MyInfoActivityCard';

type Props = {
  period: string;
};

export const MyInfoActivityList: FC<Props> = ({ period }) => {
  const [activityList, setActivityList] = useState([]);
  const [pages, setPages] = useState({ totalPage: 0, currentPage: 1 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (period === 'New') {
      getUserActivity(pages.currentPage)
        .then(res => {
          setPages({ ...pages, totalPage: Math.ceil(res.data.data.totalCount / 3) });
          setActivityList(res.data.data.data);
          setIsLoading(false);
        })
        .catch(error => {
          if (isAxiosError(error)) throw new Error(error.response?.data);
        });
    }
  }, [pages.currentPage]);

  function onClickNext() {
    if (pages.currentPage < pages.totalPage)
      setPages(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
  }

  function onClickPrev() {
    if (pages.currentPage > 1) setPages(prev => ({ ...prev, currentPage: prev.currentPage - 1 }));
  }

  if (!isLoading)
    return (
      <section style={{ gridColumn: 'span 12' }}>
        <div
          style={{
            display: 'inline-block',
            minWidth: '102px',
            maxWidth: '135px',
            marginTop: '30px',
            padding: '8px 16px',
            fontSize: 20,
            fontWeight: 700,
            borderRadius: 4,
            textAlign: 'center',
            color: 'white',
            backgroundColor: theme.palette.orange500,
          }}
        >
          {period}
        </div>
        {pages.totalPage === 0 ? (
          <p style={{ height: 196, textAlign: 'center' }}>활동 내역이 없습니다</p>
        ) : (
          <div>
            <ul
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                marginTop: 24,
              }}
            >
              {activityList.map((activity: MyInfoActivityCardProps) => (
                <li key={activity.id}>
                  <MyInfoActivityCard
                    title={activity.title}
                    content={activity.content}
                    createdAt={new Date(activity.createdAt)}
                  />
                </li>
              ))}
            </ul>
            <PageController
              currentPage={pages.currentPage}
              totalPage={pages.totalPage}
              canBack={pages.currentPage > 1}
              canForward={pages.currentPage < pages.totalPage}
              onClickNext={onClickNext}
              onClickPrev={onClickPrev}
            />
          </div>
        )}
      </section>
    );

  if (pages.totalPage === 0) return <p>활동 내역이 없습니다.</p>;

  return (
    <section style={{ gridColumn: 'span 12' }}>
      <div
        style={{
          display: 'inline-block',
          minWidth: '102px',
          height: '36px',
          marginTop: '30px',
          padding: '8px 16px',
          fontSize: 20,
          fontWeight: 700,
          borderRadius: 4,
          textAlign: 'center',
          color: 'white',
          backgroundColor: theme.palette.black50,
        }}
      />
      <div>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 24,
          }}
        >
          {[1, 2, 3].map(item => (
            <div
              key={item}
              style={{ width: 384, height: 196, backgroundColor: theme.palette.black50 }}
            />
          ))}
        </ul>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 47 }}>
          <div style={{ width: 150, height: 30, backgroundColor: theme.palette.black50 }} />
        </div>
      </div>
    </section>
  );
};
