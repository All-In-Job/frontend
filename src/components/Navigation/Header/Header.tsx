import * as S from "./header.styles.ts";

function Header() {
  return (
    <div>
      {/* <S.HeaderContainer>
        <S.MainWrapper>
          <S.HeaderLogo>
            <S.Box>
              <div>로고</div>
            </S.Box>
          </S.HeaderLogo>
          <div className="header-search-wrapper">
            <S.SearchBar type="text" placeholder="검색어를 입력하세요." />
          </div>
        </S.MainWrapper>
        <S.HeaderCharacter>
          <S.Box>캐릭터</S.Box>
        </S.HeaderCharacter>
      </S.HeaderContainer> */}

      <S.MenuContainer>
        <S.MenuWrapper>
          {/* 반복문으로 처리 예정 */}
          <S.MenuItem>홈</S.MenuItem>
          <S.MenuItem>공모전</S.MenuItem>
          <S.MenuItem>대외활동</S.MenuItem>
          <S.MenuItem>자격증</S.MenuItem>
          <S.MenuItem>어학</S.MenuItem>
          <S.MenuItem>인턴</S.MenuItem>
          <S.MenuItem>취준job담</S.MenuItem>
        </S.MenuWrapper>
      </S.MenuContainer>

      <S.MenuDetailContainer>
        <div className="details">
          <p>공모분야</p>
          <p>시상규모</p>
          <p>수상혜택</p>
          <p>지원대상</p>
        </div>
      </S.MenuDetailContainer>
    </div>
  );
}

export default Header;
