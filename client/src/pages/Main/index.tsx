import React from "react";
import Header from "../../components/navbar/navbar";
import History from "../../components/history/history";
import Pagenation from "../../components/pagenation/pagenation";
import Involved from "../../components/involved/involved";
import { Body } from "./styles";
import useScript from "../../hooks/useScript";
import Intro from "src/components/intro/intro";

const Main: React.FC = () => {
  useScript(`
    var winScrollTop;
    var section = $('.page_section');
    var offsetTop = [];
    var offsetBottom = [];

    function setValue() {
      winScrollTop = $(window).scrollTop(); // 스크롤 화면 길이 구하기!!
      section.each(function(index, obj) { //모든 섹션의 top, bottom값 구하기
        offsetTop[index] = $(obj).offset().top;
        offsetBottom[index] = $(obj).offset().top + $(obj).height();
      });
    }

    function checkInSection(){
      if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop ){
        sectionActive(0);
      } else if (winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop ){
        sectionActive(1);
      }
    }

    function sectionActive(index){ //섹션의 인덱스값을 받음
      console.log('section'+index);
      listActive(index);
    }

    function listActive(index){
      var list = document.querySelectorAll('.nav_list > a');
      for (var i = 0; i < list.length; i++){
        list[i].style.color = '#E0E0E0';
      }
      list[index].style.color = '#3498DA';
    }


    function init() {
        setValue();
        checkInSection();
    }

    $(window).scroll(function() {
        winScrollTop = $(window).scrollTop();
    })

    $(function() {
        init();
    })
  `);

  return (
    <>
      <Body>
        <Intro />
        <Header />
        <History />
        <Involved />
        <Pagenation />
      </Body>
    </>
  );
};

export default Main;
