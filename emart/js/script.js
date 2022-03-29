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