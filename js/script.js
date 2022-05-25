// $( document ).ready( function() {
//     var Offset = $( "nav" ).offset(); /* .menu의 위치파악 */
// $( window ).scroll( function() {    /* 스크롤 발생 시 함수실행 */
//     if ( $( document ).scrollTop() > Offset.top ) { /* 스크롤이 메뉴위치보다 아래라면 */
//     $( "nav" ).addClass( "Fixed" ); /*menu클래스를 추가하여 고정 */
//     $("nav").fadeIn();
//         }
//     else {
//     $( "nav" ).removeClass( "Fixed" );/* 그렇지 않으면 제거 */
//     $("nav").fadeOut();
//      }
//     });
// });

/* 스크롤 애니메이션 */
var d=document.querySelector(".me");
window.addEventListener("wheel", ent);
var publishing=document.querySelector(".publishing");
var design=document.querySelector(".design");
var notice=document.querySelector(".notice");
var nav=document.querySelector("nav");

function ent(){
    console.log(scrollY);
    if(scrollY<300){
        nav.style.transition=".3s";
        nav.style.opacity="0";
    }
    else{
        nav.style.transition=".3s";
        nav.style.opacity="1";
    }
    if(scrollY>=600){
        d.style.transition = ".6s";
        d.style.opacity="1";
    }
    else{
        d.style.transition = ".6s";
        d.style.opacity="0";
    }
    if(scrollY>=1200){
        
        $(".publishing").addClass("on");
        $(".design").addClass("on");
        $(".notice").addClass("on");
       // publishing.style.transform="translateX(10%)";
        // design.style.transform="translateX(15%)";
        // notice.style.transform="translateX(10%)";
    }
    else{
        // publishing.style.transform="translateX(-150%)";
        $(".publishing").removeClass("on");
        // design.style.transform="translateX(-150%)"
        $(".design").removeClass("on");
        // notice.style.transform="translateX(100%)";
        $(".notice").removeClass("on");
    }
}
/* 스크립트에 클래스를 추가(on이라는 클래스가 추가되었을떄 실행) 하고 스타일시트로 실행 어떻?*/
var mobile = document.querySelector("#section3");
mobile.addEventListener("click", lang);
function lang(){
    $(".publishing").addClass("on");
    $(".design").addClass("on");
    $(".notice").addClass("on");
}

var offset;
var sectionCounter=0;
var $menu =$("nav a");
$menu.click(
    function(){
        console.log(111);
        sectionCounter = $(this).attr('class'); 
        offset =innerHeight*sectionCounter;
        $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    }
)

