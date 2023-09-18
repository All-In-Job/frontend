import styled from '@emotion/styled';

import { BAR_PIECE_COLOR } from 'components/PassionThermometer/constants';
import { BarPieceColor } from 'components/PassionThermometer/types';

import { categoryList } from '../PassionTemperature/mock/categories';

const TemperatureCategory = () => {
  return (
    <Container>
      <CategoryList>
        {Object.entries(categoryList).map(([k, v]) => {
          return (
            <CardContainer key={k}>
              <CardHeader color={BAR_PIECE_COLOR[k as keyof BarPieceColor]}>{v.name}</CardHeader>
              <Category key={k}>
                {v.subCategoryList.map((c, i) => (
                  <CategoryName key={`${k}_${c}_${i}`}>{c}</CategoryName>
                ))}
              </Category>
            </CardContainer>
          );
        })}
      </CategoryList>
    </Container>
  );
};

export default TemperatureCategory;

const Container = styled.div`
  margin-top: 24px;
`;
const CategoryList = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
const Category = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 17px;
  margin-bottom: 24px;
  max-width: 221px;
  width: 100%;
  height: 241px;
  padding: 16px;
  gap: 8px;
  background: var(--background-primary-50, #f8f8f8);
`;
const CategoryName = styled.span`
  color: var(--title-black, #121110);
  text-align: center;
  /* Body 1/Medium */
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  white-space: pre-wrap;
  overflow-x: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 24px;
  }
`;

const CardHeader = styled.h4<{ color: string }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 9999px;
  background-color: ${({ color }) => color};
  color: var(--title-black, #121110);
  /* Body 1/Bold */
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;
