var a=document.querySelector(".night");
var b=document.querySelector("body");
var c=document.querySelector("section");
// var d=document.querySelector(".night img");
a.addEventListener("click", one);
function one(){
    if(b.style.background=="white"){
        b.style.background="black";
        b.style.color="white";
        c.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_960_720.jpg')";
        document.getElementById("nightimg").src="img/sun.png";
    }
    else{
        b.style.background="white";
        b.style.color="black";
        c.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_960_720.jpg')";
        document.getElementById("nightimg").src="img/moon.png";
    }
}