import React from 'react';

const useScript = () => {
  const script = document.createElement('script');

  script.innerHTML = `
    var winScrollTop; // 스크롤바의 높이를 담을 변수 선언
    var section = $('.page_section');
    var sectionMain = $('#intro_area');
    var sectionSnd = $('#history_area');

    var sectionList = [];
    var offsetTop = [];
    var offsetBottom = [];
    var header = $('.navBar');
    
    var sectionIsMoving = [false, false, false, false]; //섹션이 이동중인지 확인하는 변수
    
    $('#intro_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#intro_area').offset().top}, 200);
    });
    $('#history_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#history_area').offset().top}, 200);
    });
    $('#involved_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#involved_area').offset().top}, 200);
    });
    $('#exhibition_area_btn').on('click', function(){
      $('html, body').animate({scrollTop: $('#exhibition_area').offset().top}, 200);
    });

    function setValue() {
      winScrollTop = $(window).scrollTop(); // 스크롤 화면 길이 구하기!!
      section.each(function(index, obj) { //모든 섹션의 top, bottom값 구하기
        offsetTop[index] = $(obj).offset().top;
        offsetBottom[index] = $(obj).offset().top + $(obj).height();
        sectionList[index] = $(obj)
      });
    }

    function checkInSection(){
      setValue();
      if(winScrollTop >= offsetTop[0] && offsetBottom[0] >= winScrollTop ){
        sectionActive(0);
        if(!sectionIsMoving[0]){ // 애니메이션이 진행중인지 체크 // 애니메이션이 진행되고 있지 않을때 실행
          if (winScrollTop > offsetTop[0]){
            sectionIsMoving[0] = true;
            moveStartRender(0); // 섹션 이동을 처리해주는 함수
          }
        }
        console.log(header.hasClass('active'));
      } else if (winScrollTop >= offsetTop[1] && offsetBottom[1] >= winScrollTop ){
        sectionActive(1);
        if(!sectionIsMoving[0]){
          if (winScrollTop < offsetBottom[1]){
            sectionIsMoving[0] = true;
            moveReverse(0);
          }
        }
      } else if (winScrollTop >= offsetTop[2] && offsetBottom[2] >= winScrollTop ){
        sectionActive(2);
      } else if (winScrollTop >= offsetTop[3] && offsetBottom[3] >= winScrollTop ){
        sectionActive(3);
      }
      if ( winScrollTop >= offsetBottom[0]){
        activeCheck(0);
      } 
    }

    function activeCheck(index) { //새로고침 시 페이지가 아래에서 시작할 경우를 대비
      header.addClass('active');
      sectionList[index].addClass('active');
    }
    
    function moveStartRender(index){
      if (!header.hasClass('active')){
        header.addClass('active'); // 스크롤의 방향을 확인하기 위해서
        sectionList[index].addClass('active');
        sectionList[index+1].addClass('active');
        console.log('애니메이션'+ sectionIsMoving[0]);

        $('html').stop(true).animate({
          scrollTop: offsetBottom[index] +1 //IE 반복 버그 때문에
        }, 500, function(){
          sectionIsMoving[index] = false;
        });
        console.log('애니메이션'+ sectionIsMoving[0]);
      } 
    }
    function moveReverse(index){
      if (header.hasClass('active')){
        header.removeClass('active');
        sectionList[index].removeClass('active');
        sectionList[index+1].removeClass('active');

        $('html').stop(true).animate({
          scrollTop: offsetTop[index]
        }, 500, function(){
          sectionIsMoving = false;
        });
      }
    }

    function sectionActive(index){ //섹션의 인덱스값을 받음
      listActive(index);
      menuBarActive(index);
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
      checkInSection();
    }

    $(window).scroll(function() {
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
