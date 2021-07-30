import React, { useState, useEffect } from 'react';
import Header from '../../components/navbar/navbar';
import History from '../../components/history/history';
import Pagenation from '../../components/pagenation/pagenation';
import Involved from '../../components/involved/involved';
import { Body } from './styles';
import useScript from '../../assets/animation/main';
import Intro from 'src/components/intro/intro';
import Exhibition from 'src/components/exhibition';
import Contact from '../Contact';

const Main = () => {
  useScript();

  var menuBar = document.querySelector('.menuBar');
  let scrollTop = 0;

  document.addEventListener('scroll', function () {
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  });

  const onClickMenuBar = () => {
    if (!menuBar.classList.contains('on')) {
      menuBar.style.top = scrollTop;
      menuBar.classList.add('on');
    } else {
      menuBar.style.top = `${scrollTop - window.innerHeight}px`;
      menuBar.classList.remove('on');
    }
  };

  return (
    <>
      <Body>
        <Contact />
        <Header onClickMenuBar={onClickMenuBar} />
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
