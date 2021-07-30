import React from 'react';

const useScript = () => {
  const script = document.createElement('script');

  script.innerHTML = `
  var winScrollTop;
    var section = $('.page_section');
    var offsetTop = [];
    var offsetBottom = [];
    var navbar = $('.navBar');
    
    $('#intro_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#intro_area').offset().top}, 250);
    });
    $('#history_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#history_area').offset().top}, 250);
    });
    $('#involved_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#involved_area').offset().top}, 250);
    });
    $('#exhibition_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#exhibition_area').offset().top}, 250);
    });

    function setValue() {
      winScrollTop = $(window).scrollTop(); // 스크롤 화면 길이 구하기!!
      section.each(function(index, obj) { //모든 섹션의 top, bottom값 구하기
        offsetTop[index] = $(obj).offset().top;
        offsetBottom[index] = $(obj).offset().top + $(obj).height();
      });
      offsetBottom[4] = section.eq(0).offset().top + section.eq(0).height() - navbar.eq(0).height();
      offsetTop[4] = section.eq(1).offset().top - navbar.eq(0).height();
    }

    function checkInSection(){
      if(winScrollTop >= offsetTop[0] && offsetBottom[0] > winScrollTop ){
        sectionActive(0);
        menuBarActive(0);
        if (offsetBottom[4] < winScrollTop){
          menuBarActive(1);
        }
      } else if (winScrollTop >= offsetTop[1] && offsetBottom[1] > winScrollTop ){
        sectionActive(1);
        menuBarActive(1);
      } else if (winScrollTop >= offsetTop[2] && offsetBottom[2] > winScrollTop ){
        sectionActive(2);
        menuBarActive(2);
      } else if (winScrollTop >= offsetTop[3] && offsetBottom[3] > winScrollTop ){
        sectionActive(3);
        menuBarActive(3);
      }
    }

    function sectionActive(index){ //섹션의 인덱스값을 받음
      listActive(index);
    }

    function listActive(index){
      var list = document.querySelectorAll('.nav_list > a');
      for (var i = 0; i < list.length; i++){
        list[i].style.color = '#A4A4A4';
      }
      list[index].style.color = '#FF0000';
    }

    function menuBarActive(index){
      var Bar = document.getElementById('Menu_bar');
      if (index === 1){
        Bar.style.color = '#FFFFFF';
      } else {
        Bar.style.color = '#000000';
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
    })`;

  script.async = true;

  const element = () => {
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  };
  setInterval(element, 500);
};

export default useScript;
