import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

import { useRecoilCallback, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import {
  createThermometerData,
  patchData,
  patchInfo,
  patchThermometer,
  pathInfo,
  postData,
} from 'apis/thermometer';
import Calendar from 'components/ActivityHistory/Calendar/Calendar';
import { ReactComponent as Close } from 'components/ActivityHistory/res/img/close.svg';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { idsState, inputValuesState, tabIdState } from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import * as S from './ActivityHistoryModal.styles';
import { CategorySelect } from './SelectList/CategorySelect';
import { InterestSelect } from './SelectList/InterestSelect';
import { TitleSelect } from './SelectList/TitleSelect';

export type ActivityList = {
  field: string;
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
  updateActivityList: () => Promise<void>;
};

export const ActivityHistoryModal = ({ list, updateActivityList }: listProps) => {
  const setIsModalVisible = useSetRecoilState(isActivityModalState);
  const tabId = useRecoilValue(tabIdState);
  const activityListId = useRecoilValue(idsState('activityListId'));
  const [categoryId, setCategoryId] = useRecoilState(idsState('categoryId'));

  const [categoryValue, setCategoryValue] = useRecoilState(inputValuesState('category'));
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

  const resetAllInputValues = useRecoilCallback(({ snapshot, set }) => async () => {
    const keys = ['category', 'keyword', 'title', 'content', 'period', 'score'];

    keys.forEach(async key => {
      const atom = inputValuesState(key);
      await snapshot.getPromise(atom);
      set(atom, '');
    });
  });

  const resetForm = () => {
    setIsModalVisible(prev => !prev);
    resetAllInputValues();
  };

  useEffect(() => {
    if (list) {
      setCategoryId(tabId);
      setCategoryValue(list.field || '');
      setKeywordValue(list.category || '');
      setTitleValue(list.activeTitle || '');
      setContentValue(list.activeContent || '');
      setPeriodValue(list.period || '');
      setScoreValue(list.score || '');
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

    //등록하기
    const activityHistoryData: pathInfo = {
      field: categoryValue,
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

    //수정하기
    const activityHistoryPatchData: patchInfo = {
      activeContent: contentValue,
      ...(categoryId === 'language' && { score: scoreValue }),
      ...(categoryId === 'intern' && { period: periodValue }),
    };

    const formPatchData: patchData = {
      path: categoryId,
      thermometerId: activityListId,
      patchThermometer: activityHistoryPatchData,
    };

    try {
      if (!list) {
        const res = await createThermometerData(formData); //활동내역 등록
        console.log('활동내역 등록 성공:', res.data);
      } else {
        const res = await patchThermometer(formPatchData); //활동내역 수정
        console.log('활동내역 수정 성공:', res.data);
      }
      updateActivityList();
      resetForm();
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };

  console.log(list);

  return (
    <ModalBackground>
      <S.Form onSubmit={onSubmitFormData}>
        <S.TitleWrap>
          <S.H1>{`활동내역 ${list ? '수정' : '추가'}`}</S.H1>
          <Close onClick={resetForm} />
        </S.TitleWrap>

        <S.ContentWrap>
          <S.H2>{'활동내역 분야'}</S.H2>
          <CategorySelect pathData={list && list.field} />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'분야 선택'}</S.H2>
          <InterestSelect keywordData={list && list.category} />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'활동명'}</S.H2>
          <TitleSelect titleData={list && list.activeTitle} />
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
