import { useRecoilValue, useSetRecoilState } from 'recoil';

import { ModalBackground } from 'components/Modals/ModalBackground';
import { categoryIdState, currentCategoryState, currentKeywordState } from 'store/activityHistory';
import { isAcitiviyModalState } from 'store/modal';

import Calendar from './Calendar/Calendar';
import * as S from './Modal.styles';
import { ReactComponent as Close } from './res/img/close.svg';
import { CategorySelect } from './SelectList/CategorySelect';
import { InterestSelect } from './SelectList/InterestSelect';
import { TitleSelect } from './SelectList/TitleSelect';

const Modal = () => {
  const setIsModalVisible = useSetRecoilState(isAcitiviyModalState);
  const categoryId = useRecoilValue(categoryIdState);
  const setCurrentCategory = useSetRecoilState<string>(currentCategoryState);
  const setCurrentKeyword = useSetRecoilState(currentKeywordState);

  const onModalClose = () => {
    setCurrentCategory('');
    setCurrentKeyword('');
    setIsModalVisible(prev => !prev);
  };
  return (
    <ModalBackground>
      <S.Form>
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
            <S.SelectInput type='text' placeholder='점수를 입력해주세요' />
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
          />
        </S.ContentWrap>

        <S.Submit type='submit'>{'저장'}</S.Submit>
      </S.Form>
    </ModalBackground>
  );
};

export default Modal;
