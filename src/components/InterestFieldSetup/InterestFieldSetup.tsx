import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Submit from 'components/commons/Buttons/Submit/Submit';

import * as S from './InterestFieldSetup.styles';
import { ReactComponent as DefaultInterestImage } from './res/img/default_interest_image.svg';

const interestTags = [
  {
    name: '공모전',
    keyWords: [
      '기획/아이디어',
      '광고/마케팅',
      '사진/영상/UCC',
      '디자인/순수미술/공예',
      '네이밍/슬로건',
      '캐릭터/만화/게임',
      '건축/건설/인테리어',
      '과학/공학',
      '예체능/패션',
      '전시/페스티벌',
      '문학/시나리오',
      '해외',
      '학술',
      '창업',
      '기타',
    ],
  },
  {
    name: '대외활동',
    keyWords: [
      '여행/호텔/항공',
      '언론/미디어',
      '문화/역사',
      '행사/페스티벌',
      '교육',
      '디자인/사진/예술/영상',
      '경제/금융',
      '경영/컨설팅/마케팅',
      '정치/사회/법률',
      '체육/헬스',
      '의료/보건',
      '뷰티/미용/화장품',
      '과학/공학/기술/IT',
      '요리/식품',
      '창업/자기계발',
      '환경/에너지',
      '콘텐츠',
      '사회공헌/교류',
      '유통/물류',
      '기타',
    ],
  },
  {
    name: '자격증',
    keyWords: [
      '경영/회계/사무',
      '보건/의료',
      '문화예술/디자인/방송',
      '사회복지/종교',
      '이용/숙박/여행/오락/스포츠',
      '음식서비스',
      '기계',
      '정보통신',
      '식품/가공',
      '환경/에너지',
    ],
  },
  {
    name: '어학',
    keyWords: ['영어', '중국어', '스페인어', '일본어', '포르투갈어', '아랍어'],
  },
  {
    name: '인턴',
    keyWords: [
      '영업/고객상담',
      '경영/사무',
      '마케팅/광고/홍보',
      '생산/제조',
      '연구개발/설계',
      'IT/인터넷',
      '서비스',
      '무역/유통',
      '의료',
      '건설',
      '교육',
      '디자인',
      '전문/특수직',
      '미디어',
      '기타',
    ],
  },
];

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

  const submitButton = () => {
    console.log({
      name: interestTag.name,
      keywords: selectedKeyWords,
      choiceDepartment: choiceDepartment,
    });
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.InterestFieldSetupTitle>전공학과를 선택해주세요!</S.InterestFieldSetupTitle>
      <S.MajorDepartment
        choiceDepartment={choiceDepartment}
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
          choiceDepartment={choiceDepartment}
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
