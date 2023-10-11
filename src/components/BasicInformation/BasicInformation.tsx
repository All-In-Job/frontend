import styled from '@emotion/styled';

import { InputGroup } from './InputGroup';
import { InputGroupHeader } from './InputGroupHeader';
import { PhotoList } from './PhotoList';
import { PhotoListHeader } from './PhotoListHeader';

export const BasicInformation = () => {
  return (
    <StyledForm>
      <StyledColumn>
        <InputGroupHeader />
        <InputGroup />
      </StyledColumn>
      <StyledColumn>
        <PhotoListHeader />
        <PhotoList />
      </StyledColumn>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 988px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 24px;
  background-color: white;
`;
const StyledColumn = styled.div`
  padding: 40px;
`;
