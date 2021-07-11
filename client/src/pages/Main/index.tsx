import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/login">로그인</Link>
    </div>
  );
=======
import Header from '../../components/navbar';
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
  )
>>>>>>> bb88ae61156203aa886cd16d66caecb578ed6c72
};

export default Main;
