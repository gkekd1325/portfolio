window.addEventListener('wheel', scrollAni);


var offset;
var sectionCounter=0;
var wheelCounter=0;

function scrollAni(e){
    // console.log(e.innerHeight);
    console.log(e.wheelDelta);
    wheelCounter++;
    var go = wheelCounter%5;
    if(e.wheelDelta>0 ){
        if(go == 0 && sectionCounter>0){
            console.log("위로");
            sectionCounter--;
        }
        
    }else{
        if(go==0 && sectionCounter<5){ /* sectionCounter변수로 누적되지않게 함, 인덱스 값으로 계산 */
            console.log("아래로");
            sectionCounter++;
        }
        
    }
    offset = innerHeight*sectionCounter;

    $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
    console.log(scrollY);
    
    // 스크롤 막기 시작
    $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    $('#element').on('scroll touchmove mousewheel', function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
    });
    //스크롤 막기 끝
}
