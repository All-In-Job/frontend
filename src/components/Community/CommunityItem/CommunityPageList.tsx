import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { Community } from 'types/community.type';

import { requestCommunityData } from 'apis/community';

import CommunityItem from './CommunityItem';

// const mockData = {
//   id: '커뮤니티 id : 255617b0-446c-477e-96c9-cb9fe54bc6cc',
//   title: '제목 : 공모전 활동',
//   detail: '상세내용 : html코드',
//   date: '등록 시간 : 2023-09-16',
//   view: 0,
//   like: 0,
//   comment: 0,
//   userId: '유저 아이디 :255617b0-446c-477e-96c9-cb9fe54bc6cc',
//   user: {
//     id: '유저 아이디 :255617b0-446c-477e-96c9-cb9fe54bc6cc',
//     email: 'mna7805@gmail.com',
//     provider: 'google',
//     name: '홍길동',
//     nickname: '닉네임',
//     phone: '01012345678',
//     profileImage: 'profile url',
//     major: '컴퓨터공학',
//   },
//   comments: [
//     {
//       id: 'comments id : 255617b0-446c-477e-96c9-cb9fe54bc6cc',
//       comment: '댓글 내용: 굳',
//       date: '댓글 생성 시간 : 2023-09-16',
//       userId: '댓글 단 사람의 id : 255617b0-446c-477e-96c9-cb9fe54bc6cc',
//     },
//   ],
//   communityLikes: [
//     {
//       id: '커뮤니티 좋아요 id : 255617b0-446c-477e-96c9-cb9fe54bc6cc',
//       userId: '좋아요한 사람 id : 255617b0-446c-477e-96c9-cb9fe54bc6cc',
//     },
//   ],
// };

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
