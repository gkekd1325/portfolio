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
var slide=document.querySelector("#slide ul");
var i=0;
left.addEventListener("click", reverse);
function reverse(){
    console.log(111);
    i++;
    var counter = -100*i;
    slide.style.marginLeft=counter +"%";
    if(slide.style.transform="translateX(-400%)"){
        slide.style.transform="translateX(0%)";
    }
}
right.addEventListener("click", move);
function move(){
    i--;
    var counter = 100*i;
    slide.style.marginLeft=counter +"%";
    if(slide.style.transform="translateX(400%)"){
        slide.style.transform="translateX(0%)";
    }
}