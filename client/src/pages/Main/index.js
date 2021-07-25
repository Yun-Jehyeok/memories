import React, { useState, useEffect } from 'react';
import Header from '../../components/navbar/navbar';
import History from '../../components/history/history';
import Pagenation from '../../components/pagenation/pagenation';
import Involved from '../../components/involved/involved';
import { Body } from './styles';
import useScript from '../../assets/animation/main';
import Intro from 'src/components/intro/intro';
import Exhibition from 'src/components/exhibition';

const Main = () => {
  useScript();

  return (
    <>
      <Body>
        <Header />
        <Intro />
        <History />
        <Exhibition />
        <Involved />
        <Pagenation />
      </Body>
    </>
  );
};

export default Main;
