$(function () {
    $(".BBS-border .BBS .room-BBS-content .room-content-details .a1").click(function () {
        //获取当前点击下p元素没有展开之前的高度
        var height1 = $(this).parent().children("p").outerHeight(true);
        // alert("当前点击下p元素没有展开之前的高度" + height1);
        $(this).parent().children("p").removeClass("p1");
        $(this).parent().children("p").addClass("p2");
        //全文a标签隐藏，收起a标签显示
        $(this).css("display","none");
        $(this).parent().children(".a2").css("display","block");
        // $(".BBS-border .BBS .room-BBS-content .room-content-details .a1").css("display","none");
        // $(".BBS-border .BBS .room-BBS-content .room-content-details .a2").css("display","block");
        var height2=$(this).parent().children("p").outerHeight(true);
        // alert("当前点击下p元素展开后的高度"+height2);
        var height3=height2-height1;//展开前与展开后的高度差，即多出来需要增加的部分
        //当前点击下父元素details的原始高度
        var height4= $(this).parent("room-content-details").outerHeight(true);
        //为当前点击下父元素details设置的新高度
        // $(this).parent("room-content-details").css("height",height4+height3+"px");
        //当前点击下父元素的父元素room-BBS-content的原始高度为
        var height6=$(this).parent().parent().outerHeight(true);
        //为当前点击下父元素的父元素room-BBS-content设置的新高度为
        // $(this).parent().parent().css("height",height6+height3+"px");
        //当前点击下父元素的父元素的父元素BBS的原始高度为
        var height5=$(this).parent().parent().parent().outerHeight(true);
        //为当前点击下父元素的父元素的父元素BBS设置的新高度为
        // $(this).parent().parent().parent().css("height",height5+height3+"px");
        //收起标签a的点击事件
        $(this).parent().children(".a2").click(function () {
           $(this).css("display","none");
           $(this).parent().children(".a1").css("display","block");
           $(this).parent().children("p").removeClass("p2");
           $(this).parent().children("p").addClass("p1");
            // $(this).parent("room-content-details").css("height",height4+"px");
            // $(this).parent().parent().css("height",height6+"px");
            // $(this).parent().parent().parent().css("height",height5+"px");
        });
    });
    //评论图标的点击事件
    $(".BBS-border .BBS .room-BBS-content .room-content-footer .glyphicon-align-left").click(function () {
       if( $(this).parent().children(".dian-zan1").is(":hidden")){
           $(this).parent().children(".dian-zan1").fadeIn(500);
       }else{
           $(this).parent().children(".dian-zan1").fadeOut(500);
       }
    });
    $(".BBS-border .BBS .room-BBS-content .room-content-footer .dian-zan1 .dian-zan").click(function () {
        alert("谢谢您赞了我！");
        $(this).parent().css("display","none");
    });
    $(".BBS-border .BBS .room-BBS-content .room-content-footer .dian-zan1 .ping-lun").click(function () {
      var he1=  $(this).parent().parent().parent().parent().outerHeight(true);
      // alert(he1);
     /* if(he1===350){
          $(this).parent().parent().parent().parent().css("height",he1+100+"px");
      }else{
          $(this).parent().parent().parent().parent().css("height","350px");
      }*/
        if($(this).parent().parent().next().css("display")=='none'){
            // alert(1);
            $(this).parent().parent().next().css("display","block");
        }else{
            // alert(2)
            $(this).parent().parent().next().css("display","none");
        }
    });
    //发表按钮点击事件
    $(".BBS-border .BBS .room-BBS-content .ping-lun-content .fa-biao").click(function () {
        // alert("发表成功！！！");
        $(this).parent().css("display","none");
        // $(this).parent().parent().parent().css("height","310px");
        $(this).parent().prev().children(".dian-zan1").css("display","none");
    });

    $("#liuxuexuzhi").click(function () {

        $(".content-1").css("display", "block");
        $(".c-publish").css("display", "none");
        $(".luntan").css("display","none");

        $("#liuxuexuzhi").addClass("btn-primary");
        $("#xuexiaoluntan").removeClass("btn-primary");
    });


    //学校论坛按钮点击事件
    $(".school-lun-tan").click(function () {
        $(".content-1").css("display", "none");
        $(".c-publish").css("display", "none");
        $(".luntan").css("display","block");

        // $(".content-2>.sidebar-2").css("display", "block");
        // $(".publish-btn-relative").css("display", "block");

        $("#liuxuexuzhi").removeClass("btn-primary");
        $("#xuexiaoluntan").addClass("btn-primary");

        $(".shen-qing").fadeIn(1500);
        $(".bian-min").fadeIn(2500);
        $(".fang-wu").fadeIn(3500);
        //按钮初始化
        $(".shen-qing").css("color","#05cbf9");
        $(".shen-qing").css("border-left","2px solid #05cbf9");
        $(".bian-min").css("color","black");
        $(".bian-min").css("border","none");
        $(".fang-wu").css("color","black");
        $(".fang-wu").css("border","none");
    });
    $(".shen-qing").click(function () {
        // $("#BBS-border-1").css("display","block");
        $("#BBS-border-1").fadeIn(200);
        $("#BBS-border-2").css("display","none");
        // $("#BBS-border-2").fadeOut();
        $("#BBS-border-3").css("display","none");
        $(".bian-min").css("color","black");
        $(".bian-min").css("border","none");
        $(".shen-qing").css("color","#05cbf9");
        $(".shen-qing").css("border-left","2px solid #05cbf9");
        $(".fang-wu").css("color","black");
        $(".fang-wu").css("border","none");
    });
    $(".bian-min").click(function () {
        $("#BBS-border-1").css("display","none");
        // $("#BBS-border-2").css("display","block");
        $("#BBS-border-2").fadeIn(200);
        $("#BBS-border-3").css("display","none");
        $(".bian-min").css("color","#05cbf9");
        $(".bian-min").css("border-left","2px solid #05cbf9");
        $(".shen-qing").css("color","black");
        $(".shen-qing").css("border","none");
        $(".fang-wu").css("color","black");
        $(".fang-wu").css("border","none");
    });
    $(".fang-wu").click(function () {
        $("#BBS-border-1").css("display","none");
        $("#BBS-border-2").css("display","none");
        $("#BBS-border-3").fadeIn(200);
        // $("#BBS-border-3").css("display","block");
        $(".bian-min").css("color","black");
        $(".bian-min").css("border","none");
        $(".shen-qing").css("color","black");
        $(".shen-qing").css("border","none");
        $(".fang-wu").css("color","#05cbf9");
        $(".fang-wu").css("border-left","2px solid #05cbf9");
    });

    $(".btn-publish>button").click(function () {
        $(".nav-btn").css("display", "none");
        $(".publish-btn-relative").css("display", "none");
        $(".lun-tan-button").css("display", "none");
        $(".BBS-border").css("display", "none");
        $(".c-publish").css("display", "block");
    })

});