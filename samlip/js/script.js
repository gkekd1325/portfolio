var arr=[
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg"
]
var i=0;
var left =document.querySelector(".left");
var right=document.querySelector(".right");
var slide=document.querySelector("#slide");

left.addEventListener("click", reverse);
right.addEventListener("click", move);
window.addEventListener("load", interVal);

function move(){
    // ani();
    if(i==4){
        i=-1; /* 더해서 0이 되어야 한다. */
    }
    i++;
    slide.style.transition="0.6s";
    slide.style.opacity="0";
    slide.style.background="url("+arr[i]+")";
    slide.style.backgroundSize="cover";
    slide.style.opacity="1";
}
function reverse(){
    if(i==0){
        i=5;
    }
    i--;
    slide.style.transition="0.6s";
    slide.style.opacity="0";
    slide.style.background="url("+arr[i]+")";
    slide.style.backgroundSize="cover";
    slide.style.opacity="1";
    
}

function interVal(){
    setInterval(move, 6000); /* 6초마다 move함수 실행 */
}

$(".menu li").hover(
    function(){
        $(this).children(".s_menu").stop().fadeIn().css("display","flex","space-around");
        
    },
    function(){
        $(this).children(".s_menu").stop().fadeOut().css("display","flex");
    }
);
$(".sns ul").hover(
    function(){
        $(this).children(".bw").hide();
        $(this).children(".color").show();
    },
    function(){
        $(this).children(".bw").show();
        $(this).children(".color").hide();
        
    }
);
/* notice tap */
$(".news li:eq(0) a").click(
    function(){
        $(".news li a").removeClass("on");
        $(".news li a:eq(0)").addClass("on");
        $(".insta").hide();
        $(".data").show();
    }
);
$(".news li:eq(1) a").click(
    function(){
        $(".news li a").removeClass("on");
        $(".news li a:eq(1)").addClass("on");
        $(".data").hide();
        $(".insta").show();
    }
);