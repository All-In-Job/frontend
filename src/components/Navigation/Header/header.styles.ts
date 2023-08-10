import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
   background-color: white;
`;

export const MainWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 60px;
  height: 81px;
  color: orange;
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
  align-items: center;
  min-width: 50px;
  height: 100%;
  font-weight: bold;
  cursor: pointer;
`;

export const DetailItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start; 
`;

export const MenuDetailContainer = styled.div`
  position: absolute; 
  top: 100%;
  display: flex;
  gap: 70px;
  width: 100%;
  background-color: lightskyblue;
`;

export const MenuContainer = styled.nav`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const MenuWrapper = styled.ul`
position: relative;
  display: flex;
  align-items: center;
  gap: 70px;
  width: 100%;
  height: 81px;
`;

export const Box = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
`;