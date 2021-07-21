import React, { useState, useEffect } from 'react'
import Header from '../../components/navbar/navbar'
import History from '../../components/history/history'
import Pagenation from '../../components/pagenation/pagenation'
import Involved from '../../components/involved/involved'
import { Body } from './styles'
import useScript from '../../hooks/useScript'
import Intro from 'src/components/intro/intro'
import Exhibition from 'src/components/exhibition'
import $ from 'jquery'

const Main: React.FC = () => {
  useScript(`
    var winScrollTop;
    var section = $('.page_section');
    var offsetTop = [];
    var offsetBottom = [];
    
    $('#intro_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#intro_area').offset().top}, 210);
    });
    $('#history_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#history_area').offset().top}, 210);
    });
    $('#involved_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#involved_area').offset().top}, 210);
    });
    $('#exhibition_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#exhibition_area').offset().top}, 210);
    });

    function setValue() {
      winScrollTop = $(window).scrollTop(); // 스크롤 화면 길이 구하기!!
      section.each(function(index, obj) { //모든 섹션의 top, bottom값 구하기
        offsetTop[index] = $(obj).offset().top;
        offsetBottom[index] = $(obj).offset().top + $(obj).height();
      });
      console.log(offsetTop);
      console.log(offsetBottom);
    }

    function checkInSection(){
      if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop ){
        sectionActive(0);
        menuBarActive(0);
      } else if (winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop ){
        sectionActive(1);
        menuBarActive(1);
      } else if (winScrollTop >= offsetTop[2] && offsetBottom[2] > winScrollTop ){
        sectionActive(2);
        menuBarActive(0);
      } else if (winScrollTop >= offsetTop[3] && offsetBottom[3] > winScrollTop ){
        sectionActive(3);
        menuBarActive(0);
      }
    }

    function sectionActive(index){ //섹션의 인덱스값을 받음
      console.log('section'+index);
      listActive(index);
    }

    function listActive(index){
      var list = document.querySelectorAll('.nav_list > a');
      for (var i = 0; i < list.length; i++){
        list[i].style.color = '#A4A4A4';
      }
      list[index].style.color = '#3498DA';
    }

    function menuBarActive(index){
      var Bar = document.getElementById('Menu_bar');
      if (index === 0){
        Bar.style.color = '#000000';
      } else {
        Bar.style.color = '#FFFFFF';
      }
    }
    function init() {
      setValue();
      checkInSection();
    }

    $(window).scroll(function() {
      winScrollTop = $(window).scrollTop();
      checkInSection();
    })

    $(function() {
      init();
    })
  `)

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
  )
}

export default Main
