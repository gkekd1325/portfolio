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
var bar=document.querySelector(".bar");
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
    if(scrollY>=1500){
        bar.style.transform="translateX(10%)";
        notice.style.transform="translateX(10%)";
    }
    else{
        bar.style.transform="translateX(-50%)";
        notice.style.transform="translateX(100%)";
    }
}
/* 스크립트에 클래스를 추가(on이라는 클래스가 추가되었을떄 실행) 하고 스타일시트로 실행 어떻?*/
