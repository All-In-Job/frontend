import styled from '@emotion/styled';

import { BAR_PIECE_COLOR } from 'pages/home/PassionTemperature/Thermometer/constants';
import { BarPieceColor } from 'pages/home/PassionTemperature/Thermometer/types';

import { TemperatureCategoryList } from './type';

type TemperatureCategory = {
  categoryList: TemperatureCategoryList;
};
const TemperatureCategory = ({ categoryList }: TemperatureCategory) => {
  return (
    <Container>
      <CategoryList>
        {Object.entries(categoryList).map(([k, v]) => {
          return (
            <CardContainer key={k}>
              <CardHeader color={BAR_PIECE_COLOR[k.slice(4).toLowerCase() as keyof BarPieceColor]}>
                {v.field}
              </CardHeader>
              <Category key={k}>
                {v.activeTitle.map((c, i) => (
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
const Category = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 17px;
  margin-bottom: 30px;
  height: 241px;
  padding: 16px;
  gap: 15px;
  background: var(--background-primary-50, #f8f8f8);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #a9a9a9;
  }
`;
const CategoryName = styled.span`
  width: 100%;
  color: var(--title-black, #121110);
  text-align: center;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;
