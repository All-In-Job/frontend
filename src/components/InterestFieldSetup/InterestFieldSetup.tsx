import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

import { createUser } from 'apis/signup';
import { InputFieldType } from 'components/BasicInformation/BasicInformation';
import Submit from 'components/commons/Buttons/Submit/Submit';

import interestTags from './data/interestTags.json';
import * as S from './InterestFieldSetup.styles';
import { ReactComponent as DefaultInterestImage } from './res/img/default_interest_image.svg';

const departments = [
  '학과1',
  '학과2',
  '학과3',
  '학과4',
  '학과5',
  '학과6',
  '학과7',
  '학과8',
  '학과9',
  '학과10',
  '학과11',
  '학과12',
  '학과13',
  '학과14',
  '학과15',
  '학과16',
  '학과17',
  '학과18',
  '학과19',
  '학과20',
];

type SignupFormInputFieldsType = Record<
  'email' | 'provider' | InputFieldType | 'currentPhoto',
  string
>;
type InterestTag = {
  name: string;
  keyWords: string[];
};

function InterestFieldSetup() {
  const [departmentInput, setDepartmentInput] = useState('');
  const [choiceDepartment, setChoiceDepartment] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const [interestTag, setInterestTag] = useState<InterestTag>({
    name: interestTags[0].name,
    keyWords: interestTags[0].keyWords,
  });
  const [selectedKeyWords, setSelectedKeyWords] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const locationState = useLocation().state as SignupFormInputFieldsType;

  const getValueDepartmentInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDepartmentInput(e.target.value);

    if (e.target.value !== '') {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      setChoiceDepartment('');
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const searchedDepartment = departments.filter(department => department.includes(departmentInput));

  const onClickChoice = (department: string) => {
    setChoiceDepartment(department);

    if (inputRef.current) {
      inputRef.current.value = department;
    }
    setIsVisible(false);
  };

  const onClickTag = (tag: InterestTag) => {
    setInterestTag({
      name: tag.name,
      keyWords: tag.keyWords,
    });

    setSelectedKeyWords([]);
  };

  const selectedKeyWord = (keyWord: string) => {
    if (selectedKeyWords.includes(keyWord)) {
      const updatedSelectedKeywords = selectedKeyWords.filter(
        selectedKeyWord => selectedKeyWord !== keyWord,
      );
      setSelectedKeyWords(updatedSelectedKeywords);
    } else if (selectedKeyWords.length < 3) {
      const updatedSelectedKeywords = [...selectedKeyWords, keyWord];
      setSelectedKeyWords(updatedSelectedKeywords);
    }
  };

  useEffect(() => {
    setIsActive(choiceDepartment !== '' && selectedKeyWords.length > 0);
  }, [choiceDepartment, selectedKeyWords]);

  const submitButton = async () => {
    try {
      const payload = {
        major: { mainMajor: '가정교육과', subMajor: '소비자생활문화산업학과' },
        interests: [
          {
            competition: ['기획/아이디어', '과학/공학'],
          },
          {
            outside: ['서포터즈', '멘토링'],
          },
          {
            intern: ['대기업', '중견기업'],
          },
          {
            language: ['toeic', 'toeicWT', 'ch'],
          },
          {
            qnet: ['환경.에너지', '정보통신'],
          },
        ],
      };

      const res = await createUser({ ...locationState, ...payload });
      console.log('회원가입 성공:', res);
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        console.log(e.response);
      }
    }
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
      <S.MajorDepartment
        choicedepartment={choiceDepartment}
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
          choicedepartment={choiceDepartment}
          data-isvisible={isVisible}
          data-isinputfocused={isInputFocused}
        />
        {isVisible && (
          <S.MajorDepartmentList>
            {searchedDepartment.map(department => (
              <li key={department} onClick={() => onClickChoice(department)}>
                {department}
              </li>
            ))}
          </S.MajorDepartmentList>
        )}
      </S.MajorDepartment>

      <S.DefaultImageBox>
        <DefaultInterestImage />
      </S.DefaultImageBox>

      <S.InterestFieldSetupTitle>관심분야를 선택해주세요!</S.InterestFieldSetupTitle>
      <S.InterestSelectTagList>
        {interestTags.map(tag => (
          <S.ClickedTag
            key={tag.name}
            onClick={() =>
              onClickTag({
                name: tag.name,
                keyWords: [...tag.keyWords],
              })
            }
            isChangeColor={tag.name === interestTag.name ? true : false}
          >
            {tag.name}
          </S.ClickedTag>
        ))}
      </S.InterestSelectTagList>

      <S.InterestKeyWord>
        <S.InterestFieldSetupTitle>
          #{interestTag.name} 분야의 관심 키워드를 선택해주세요!
        </S.InterestFieldSetupTitle>
        <S.KeyWordText>키워드는 1개~3개 선택 가능합니다.</S.KeyWordText>

        <S.KeyWordList>
          {interestTag.keyWords.map(keyWord => (
            <S.ClickedKeyWord
              key={keyWord}
              onClick={() => selectedKeyWord(keyWord)}
              isChangeColor={selectedKeyWords.includes(keyWord)}
            >
              {/* <S.CheckBox isChangeColor={selectedKeyWords.includes(keyWord)}></S.CheckBox> */}
              <S.CheckCircleIcon data-isactive={selectedKeyWords.includes(keyWord)} />
              <p>#{keyWord}</p>
            </S.ClickedKeyWord>
          ))}
        </S.KeyWordList>
      </S.InterestKeyWord>
      <Submit
        title='확인'
        onClick={submitButton}
        disabled={isActive ? false : true}
        isActive={isActive}
      />
    </S.InterestFieldSetupWrapper>
  );
}

export default InterestFieldSetup;
