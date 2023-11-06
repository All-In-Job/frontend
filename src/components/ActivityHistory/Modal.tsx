import { useState } from 'react';

// import { menuList } from 'pages/menu/menuList';

import Calendar from './Calendar';
import { menuList, MenuList, getMenuById, MenuId } from './Category';
import * as S from './Modal.styles';
import { ReactComponent as Close } from './res/img/close.svg';

interface IModal {
  onModalOpen: () => void;
}

const Modal = ({ onModalOpen }: IModal) => {
  // const { register, handleSubmit, setValue } = useForm<IForm>();
  const [menuId, setMenuId] = useState('');
  const foundMenuList = getMenuById(menuId! as MenuId);

  const [currentCategory, setCurrentCategory] = useState('활동내역 분야를 선택해주세요.');
  const [CategoryOptions, setCategoryOptions] = useState(false);

  const [currentKeyword, setCurrentKeyword] = useState('활동 분야를 선택해주세요.');
  const [KeywordOptions, setKeywordOptions] = useState(false);

  const onSelectCategory = (menu: MenuList) => {
    setMenuId(menu.id);
    setCurrentCategory(menu.title);
    setCategoryOptions(prev => !prev);
  };

  const onSelectKeyword = (e: { currentTarget: { innerText: string } }) => {
    const { innerText } = e.currentTarget;
    setCurrentKeyword(innerText);
    setKeywordOptions(prev => !prev);
  };

  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.Form>
          <S.TitleBox>
            <S.H1>활동내역 추가</S.H1>
            <Close onClick={onModalOpen} />
          </S.TitleBox>

          <S.ActivityWrapper>
            <S.H2>활동내역 분야</S.H2>
            <S.SelectBox show={CategoryOptions}>
              <S.SelectBtn
                type='button'
                onClick={() => setCategoryOptions(prev => !prev)}
                show={CategoryOptions}
              >
                {currentCategory}
              </S.SelectBtn>
              <S.SelectOptions show={CategoryOptions} style={{ zIndex: 3 }}>
                {menuList.slice(0, 5).map(el => {
                  return (
                    <S.Option key={el.id} onClick={() => onSelectCategory(el)}>
                      {el.title}
                    </S.Option>
                  );
                })}
              </S.SelectOptions>
            </S.SelectBox>
          </S.ActivityWrapper>

          <S.ActivityWrapper>
            <S.H2>분야 선택</S.H2>
            <S.SelectBox show={KeywordOptions}>
              <S.SelectBtn
                type='button'
                onClick={() => setKeywordOptions(prev => !prev)}
                show={KeywordOptions}
                style={{ zIndex: 2 }}
              >
                {currentKeyword}
              </S.SelectBtn>
              {foundMenuList?.items.slice(0, 1).map(item => {
                return (
                  <S.SelectOptions key={item.category} show={KeywordOptions}>
                    {item.keywords?.map(keyword => {
                      return (
                        <S.Option key={keyword} onClick={onSelectKeyword}>
                          {`#${keyword}`}
                        </S.Option>
                      );
                    })}
                  </S.SelectOptions>
                );
              })}
            </S.SelectBox>
          </S.ActivityWrapper>

          <S.ActivityWrapper>
            <S.H2>활동명</S.H2>
            <S.Input type='text' placeholder='활동명을 입력해주세요.' />
          </S.ActivityWrapper>

          {menuId === 'language' ? (
            <S.ActivityWrapper>
              <S.H2>점수</S.H2>
              <S.Input type='text' placeholder='점수를 입력해주세요' />
            </S.ActivityWrapper>
          ) : menuId === 'intern' ? (
            <S.ActivityWrapper>
              <S.H2>활동 기간</S.H2>
              <Calendar />
            </S.ActivityWrapper>
          ) : null}

          <S.ActivityWrapper>
            <S.H2>활동 내용</S.H2>
            <S.Textarea
              placeholder='활동 내용을 입력해주세요.&#10;활동했던 내용을 요약해서 적어보세요!'
            />
          </S.ActivityWrapper>

          <S.Submit type='submit'>저장</S.Submit>
        </S.Form>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;
