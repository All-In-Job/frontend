import { useState } from "react";
import * as S from "./header.styles.ts";

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <S.MenuContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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

      <S.MenuDetailContainer show={isHovered}>
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