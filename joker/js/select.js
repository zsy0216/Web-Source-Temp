$(function () {
    /**********************第一个下拉框点击事件*/
    $(".select ").click(function () {
        if (($(".select1").css("display")) == "none") {
            $(".select").css("border-bottom", "none");
            $(".select1").css("display", "block");
        } else if (($(".select1").css("display")) == "block") {
            $(".select1").css("display", "none");
            $(".select").css("border-bottom", "1px solid black");
        }

    });
    /*****************第二个下拉框点击事件*****************/
    $(".select-two ").click(function () {
        if($(".select-two1").css("display") == "none"){
            $(".select-two1").css("display", "block");
            $(".select-two").css("border-bottom", "none");
        }else {
            $(".select-two1").css("display", "none");
            $(".select-two").css("border-bottom", "1px solid black");
        }
    });
    /*****************第三个下拉框点击事件*****************/
    $(".select-three ").click(function () {
        if($(".select-three1").css("display") == "none"){
            $(".select-three1").css("display", "block");
            $(".select-three").css("border-bottom", "none");
        }else {
            $(".select-three1").css("display", "none");
            $(".select-three").css("border-bottom", "1px solid black");
        }
    });
    /*****************第四个下拉框点击事件*****************/
    $(".select-four").click(function () {
        if($(".select-four1").css("display") == "none"){
            $(".select-four1").css("display", "block");
            $(".select-four").css("border-bottom", "none");
        }else {
            $(".select-four1").css("display", "none");
            $(".select-four").css("border-bottom", "1px solid black");
        }
    });
    //循环遍历所有的span并且获取值
    // function fun() {
    //
    // }
    // fun();
    // alert(str1);
    //下拉框的点击事件
    $(".select1-div").click(function () {
        var text = $(this).children("input").val();
        // event.stopPropagation();
        event.preventDefault();
        if ($(this).children("input").attr("checked")) {
            // alert(true);
            $(this).children("input").attr("checked", false);
            // alert($(".show").find("span").length);
            var a = $(".show span");
            str1 = [];
            for (var i = 0; i < a.length; i++) {
                if (a[i].innerHTML == text) {
                    alert(a[i].innerHTML == text);
                    $(a[i]).parent().remove();
                    $(a[i]).parent("div").children("i").remove();
                }
            }
        }
        if (!($(this).children("input").attr("checked"))) {
            // var a=$(".show span");
            // // var aSpan = document.getElementsByTagName("span");
            // str1=[];
            // alert(a.length);
            $(this).children("input").attr("checked", true);
            if ($(this).children("input").attr("checked")) {
                $(".show").css("display", "block");
                $("#clear").before("<div class=\"show-span-style\"\n" +
                    "                     style=\"background: #337ab7;width: 84px; float: left; line-height: 30px; text-align: center; height:30px; margin: 10px; color: #ffffff\">\n" +
                    "                    <span class=\"label label-primary\">"+text+"</span><i>X</i>\n" +
                    "                </div>");
            }
        }
        if ($(".show").find("span").length > 0) {
            $("#clear").css("display", "block");
        }
    });
    //事件委托-----X图标点击事件
    $(".show").delegate(".show-span-style>i", "click", function () {
        //如果点击了X，则清除该i所在的父元素
        $(this).parent().remove();
        if ($(".show").find("span").length == 0) {
            $("#clear").css("display", "none");
        }
    });

    //清空按钮的点击事件
    $(".show #clear").click(function () {
        $(".show").empty();
        // $(".select1").css("display", "none");
        // $(".select").css("border-bottom", "1px solid black");
        // $(".select-two1").css("display", "none");
        // $(".select-two").css("border-bottom", "1px solid black");
        // $(".select-three1").css("display", "none");
        // $(".select-three").css("border-bottom", "1px solid black");
        // $(".select-four1").css("display", "none");
        // $(".select-four").css("border-bottom", "1px solid black");
        // window.location.reload();
    });
    // console.log($("#clear").siblings());

    if ($("#clear").siblings() === null) {
        $("#clear").remove();
    }
    // $(".show").delegate(".clear-one", "click", function () {
    //     $(this).parent().remove();
    // });
});