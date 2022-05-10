window.addEventListener("load", trans);
window.addEventListener("scroll", scroll)

function trans(){
    $(".head li").addClass("on");
    $(".logo").addClass("on");
}
var original=document.querySelector(".original");
var onion=document.querySelector(".onion");
function scroll(){
    console.log(scrollY);
    if(scrollY>=390){
        onion.style.transform="translateX(0)";
        original.style.transform="translateX(0)";
    }
    else{
        onion.style.transform="translateX(100%)";
        original.style.transform="translateX(-100%)";
    }
    if(innerWidth>=800){
        if(scrollY>=2700){
            onion.style.transform="translateX(0)";
            original.style.transform="translateX(0)";
        }
        else{
            onion.style.transform="translateX(100%)";
            original.style.transform="translateX(-100%)";
        }
    }
}
