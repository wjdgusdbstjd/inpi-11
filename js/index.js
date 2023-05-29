/*main-img script*/

let currentNum = 0;
let totalNum = imgSet.childElementCount; //새로 코드를 사용할때마다 일일히 숫자를 바꾸지않아도 가능

console.log(totalNum);
let imgInit = function () {
  if (currentNum != 0) {
    //currentNum이 0이 아닐때만 실행
    $("#img" + currentNum).fadeIn();
  }
};

setInterval(function () {
  imgInit();
  if (currentNum == totalNum) {
    //만약에 currentNum이 4이면
    currentNum = 1; //1로 다시 되돌아가고
  } else {
    currentNum++; //4가 아닐때만 ++을 한다
  }

  $("#img" + currentNum).fadeOut();

  let clear = setInterval(function () {
    //clear라는 이름에 setInterval함수 부여
    document
      .getElementById("imgSet")
      .prepend(document.getElementById("img" + currentNum)); //imgSet에 prepend - 이미지 1이 마지막 장이 됐을 때 다시 맨 앞으로 옮겨준다
    clearInterval(clear); //clear해주지않으면 1초마다 계속 실행된다
  }, 1000); //1000은 1초 뒤에 동작을 실행하라는 의미
}, 3000);

//==========================================================================================================================

//==========================================================================================================================

//video script //잠시 막아놓기
//var video = document.getElementById('my-video').querySelector('video'); // 동영상 엘리먼트 가져오기
//var video_content = document.getElementById('video_content'); // container1 엘리먼트 가져오기
//var container2 = document.getElementById('container2'); // container2 엘리먼트 가져오기

//video.addEventListener('ended', function () { // 동영상이 끝나면 실행되는 함수
//setTimeout(function () { // 1~2초 뒤에 실행되도록 setTimeout을 이용하여 처리
//container2.scrollIntoView({ behavior: "smooth", block: "start" }); // container2로 자연스럽게 스크롤 이동
//}, 500); // 2초 뒤에 스크롤 이동
//});

//==========================================================================================================================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30, //슬라이드간의 간격설정
  pagination: {
      el: ".swiper-pagination", //페이징요소의 위치 지정
      clickable: true,//페이징 요소를 클릭가능하도록 설정
  },
});

//swiper-slide-첫번째

var secondSwiper = new Swiper("#swiper-container1", {
  //Swiper 객체를 생성하고 swiper-container라는 클래스값을 가진 요소에 적용시킨다.
  speed: 1200, //새로 추가  //슬라이드의 전환 속도를 700으로 설정한다.
  effect: "fade", // 페이드 효과를 사용한다. 슬라이드가 넘어 갈때마다 페이드 효과로 넘어간다.
  loop: false, //루프모드를 비활성화 한다.
  direction: "vertical", //슬라이드가 넘어가는 방향을 수직으로 설정한다.
  slidesPerView: 1, //한번에 보여지는 슬라이드의 개수를 1개로 설정한다.
  mousewheel: true, //마우스 휠 이벤트를 활성화한다.
  pagination: {
    el: ".swiper-container__pagination", //페이지네이션 요소를 swiper-container__pagination이라는 클래스값을 가진 요소로 설정한다.
    clickable: true, //페이지네이션 클릭이 가능하도록 한다.
  },
  on: {
    // 여기서부터 이벤트 할당
    slideChange: function () {
      //슬라이드 변경시 실행되는 함수
      setTimeout(function () {
        secondSwiper.params.mousewheel.releaseOnEdges = false; //일정 시간 후에 마우스 휠 이벤트가 가장자리에서 해제되지 않도록 설정한다.
      });
    },
    reachEnd: function () {
      //슬라이드가 마지막 슬라이드에 도달했을 때 실행되는 함수
      //reachEnd 마지막 슬라이드 도달이벤트
      setTimeout(function () {
        //일정시간 후에 동작을 실행하는 함수
        secondSwiper.params.mousewheel.releaseOnEdges = true; //일정 시간 후에는 마우스 휠 이벤트가 가장자리에서 자유롭게 움직일 수 있도록 한다.
      }, 500);
    },
    reachBeginning: function () {
      //슬라이드가 첫번째 슬라이드에 도달했을 때 실행되는 함수
      //첫번째 슬라이드 도달
      setTimeout(function () {
        secondSwiper.params.mousewheel.releaseOnEdges = true; //일정 시간 후에는 마우스 휠 이벤트가 가장자리에서 자유롭게 움직일
      }, 500);
    },
    transitionStart: function () {
      //슬라이드 전환 시작 시 실행되는 함수
      var currentSlideHeight = $(".swiper-slide-active").height(); //현재 활성화된 슬라이드의 높이, 윈도우 높이, 컨테이너의 상단 위치를 계산해 슬라이드를 중앙에 배치한다.
      var windowHeight = $(window).height();
      var containerTop = (windowHeight - currentSlideHeight) / 2;
      $(".swiper-wrapper").css(
        "transform",
        "translate3d(0, " + containerTop + "px, 0)"
      );
    },
  },
});

//swiper-slide-두번째

