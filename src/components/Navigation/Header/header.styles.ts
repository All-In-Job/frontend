import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  padding-top: 20px;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: inline-block;
  margin-right: 30px;
  padding: 20px 100px;
`;

export const SearchBar = styled.input`
  width: 350px;
  height: 59px;
`;

export const HeaderCharacter = styled.div`
  padding: 20px 25px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  width: 80%;
  height: 81px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  min-width: 50px;
  height: 100%;
  cursor: pointer;
`;

export const MenuDetailContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  background-color: lightskyblue;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0 0 0;

  &:hover {
    ${MenuDetailContainer} {
      display: flex;
    }
  }
`;

export const Box = styled.div`
  background-color: lightgrey;
  border: 1px solid black;
`;
