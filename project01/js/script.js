$(".tap li:eq(0) a").click(
    function(){
        $(".tap li a").removeClass("on");
        $(this).addClass("on");
        $(".tapimg").show();
        $(".two").hide();
        $(".three").hide();
    }
);
$(".tap li:eq(1) a").click(
    function(){
        $(".tap li a").removeClass("on");
        $(this).addClass("on");
        $(".tapimg").hide();
        $(".two").show();
        $(".three").hide();
    }
);
$(".tap li:eq(2) a").click(
    function(){
        $(".tap li a").removeClass("on");
        $(this).addClass("on");
        $(".tapimg").hide();
        $(".two").hide();
        $(".three").show();
    }
);