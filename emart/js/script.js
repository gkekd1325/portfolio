$(".under a").hover(
    function(){
        $(this).children(".hover_img").show();
        $(this).children(".imgage").hide();
    },
    function(){
        $(this).children(".hover_img").hide();
        $(this).children(".imgage").show();
    }
);

var left=document.querySelector(".left_button img");
var right=document.querySelector(".right_button img");


var imgWidth = document.querySelector("#slide img").width;
var gallMove = document.querySelector("#slide ul");
var gallZone = document.querySelector("#slide");
// var arrow = document.querySelectorAll(".arrow");

var i=0;
var aniStartPoint;
var aniEndPoint;
var slideon = "on";
var start;

window.addEventListener('load',interVal); /* 문서 실행 시 interval 함수를 실행 */
function interVal(){
    start = setInterval(move, 2000); /* 2초마다 move함수 실행 */
}

left.addEventListener("click", reverse);
function reverse(){
    
    if(slideon == "on"){

        slideon = "off";

        if(i == 0) i = 5;

        aniStartPoint = -imgWidth * i;
        i--;
        aniEndPoint = -imgWidth * i;

        goAni(); /* goani() 호출 */
    }
    console.log(111);
    // i++;
    // var counter = -100*i;
    // slide.style.marginLeft=counter +"%";
    // if(slide.style.marginLeft=="400%"){
    //     slide.style.marginLeft="0%";
    // }
}
right.addEventListener("click", move);
function move(){
    if(slideon == "on"){

        slideon = "off";

        if(i == 5) i = 0;

        aniStartPoint = -imgWidth * i; /* 전역변수=이미지넓이*카운트 */
        i++;
        aniEndPoint = -imgWidth * i;

        goAni();
    }
    // // i--;
    // // var counter = 100*i;
    // // slide.style.marginLeft=counter +"%";
    // // if(slide.style.transform="translateX(400%)"){
    // //     slide.style.transform="translateX(0%)";
    // }
}
function goAni(){
    var ani = gallMove.animate([ /* UL의 애니메이션 */
        {
            transform:"translateX(" + aniStartPoint + "px)"
        },{
            transform:"translateX(" + aniEndPoint + "px)"
        }
    ],1000);

    ani.addEventListener('finish',function(){ /* 변수 ani가 끝나면 */
        gallMove.style.transform = "translateX(" + aniEndPoint + "px)";
        slideon = "on"; 
    });
}