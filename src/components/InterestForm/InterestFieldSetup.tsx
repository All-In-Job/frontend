import { Dispatch, FC, SetStateAction, useCallback, useMemo, useState } from 'react';

import { InterestFormState } from 'hooks/useInterestForm';
import theme from 'styles/theme';

import { interestTags } from './data/interestTags';
import * as S from './InterestForm.style';

type InterestTagsType = typeof interestTags;
type Keywords = InterestTagsType[number]['keyWords'];

type Props = {
  formState: InterestFormState;
  setFormState: Dispatch<SetStateAction<InterestFormState>>;
};

export type TagName = (typeof interestTags)[number]['name'];

export const InterestFieldSetup: FC<Props> = ({ formState, setFormState }) => {
  const [selectedTag, setSelectedTag] = useState<TagName>('공모전');

  const foundInterest = useMemo(() => {
    return interestTags.find(interest => interest.name === selectedTag && interest.keyWords);
  }, [selectedTag]);

  const getHeavyTags = () => {
    const tagNames = Object.keys(formState.interests) as TagName[];
    const heavyTags = tagNames.filter(tagName => {
      const heavyTag = formState.interests[tagName].length > 0 && tagName;
      return heavyTag;
    });
    return heavyTags;
  };

  const updateFormState = (tagName: TagName, keywords: string[]) => {
    setFormState({
      ...formState,
      interests: { ...formState.interests, [tagName]: keywords },
    });
  };
  const updateSelectedKeyWord = useCallback(
    (tagName: TagName, selected: Keywords[number]) => {
      const selects = formState.interests[tagName];
      const isOnlyOneKeyWord = selects.length === 1 && selects[0] === selected;
      const isMax = selects.length === 3;

      if (isOnlyOneKeyWord && getHeavyTags().length === 1) return;
      if (isMax && !selects.includes(selected)) return;

      if (selects.includes(selected)) {
        const updatedSelectedKeywords = selects.filter(keyWord => keyWord !== selected);
        return updateFormState(tagName, updatedSelectedKeywords);
      }
      updateFormState(tagName, [...selects, selected]);
    },
    [formState],
  );

  const getButtonStyle = (tagName: TagName) => {
    const { black200, orange500 } = theme.palette;

    if (tagName === selectedTag) return { color: 'white', backgroundColor: orange500 };

    const hasSelectedKeyword = formState.interests[tagName].length >= 1;
    if (hasSelectedKeyword) return { color: orange500, border: `1px solid ${orange500}` };

    return { color: black200, border: `1px solid ${black200}` };
  };

  return (
    <>
      <S.InterestSelectTagList>
        {interestTags.map(tag => (
          <S.ClickedTag
            key={tag.name}
            onClick={() => setSelectedTag(tag.name)}
            style={getButtonStyle(tag.name)}
            // isChangeColor={tag.name === selectedTag}
          >
            {tag.name}
          </S.ClickedTag>
        ))}
      </S.InterestSelectTagList>

      <S.InterestKeyWord>
        <S.InterestFieldSetupTitle>
          #{selectedTag} 분야의 관심 키워드를 선택해주세요!
        </S.InterestFieldSetupTitle>
        <S.KeyWordText>키워드는 1개~3개 선택 가능합니다.</S.KeyWordText>

        <S.KeyWordList>
          {foundInterest &&
            foundInterest.keyWords.map(keyWord => (
              <S.ClickedKeyWord
                key={keyWord}
                onClick={() => updateSelectedKeyWord(selectedTag, keyWord)}
                isChangeColor={formState.interests[selectedTag].includes(keyWord)}
              >
                {/* <S.CheckBox isChangeColor={selectedKeyWords.includes(keyWord)}></S.CheckBox> */}
                <S.CheckCircleIcon
                  data-isactive={formState.interests[selectedTag].includes(keyWord)}
                />
                <p>#{keyWord}</p>
              </S.ClickedKeyWord>
            ))}
        </S.KeyWordList>
      </S.InterestKeyWord>
    </>
  );
};
