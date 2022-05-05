window.addEventListener("load", trans);
window.addEventListener("scroll", scroll)

function trans(){
    $(".head li").addClass("on");
    $(".logo").addClass("on");
}
function scroll(){
    console.log(scrollY);
}
