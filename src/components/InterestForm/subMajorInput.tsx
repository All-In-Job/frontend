import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { InterestFormState } from 'hooks/useInterestForm';
import { useSearch } from 'hooks/useSearch';

import * as S from './InterestForm.style';

type Props = {
  formState: InterestFormState;
  setFormState: Dispatch<SetStateAction<InterestFormState>>;
};

export const SubMajorInput: FC<Props> = ({ formState, setFormState }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { matchWord, searchedResults, setSearchedResults, mClasses } = useSearch({ major: 'main' });

  const getValueDepartmentInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(mClasses);
    if (mClasses) setSearchedResults(matchWord(mClasses, e.target.value));

    if (e.target.value !== '') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setFormState({ ...formState, subMajor: '' });
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const onClickChoice = (major: string) => {
    setFormState({ ...formState, subMajor: major });

    if (inputRef.current) {
      inputRef.current.value = major;
    }
    setIsVisible(false);
  };

  return (
    <S.MajorDepartment
      choicedepartment={formState.subMajor}
      isVisible={isVisible}
      isInputFocused={isInputFocused}
    >
      <input
        type='text'
        placeholder='전공학과를 입력해주세요.'
        onChange={getValueDepartmentInput}
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <S.ExpandMoreIcon
        choicedepartment={formState.subMajor}
        data-isvisible={isVisible}
        data-isinputfocused={isInputFocused}
      />
      {isVisible && (
        <S.MajorDepartmentList>
          {searchedResults &&
            searchedResults.map(department => (
              <li key={department} onClick={() => onClickChoice(department)}>
                {department}
              </li>
            ))}
        </S.MajorDepartmentList>
      )}
    </S.MajorDepartment>
  );
};
