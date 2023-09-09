import styled from '@emotion/styled';

import { categoryList } from './mock/categories';

const TemperatureCategory = () => {
  return (
    <Container>
      <CategoryList>
        {Object.entries(categoryList).map(([k, v]) => {
          return (
            <Category key={k}>
              {v.subCategoryList.map(c => (
                <CategoryName key={`${k}_${c}`}>{c}</CategoryName>
              ))}
            </Category>
          );
        })}
      </CategoryList>
    </Container>
  );
};

export default TemperatureCategory;

const Container = styled.div`
  display: grid;
`;
const CategoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const Category = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 221px;
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
`;
