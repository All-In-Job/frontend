import Header from "../components/Navigation/Header/Header";
import * as S from "./home.style";
import { Carousel } from "../components/Carousel/Carousel";
import { ContestMenuBar } from "../components/ContestMenuBar/ContestMenuBar";
import { CardList } from "../components/CardList/CardList";
import {Outlet, useOutlet} from "react-router-dom";
import Aside from "../components/Aside/Aside";

export const Home = () => {
    const outlet = useOutlet();

    return (
    <>
      <Header />
      {/*<FindID />*/}x
        {outlet ? <Outlet /> : <S.Layout>
        <S.Main>
          <Carousel />
          <ContestMenuBar />
          <CardList />
        </S.Main>
        <S.Sidebar>
            <Aside />
        </S.Sidebar>
      </S.Layout>}
    </>
  );
};
