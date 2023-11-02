import styled from '@emotion/styled';

import theme from 'styles/theme';

const { palette } = theme;
const { textStyle } = theme;

export const Container = styled.div`
  display: grid;
  grid-column: span 12;
  gap: 32px;
  padding: 32px 0;
  font-family: Bold;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${palette.background.secondary};
  padding: 32px;
  border-radius: 12px;
  ${textStyle.headLine02}
  color: ${palette.black500};
`;

export const Category = styled.h2`
  background-color: white;
  padding: 8px 16px;
  border: solid 2px ${palette.orange500};
  border-radius: 4px;
  ${textStyle.body01}
  color: ${palette.orange500};
`;

export const Body = styled.article`
  border: 2px solid ${palette.orange300};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Profile = styled.img`
  background-color: ${palette.background.primary};
  border-radius: 100%;
  height: 44px;
  width: 44px;
`;

export const Nickname = styled.div`
  ${textStyle.title02}
`;

export const TimeDiff = styled.div`
  ${textStyle.label03}
  color: ${palette.black200};
`;

export const ArticleTitle = styled.div`
  ${textStyle.title11}
  color: ${palette.black500};
`;

export const Article = styled.div`
  ${textStyle.title02}
  font-family: Medium;
  color: ${palette.black500};
  height: 374px;
`;

export const ArticleFooter = styled.div`
  border-top: 1px solid ${palette.black100};
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  ${textStyle.title01}
  color: ${palette.black200};
`;

export const CountContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
