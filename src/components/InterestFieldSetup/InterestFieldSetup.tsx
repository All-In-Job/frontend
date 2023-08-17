import {useState} from "react";
import * as S from "./InterestFieldSetup.styles";

const interestTags = [
  {
    name: "#문학",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#디자인",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#IT, 프로그래밍",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#예체능",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#어학",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#창업, 사업",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
  {
    name: "#금융",
    icon: "",
    image: "",
    keyWords: ["#시", "#소설", "#논문", "#논술"],
  },
];

type InterestTag = {
  name: string;
  image: string;
  keyWords: string[];
};

function InterestFieldSetup() {
  const [interestTag, setInterestTag] = useState<InterestTag>({
    name: "",
    image: "",
    keyWords: [],
  });
  const [selectedKeyWords, setSelectedKeyWords] = useState<string[]>([]);

  const onClickTag = (tag: InterestTag) => () => {
    setInterestTag({
      name: tag.name,
      image: tag.image,
      keyWords: tag.keyWords,
    });

    setSelectedKeyWords([]);
  };

  const selectedKeyWord = (keyWord: string) => () => {
    if (selectedKeyWords.includes(keyWord)) {
      const updatedSelectedKeywords = selectedKeyWords.filter(
        (selectedKeyWord) => selectedKeyWord !== keyWord
      );
      setSelectedKeyWords(updatedSelectedKeywords);
    } else if (selectedKeyWords.length < 3) {
      const updatedSelectedKeywords = [...selectedKeyWords, keyWord];
      setSelectedKeyWords(updatedSelectedKeywords);
    }
  };

  const submitButton = () => {
    console.log({name: interestTag.name, keywords: selectedKeyWords});
  };

  return (
    <S.InterestFieldSetupWrapper>
      <S.MajorDepartment>
        <S.InterestFieldSetupTitle>
          전공학과를 선택해주세요!
        </S.InterestFieldSetupTitle>
        <input type="text" placeholder="학과를 입력해주세요." />
      </S.MajorDepartment>

      <S.InterestSelect>
        <S.InterestFieldSetupTitle>
          관심 분야를 선택해주세요!
        </S.InterestFieldSetupTitle>
        <S.TagList>
          {interestTags.map((tag) => (
            <S.ClickedTag
              key={tag.name}
              onClick={onClickTag({
                name: tag.name,
                image: tag.image,
                keyWords: [...tag.keyWords],
              })}
              isChangeColor={tag.name === interestTag.name ? true : false}
            >
              <S.TagName>{tag.name}</S.TagName>
              <S.TagIcon src={tag.icon} />
            </S.ClickedTag>
          ))}
        </S.TagList>
      </S.InterestSelect>

      {interestTag.name !== "" && (
        <>
          <S.InterestKeyWord>
            <S.InterestFieldSetupTitle>
              <strong>{interestTag.name} </strong>분야의 관심 키워드를
              선택해주세요!
            </S.InterestFieldSetupTitle>
            <S.KeyWordText>키워드는 1개~3개 선택 가능합니다.</S.KeyWordText>
            <S.TagImage src={interestTag.image} />
            <S.KeyWordList>
              {interestTag.keyWords.map((keyWord) => (
                <S.ClickedKeyWord
                  key={keyWord}
                  onClick={selectedKeyWord(keyWord)}
                  isChangeColor={selectedKeyWords.includes(keyWord)}
                >
                  <S.CheckBox
                    isChangeColor={selectedKeyWords.includes(keyWord)}
                  ></S.CheckBox>
                  <p>{keyWord}</p>
                </S.ClickedKeyWord>
              ))}
            </S.KeyWordList>
          </S.InterestKeyWord>
          <S.SubmitButton onClick={submitButton} disabled>
            확인
          </S.SubmitButton>
        </>
      )}
    </S.InterestFieldSetupWrapper>
  );
}

export default InterestFieldSetup;
