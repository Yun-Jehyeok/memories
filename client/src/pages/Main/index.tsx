import React from "react";
import Header from "../../components/navbar/navbar";
import History from "../../components/history/history";
import Pagenation from "../../components/pagenation/pagenation";
import Involved from "../../components/involved/involved";
import { Body } from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Body>
        <Header />
        <History />
        <Involved />
        <Pagenation />
      </Body>
    </>
  );
};

export default Main;
