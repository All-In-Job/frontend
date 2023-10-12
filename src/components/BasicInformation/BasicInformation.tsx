import { createContext, Dispatch, FormEventHandler, SetStateAction, useState } from 'react';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { InputGroup } from './InputGroup';
import { InputGroupHeader } from './InputGroupHeader';
import { PhotoList, photos } from './PhotoList';
import { PhotoListHeader } from './PhotoListHeader';

const defaultState = {
  'agree-1': false,
  'agree-2': false,
  isPhoneValid: false,
  currentPhoto: photos[0],
} as const;

export const BasicInformationContext = createContext<{
  currentFormState: typeof defaultState;
  setCurrentFormState: Dispatch<SetStateAction<typeof defaultState>>;
} | null>(null);

export const BasicInformation = () => {
  const navigate = useNavigate();
  const [currentFormState, setCurrentFormState] = useState(defaultState);

  const updateRequestBody: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    navigate('', { state: Object.fromEntries(new FormData(e.currentTarget)) });
  };

  return (
    <BasicInformationContext.Provider value={{ currentFormState, setCurrentFormState }}>
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
    </BasicInformationContext.Provider>
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
