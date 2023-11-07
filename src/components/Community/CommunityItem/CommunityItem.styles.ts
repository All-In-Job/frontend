import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const CommunityItem = styled(Link)`
  display: flex;
  padding: 24px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-top: 1px solid #e1e2e4;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Nickname = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #717070;
  font-size: 17px;
  line-height: 24px;
`;

export const Time = styled.span`
  color: #a0a09f;
  font-size: 14px;
`;

export const Title = styled.span`
  color: #121110;
  font-size: 22px;
  line-height: 30px;
`;

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
`;

export const Count = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  color: #a0a09f;
  font-size: 15px;
  line-height: 24px;
`;

export const Category = styled.span`
  padding: 4px 12px;
  border-radius: 4px;
  color: #fd6b36;
  border: 1px solid #fd6b36;
`;
