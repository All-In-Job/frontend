import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: fixed;
  top: 0;
  z-index: 1002;
  background-color: white;
  padding: 0 20px;
  border: 1px solid #e1e2e4;
`;

export const MenuContainer = styled.nav`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1002;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const MainWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  color: #fd6b36;
  font-size: 30px;
  font-weight: bold;
  white-space: nowrap;
  margin-right: 40px;
  cursor: pointer;
`;

export const SearchBar = styled.input`
  width: 350px;
  height: 59px;
`;

export const HeaderCharacter = styled.div`
  padding: 20px 25px;
`;

export const MenuItem = styled.li`
  display: flex;
  flex: none;
  align-items: center;
  width: 125px;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const CharactorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97px;
  height: 67px;
  border: 1px solid #707070;
  background-color: lightgray;
`;

export const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  font-weight: bold;
`;

export const HoverMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 250px;
  background-color: white;
  z-index: 1001;
`;

export const MenuDetailContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  padding-bottom: 40px;
`;

export const MenuDetailWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  /* gap: 10px; */
  margin-left: 20px;
`;

export const divisionLine = styled.div`
  width: 100vw;
  height: 1px;
  background-color: #f0f0f0;
  margin-bottom: 30px;
`;

export const MenuWrapper = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  /* gap: 10px; */
`;

export const Box = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
`;

export const ContainerBox = styled.div`
  height: 70px;
`;
