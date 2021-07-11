import React from "react";
import Header from "../../components/navbar";
import History from "../../components/history";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
`;

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
