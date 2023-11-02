import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { requestCommunityData } from 'apis/community';

import CommunityItem from './CommunityItem';

export const CommunityPageList = () => {
  const { menuName } = useParams();
  const [communityList, setCommunityList] = useState<Community[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await requestCommunityData();
        setCommunityList(res.data.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [menuName]);
  if (communityList)
    return (
      <List>
        {communityList.map(el => (
          <CommunityItem
            id={el.id}
            key={el.date}
            category={el.category}
            title={el.title}
            date={el.date}
            view={el.view}
            like={el.like}
            comment={el.comment}
            user={el.user}
          />
        ))}
      </List>
    );
};

const List = styled.div``;
