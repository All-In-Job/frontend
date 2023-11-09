import { ChangeEvent, useEffect, useState } from 'react';

// import { ActivityHistory } from 'types/activityHistory';

import { useSetRecoilState } from 'recoil';

// import { menuList } from 'pages/menu/menuList';
import { requestActivityCrawlingData } from 'apis/activityHistoryCrawling';
import { ModalBackground } from 'components/Modals/ModalBackground';
import { isAcitiviyModalState } from 'store/modal';

import Calendar from './Calendar/Calendar';
import { menuList, MenuList, getMenuById, MenuId } from './Category';
import * as S from './Modal.styles';
import { ReactComponent as Close } from './res/img/close.svg';
import { ReactComponent as ExpandMore } from './res/img/expand_more.svg';

const Modal = () => {
  const setIsModalVisible = useSetRecoilState(isAcitiviyModalState);
  const onModalOpen = () => {
    setIsModalVisible(prev => !prev);
  };
  const [menuId, setMenuId] = useState('');
  const foundMenuList = getMenuById(menuId! as MenuId);

  const [currentCategory, setCurrentCategory] = useState('');
  const [CategoryOptions, setCategoryOptions] = useState(false);

  const [currentKeyword, setCurrentKeyword] = useState('');
  const [KeywordOptions, setKeywordOptions] = useState(false);

  // 활동명 검색
  const [activityData, setActivityData] = useState<string[]>([]);
  const [inputTitleValue, setInputTitleValue] = useState<string>('');
  const [isVisibleTitle, setIsVisibleTitle] = useState(false);

  // const titleList = activityData.map(list => list.title);
  const searchTitle = activityData.filter(title => title.includes(inputTitleValue));

  const onChangeInputTitleValue = (e: ChangeEvent<HTMLInputElement>) =>
    setInputTitleValue(e.target.value);

  const onSelectTitle = (title: string) => setInputTitleValue(title);

  const onFocusInput = () => setIsVisibleTitle(true);

  const onBlurInput = () => setIsVisibleTitle(false);

  const updateData = async () => {
    const queries = {
      path: encodeURI(currentKeyword),
    };
    (async () => {
      try {
        const res = await requestActivityCrawlingData(menuId as string, queries);
        const titleList = res.data.data.map(list => list.title);
        setActivityData(titleList);
      } catch (error) {
        console.error(error);
      }
    })();
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (currentKeyword) updateData();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [currentKeyword]);

  // useEffect(() => {
  //   const queries = {
  //     path: encodeURI(currentKeyword),
  //   };

  //   if (currentKeyword) {
  //     (async () => {
  //       try {
  //         const res = await requestActivityCrawlingData(menuId as string, queries);
  //         setActivityData(res.data.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     })();
  //   }
  // }, [currentKeyword]);

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

  console.log(searchTitle);

  return (
    <ModalBackground>
      <S.Form>
        <S.TitleBox>
          <S.H1>활동내역 추가</S.H1>
          <Close onClick={onModalOpen} />
        </S.TitleBox>

        <S.ActivityWrapper>
          <S.H2>활동내역 분야</S.H2>
          <S.SelectBox show={CategoryOptions}>
            <label>
              <S.SelectInput
                type='text'
                placeholder='활동내역 분야를 선택해주세요.'
                defaultValue={currentCategory}
                onClick={() => setCategoryOptions(prev => !prev)}
                show={CategoryOptions}
              />
              <ExpandMore />
            </label>
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
            <label>
              <S.SelectInput
                type='text'
                placeholder='활동 분야를 선택해주세요.'
                defaultValue={currentKeyword}
                onClick={() => setKeywordOptions(prev => !prev)}
                show={KeywordOptions}
              />
              <ExpandMore />
            </label>
            {foundMenuList?.items.slice(0, 1).map(item => {
              return (
                <S.SelectOptions key={item.category} show={KeywordOptions}>
                  {item.keywords?.map(keyword => {
                    return (
                      <S.Option key={keyword} onClick={onSelectKeyword}>
                        {`${keyword}`}
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
          <S.Input
            type='text'
            placeholder='활동명을 입력해주세요.'
            value={inputTitleValue}
            onChange={onChangeInputTitleValue}
            onFocus={onFocusInput}
            onBlur={onBlurInput}
          />
          {isVisibleTitle && (
            <S.SelectWrapper>
              <S.SelectOptions1 style={{ zIndex: 1 }}>
                {searchTitle?.map(title => (
                  <S.Option key={title} onMouseDown={() => onSelectTitle(title)}>
                    {title}
                  </S.Option>
                ))}
              </S.SelectOptions1>
            </S.SelectWrapper>
          )}
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

        <S.ActivityWrapper style={{ zIndex: 0 }}>
          <S.H2>활동 내용</S.H2>
          <S.Textarea
            placeholder='활동 내용을 입력해주세요.&#10;활동했던 내용을 요약해서 적어보세요!'
          />
        </S.ActivityWrapper>

        <S.Submit type='submit'>저장</S.Submit>
      </S.Form>
    </ModalBackground>
  );
};

export default Modal;
