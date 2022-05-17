var moon=document.querySelector(".night");
var body=document.querySelector("body");
var section=document.querySelector("section");
var sub_title=document.querySelector(".box");
var table=document.querySelector("table");

moon.addEventListener("click", one);
function one(){
    if(body.style.background=="white"){
        body.style.background="black";
        body.style.color="white";
        section.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2017/09/18/15/38/moon-2762111_960_720.jpg')";
        section.style.transition="0.6s";
        document.getElementById("nightimg").src="img/sun.png";
        sub_title.style.color="blue";
        table.style.color="#333";
    }
    else{
        body.style.background="white";
        body.style.color="black";
        section.style.backgroundImage="URL('https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319_960_720.jpg')";
        section.style.transition="0.6s";
        document.getElementById("nightimg").src="img/moon.png";
        sub_title.style.color="white";
    }
}

