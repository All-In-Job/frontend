import styled from '@emotion/styled';

export const ActivityContainer = styled.div`
  grid-column: span 12;
`;

export const ActivityTitle = styled.h1`
  font-family: SUIT;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.134px;
`;

export const ActivityList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 2px solid #e1e2e4;
`;

export const ActivityTabs = styled.ul`
  display: flex;
  align-items: flex-start;
  /* padding: 8px 16px; */
  gap: 25px;
`;

export const ActivityTab = styled.li<{ isActive: boolean }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isActive ? '#f6f6f6' : '#a0a09f')};
  background-color: ${props => (props.isActive ? '#FD6B36' : '#ededed')};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  color: var(--orange-500, #fd6b36);
  border: 1px solid var(--orange-500, #fd6b36);
  border-radius: 4px;
  box-sizing: border-box;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
`;

export const Name = styled.span`
  font-family: SUIT;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const ActivityCardListWrap = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 24px;
`;

export const ActivityCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  font-family: SUIT;
  line-height: 26px;
`;

export const Img = styled.img`
  width: 282px;
  height: 172px;
  object-fit: fill;
  border: 2px solid red;
  border-radius: 12px;
`;

// export const IconWrap = styled.div`
//   position: absolute;
//   right: 16px;
//   bottom: 16px;
//   background-color: transparent;
//   cursor: pointer;
// `;

// export const BookmarkIcon = styled(Bookmark)<{ 'data-ispick': boolean }>`
//   path {
//     fill: ${props =>
//       props['data-ispick'] ? props.theme.palette.orange500 : props.theme.palette.black200};
//   }
// `;

export const TextBox = styled.div`
  width: 100%;
`;

export const Enterprise = styled.p`
  color: #a0a09f;
  font-family: SUIT;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;

export const Title = styled.h2`
  height: 52px;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Type = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  justify-content: center;
  align-items: center;
  color: #fd6b36;
  background-color: #ffe8df;
  border-radius: 9999px;
  font-weight: 700;
  line-height: 26px;
`;
