import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { createThermometerData, pathInfo, postData } from 'apis/thermometer';
import Calendar from 'components/ActivityHistory/Calendar/Calendar';
import { ReactComponent as Close } from 'components/ActivityHistory/res/img/close.svg';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { idsState, inputValuesState } from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import * as S from './ActivityHistoryModal.styles';
import { CategorySelect } from './SelectList/CategorySelect';
import { InterestSelect } from './SelectList/InterestSelect';
import { TitleSelect } from './SelectList/TitleSelect';

export type ActivityList = {
  path: string;
  id: string;
  category: string;
  keyword: string;
  activeTitle: string;
  activeContent: string;
  period?: string;
  score?: string;
};

type listProps = {
  list: ActivityList | null;
  updateActivityList: Promise<void>;
};

export const ActivityHistoryModal = ({ list, updateActivityList }: listProps) => {
  const setIsModalVisible = useSetRecoilState(isActivityModalState);
  const categoryId = useRecoilValue(idsState('categoryId'));

  const setCategoryValue = useSetRecoilState(inputValuesState('category'));
  const [keywordValue, setKeywordValue] = useRecoilState(inputValuesState('keyword'));
  const [titleValue, setTitleValue] = useRecoilState(inputValuesState('title'));
  const [contentValue, setContentValue] = useRecoilState(inputValuesState('content'));
  const [periodValue, setPeriodValue] = useRecoilState(inputValuesState('period'));
  const [scoreValue, setScoreValue] = useRecoilState(inputValuesState('score'));

  const [isActive, setIsActive] = useState(false);

  const handleContentInputChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContentValue(e.target.value);
  const handleScoreInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setScoreValue(e.target.value);

  const resetForm = () => {
    setIsModalVisible(prev => !prev);
    setCategoryValue('');
    setKeywordValue('');
    setTitleValue('');
    setContentValue('');
    setPeriodValue('');
    setScoreValue('');
  };
  console.log(keywordValue, titleValue, contentValue);

  useEffect(() => {
    if (list) {
      setCategoryValue(list.category);
      setKeywordValue(list.keyword);
      setTitleValue(list.activeTitle);
      setContentValue(list.activeContent);
      list.period && setPeriodValue(list.period);
      list.score && setScoreValue(list.score);
    }
  }, [list]);

  useEffect(() => {
    const requiredValues =
      categoryId === 'language'
        ? [keywordValue, titleValue, contentValue, scoreValue]
        : categoryId === 'intern'
        ? [keywordValue, titleValue, contentValue, periodValue]
        : [keywordValue, titleValue, contentValue];

    setIsActive(requiredValues.every(value => value !== ''));
  }, [keywordValue, titleValue, contentValue, scoreValue, periodValue]);

  const onSubmitFormData: FormEventHandler = async e => {
    e.preventDefault();

    const activityHistoryData: pathInfo = {
      category: keywordValue,
      activeTitle: titleValue,
      activeContent: contentValue,
      ...(categoryId === 'language' && { score: scoreValue }),
      ...(categoryId === 'intern' && { period: periodValue }),
    };

    const formData: postData = {
      path: categoryId,
      createThermometer: activityHistoryData,
    };

    try {
      const res = await createThermometerData(formData);
      console.log('서버 응답:', res);
      console.log('활동내역 등록 성공:', res.data);
      updateActivityList;
      resetForm();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  return (
    <ModalBackground>
      <S.Form onSubmit={onSubmitFormData}>
        <S.TitleWrap>
          <S.H1>{`활동내역 ${list ? '수정' : '추가'}`}</S.H1>
          <Close onClick={resetForm} />
        </S.TitleWrap>

        <S.ContentWrap>
          <S.H2>{'활동내역 분야'}</S.H2>
          <CategorySelect pathData={list ? list.path : null} />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'분야 선택'}</S.H2>
          <InterestSelect />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'활동명'}</S.H2>
          <TitleSelect />
        </S.ContentWrap>

        {categoryId === 'language' && (
          <S.ContentWrap>
            <S.H2>{'점수'}</S.H2>
            <S.SelectInput
              type='text'
              placeholder='점수를 입력해주세요'
              value={scoreValue}
              onChange={handleScoreInputChange}
            />
          </S.ContentWrap>
        )}
        {categoryId === 'intern' && (
          <S.ContentWrap>
            <S.H2>{'활동 기간'}</S.H2>
            <Calendar />
          </S.ContentWrap>
        )}

        <S.ContentWrap>
          <S.H2>{'활동 내용'}</S.H2>
          <S.Textarea
            placeholder='활동 내용을 입력해주세요.&#10;활동했던 내용을 요약해서 적어보세요!'
            value={contentValue}
            onChange={handleContentInputChange}
          />
        </S.ContentWrap>

        <S.Submit type='submit' disabled={isActive ? false : true} isActive={isActive}>
          {list ? '수정' : '저장'}
        </S.Submit>
      </S.Form>
    </ModalBackground>
  );
};
