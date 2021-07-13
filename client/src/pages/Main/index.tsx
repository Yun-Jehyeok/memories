import React from "react";
import Header from "../../components/navbar/navbar";
import History from "../../components/history/history";
import Pagenation from "../../components/pagenation/pagenation";
import { Body } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Body>
        <Header />
        <History />
        <Pagenation />
      </Body>
    </>
  );
};

export default Main;