var mySwiper = new Swiper("#swiper-container2", {
  //Swiper 객체를 생성하고 swiper-container라는 클래스값을 가진 요소에 적용시킨다.
  speed: 1000, //새로 추가  //슬라이드의 전환 속도를 700으로 설정한다.
  effect: "fade", // 페이드 효과를 사용한다. 슬라이드가 넘어 갈때마다 페이드 효과로 넘어간다.
  loop: false, //루프모드를 비활성화 한다.
  direction: "vertical", //슬라이드가 넘어가는 방향을 수직으로 설정한다.
  slidesPerView: 1, //한번에 보여지는 슬라이드의 개수를 1개로 설정한다.
  mousewheel: true, //마우스 휠 이벤트를 활성화한다.
  pagination: {
    el: ".swiper-container__pagination", //페이지네이션 요소를 swiper-container__pagination이라는 클래스값을 가진 요소로 설정한다.
    clickable: true, //페이지네이션 클릭이 가능하도록 한다.
  },
  on: {
    // 여기서부터 이벤트 할당
    slideChange: function () {
      //슬라이드 변경시 실행되는 함수
      setTimeout(function () {
        mySwiper.params.mousewheel.releaseOnEdges = false; //일정 시간 후에 마우스 휠 이벤트가 가장자리에서 해제되지 않도록 설정한다.
      });
    },
    reachEnd: function () {
      //슬라이드가 마지막 슬라이드에 도달했을 때 실행되는 함수
      //reachEnd 마지막 슬라이드 도달이벤트
      setTimeout(function () {
        //일정시간 후에 동작을 실행하는 함수
        mySwiper.params.mousewheel.releaseOnEdges = true; //일정 시간 후에는 마우스 휠 이벤트가 가장자리에서 자유롭게 움직일 수 있도록 한다.
      }, 500);
    },
    reachBeginning: function () {
      //슬라이드가 첫번째 슬라이드에 도달했을 때 실행되는 함수
      //첫번째 슬라이드 도달
      setTimeout(function () {
        mySwiper.params.mousewheel.releaseOnEdges = true; //일정 시간 후에는 마우스 휠 이벤트가 가장자리에서 자유롭게 움직일
      }, 500);
    },
    transitionStart: function () {
      //슬라이드 전환 시작 시 실행되는 함수
      var currentSlideHeight = $(".swiper-slide-active").height(); //현재 활성화된 슬라이드의 높이, 윈도우 높이, 컨테이너의 상단 위치를 계산해 슬라이드를 중앙에 배치한다.
      var windowHeight = $(window).height();
      var containerTop = (windowHeight - currentSlideHeight) / 2;
      $(".swiper-wrapper").css(
        "transform",
        "translate3d(0, " + containerTop + "px, 0)"
      );
    },
  },
});

//==========================================================================================================================

//question-mark rotation

// 이미지 회전 키프레임 작동 코드 예시
// 이미지 회전 및 투명도 키프레임 작동 코드 예시
// const image = document.querySelector(".question-img"); // 회전 및 투명도 변화를 적용할 이미지 요소 선택

// 키프레임 정의
// const rotateKeyframes = [
//   { transform: "rotate(30deg)", opacity: 0 },
//   { transform: "rotate(90deg)", opacity: 1 },
// ];

// // 키프레임 애니메이션 속성 설정
// const rotateAnimationOptions = {
//   duration: 500, // 애니메이션 지속 시간 (밀리초)
//   iterations: 1, // 애니메이션 반복 횟수
//   fill: "forwards", // 애니메이션 종료 후 상태를 유지하도록 설정
// };

// // Intersection Observer 콜백 함수
// const intersectionCallback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // 이미지 컨테이너가 뷰포트에 진입하면 2초 후에 키프레임을 시작합니다.
//       setTimeout(() => {
//         image.animate(rotateKeyframes, rotateAnimationOptions);
//       }, 500);
//       observer.unobserve(entry.target); // 한 번만 작동하도록 Intersection Observer를 해제합니다.
//     }
//   });
// };

// // 이미지 컨테이너 요소를 선택합니다.
// const container = document.querySelector(".container5-content");

// // Intersection Observer의 옵션을 설정합니다.
// const options = {
//   root: null, // 뷰포트를 루트로 설정합니다.
//   rootMargin: "0px", // 뷰포트와의 간격을 설정합니다.
//   threshold: 0.5, // 이미지 컨테이너의 50% 이상이 뷰포트 안에 들어오면 콜백이 호출됩니다.
// };

// // Intersection Observer를 생성하고 이미지 컨테이너를 감시합니다.
// const observer = new IntersectionObserver(intersectionCallback, options);
// observer.observe(container);

//==========================================================================================================================

// container11 script

for (var i = 1; i <= 6; i++) {
  //console.log(i);
  document.getElementById("menu" + i).onmouseup = function () {
      menuInit();
      //console.log(i);
      //console.log(this.id.slice(0,1));
      //console.log(this.id.slice(2,3));
      //console.log(this.id.slice(4,5));
      document.getElementById("section" + this.id.slice(4, 5)).style.display =
          "block";
  };
}

var menuInit = function () {
  console.log("메뉴 초기화");
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
  document.getElementById("section5").style.display = "none";
  document.getElementById("section6").style.display = "none";
};

const menuItems = document.querySelectorAll("#flow_menu li"); //id값이 flow_menu인 콘텐츠에서 li(리스트)선택

menuItems.forEach((item) => {
  //각 리스트 아이템에 대한 이벤트 리스너 등록하기
  item.addEventListener("click", function () {
      menuItems.forEach((item) => {
          item.classList.remove("selected"); // 모든 메뉴 아이템의 배경색을 초기화한다.
      });
      this.classList.add("selected"); // 클릭한 메뉴 아이템의 배경색상을 변경한다.
  });
});