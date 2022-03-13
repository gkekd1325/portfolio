$( document ).ready( function() {
    var Offset = $( "nav" ).offset(); /* .menu의 위치파악 */
$( window ).scroll( function() {    /* 스크롤 발생 시 함수실행 */
    if ( $( document ).scrollTop() > Offset.top ) { /* 스크롤이 메뉴위치보다 아래라면 */
    $( "nav" ).addClass( "Fixed" ); /*menu클래스를 추가하여 고정 */
    $("nav").fadeIn();
        }
    else {
    $( "nav" ).removeClass( "Fixed" );/* 그렇지 않으면 제거 */
    $("nav").fadeOut();
     }
    });
});
