import { ChangeEvent, Dispatch, FC, SetStateAction, useRef, useState } from 'react';

import { InterestFormState } from 'hooks/useInterestForm';
import { MajorType, useSearch } from 'hooks/useSearch';

import * as S from './InterestForm.style';

export type Props = {
  formState: InterestFormState;
  setFormState: Dispatch<SetStateAction<InterestFormState>>;
  majorType: MajorType;
};

export const SubMajorInput: FC<Props> = ({ formState, setFormState, majorType }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { matchWord, searchedResults, setSearchedResults, mainMajors, fixedResponse, isLoading } =
    useSearch();

  const getValueDepartmentInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (majorType === 'mainMajor' && mainMajors) {
      console.log(mainMajors);
      setSearchedResults(matchWord(mainMajors, e.target.value));
    }
    if (majorType === 'subMajor' && fixedResponse) {
      const subMajors = Array.from(new Set(fixedResponse[formState.major.mainMajor]));
      setSearchedResults(matchWord(subMajors, e.target.value));
    }

    if (e.target.value !== '') setIsVisible(true);
    else {
      setIsVisible(false);
      setFormState({ ...formState, major: { ...formState.major, [majorType]: '' } });
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const onClickChoice = (major: string) => {
    setFormState({ ...formState, major: { ...formState.major, [majorType]: major } });

    if (inputRef.current) {
      inputRef.current.value = major;
    }
    setIsVisible(false);
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <S.MajorDepartment
      choicedepartment={formState.major.subMajor}
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
        choicedepartment={formState.major.subMajor}
        data-isvisible={isVisible}
        data-isinputfocused={isInputFocused}
      />
      {isVisible && (
        <S.MajorDepartmentList>
          {searchedResults &&
            searchedResults.map(department => (
              <li key={majorType + department} onClick={() => onClickChoice(department)}>
                {department}
              </li>
            ))}
        </S.MajorDepartmentList>
      )}
    </S.MajorDepartment>
  );
};
