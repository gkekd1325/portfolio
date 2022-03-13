var a=document.querySelector(".night");
var b=document.querySelector("body");
var c=document.querySelector("section");
var fo=document.querySelector(".box");

a.addEventListener("click", one);
function one(){
    if(b.style.background=="white"){
        b.style.background="black";
        b.style.color="white";
        c.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_960_720.jpg')";
        document.getElementById("nightimg").src="img/sun.png";
        fo.style.color="blue";
    }
    else{
        b.style.background="white";
        b.style.color="black";
        c.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_960_720.jpg')";
        document.getElementById("nightimg").src="img/moon.png";
        fo.style.color="white";
    }
}
var d=document.querySelector(".me");
window.addEventListener("wheel", ent);
function ent(){
    console.log(scrollY);
    if(scrollY>=600){
        // d.animate({opacity:"1"},1000);
        // d.style.opacity="0.8";
        d.style.opacity="1";
    }
    else{
        // d.animate({opacity:"0"}, 1000);
        d.style.opacity="0";
    }
}
