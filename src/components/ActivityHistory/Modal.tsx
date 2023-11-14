import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { createActivityHistory } from 'apis/thermometer';
import { ModalBackground } from 'components/Modals/ModalBackground';
import {
  categoryIdState,
  currentCategoryState,
  currentKeywordState,
  periodState,
  titleValueState,
} from 'store/activityHistory';
import { isActivityModalState } from 'store/modal';

import Calendar from './Calendar/Calendar';
import * as S from './Modal.styles';
import { ReactComponent as Close } from './res/img/close.svg';
import { CategorySelect } from './SelectList/CategorySelect';
import { InterestSelect } from './SelectList/InterestSelect';
import { TitleSelect } from './SelectList/TitleSelect';

const Modal = () => {
  const setIsModalVisible = useSetRecoilState(isActivityModalState);
  const categoryId = useRecoilValue(categoryIdState);
  const setCurrentCategory = useSetRecoilState(currentCategoryState);
  const [currentKeyword, setCurrentKeyword] = useRecoilState(currentKeywordState);
  const [titleValue, setTitleValue] = useRecoilState(titleValueState);
  const [periodValue, setPeriodValue] = useRecoilState(periodState);
  const [contentValue, setContentValue] = useState('');
  const [scoreValue, setScoreValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const onModalClose = () => {
    const formElement = document.getElementById('form') as HTMLFormElement | null;
    formElement && formElement.reset();
    setCurrentCategory('');
    setCurrentKeyword('');
    setTitleValue('');
    setPeriodValue('');
    setIsModalVisible(prev => !prev);
  };

  const onChangeInputContentValue = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContentValue(e.target.value);
  const onChangeInputScoreValue = (e: ChangeEvent<HTMLInputElement>) =>
    setScoreValue(e.target.value);

  useEffect(() => {
    const requiredValues =
      categoryId === 'language'
        ? [currentKeyword, titleValue, contentValue, scoreValue]
        : categoryId === 'intern'
        ? [currentKeyword, titleValue, contentValue, periodValue]
        : [currentKeyword, titleValue, contentValue];

    setIsActive(requiredValues.every(value => value !== ''));
  }, [currentKeyword, titleValue, contentValue, scoreValue, periodValue]);

  const onSubmitFormData: FormEventHandler = async e => {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    const headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    const postData = {
      path: categoryId,
      createThermometer: {
        category: currentKeyword,
        activeTitle: titleValue,
        activeContent: contentValue,
      },
    };

    try {
      const res = await createActivityHistory(postData, headers);
      console.log('서버 응답:', res);
      console.log('활동내역 등록 성공:', res.data);
    } catch (error) {
      console.error('Error creating data:', error);
    }
  };
  return (
    <ModalBackground>
      <S.Form onSubmit={onSubmitFormData}>
        <S.TitleWrap>
          <S.H1>{'활동내역 추가'}</S.H1>
          <Close onClick={onModalClose} />
        </S.TitleWrap>

        <S.ContentWrap>
          <S.H2>{'활동내역 분야'}</S.H2>
          <CategorySelect />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'분야 선택'}</S.H2>
          <InterestSelect />
        </S.ContentWrap>

        <S.ContentWrap>
          <S.H2>{'활동명'}</S.H2>
          <TitleSelect />
        </S.ContentWrap>

        {categoryId === 'language' ? (
          <S.ContentWrap>
            <S.H2>{'점수'}</S.H2>
            <S.SelectInput
              type='text'
              placeholder='점수를 입력해주세요'
              value={scoreValue}
              onChange={onChangeInputScoreValue}
            />
          </S.ContentWrap>
        ) : categoryId === 'intern' ? (
          <S.ContentWrap>
            <S.H2>{'활동 기간'}</S.H2>
            <Calendar />
          </S.ContentWrap>
        ) : null}

        <S.ContentWrap>
          <S.H2>{'활동 내용'}</S.H2>
          <S.Textarea
            placeholder='활동 내용을 입력해주세요.&#10;활동했던 내용을 요약해서 적어보세요!'
            value={contentValue}
            onChange={onChangeInputContentValue}
          />
        </S.ContentWrap>
        <S.Submit type='submit' disabled={isActive ? false : true} isActive={isActive}>
          저장
        </S.Submit>
      </S.Form>
    </ModalBackground>
  );
};

export default Modal;