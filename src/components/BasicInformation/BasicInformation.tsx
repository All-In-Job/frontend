import { FormEventHandler } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { InputGroup } from './InputGroup';
import { InputGroupHeader } from './InputGroupHeader';
import { PhotoList } from './PhotoList';
import { PhotoListHeader } from './PhotoListHeader';

export const BasicInformation = () => {
  const navigate = useNavigate();

  const updateRequestBody: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    navigate('', { state: Object.fromEntries(new FormData(e.currentTarget)) });
  };

  return (
    <StyledForm onSubmit={updateRequestBody}>
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
