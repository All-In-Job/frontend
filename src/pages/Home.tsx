import Header from "../components/Navigation/Header/Header";
import * as S from "./home.style";
import { Carousel } from "../components/Carousel/Carousel";
import { ContestMenuBar } from "../components/ContestMenuBar/ContestMenuBar";
import { CardList } from "../components/CardList/CardList";
import Login from "./login/login";
import FindID from "./findID/FindID";

export const Home = () => {
  return (
    <>
      <Header />
      <FindID />
      <Login />
      <S.Layout>
        <S.Main>
          <Carousel />
          <ContestMenuBar />
          <CardList />
        </S.Main>
        <S.Sidebar>sidebar</S.Sidebar>
      </S.Layout>
    </>
  );
};
