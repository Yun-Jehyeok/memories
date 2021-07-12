import React from "react";
import Header from "../../components/navbar/navbar";
import History from "../../components/history/history";
import { Body } from "./styles";

const Main = () => {
  return (
    <>
      <Body>
        <Header />
        <History />
      </Body>
    </>
  );
};

export default Main;
