$(function () {
	let myvideo4 =  document.getElementById("gsfc-video");
	myvideo4.play();
    $("#swiper-vedio>.swiper-wrapper>.swiper-slide>img").click(function () {
        let src = $(this).attr("src");
        let myvideo =  document.getElementById("gsfc-video");
        $("#gsfc-video").css("display", "none");
        $("#gsfc-img").attr("src", src);
        $("#gsfc-img").css("display", "block");
        myvideo.pause();
    });

    /*阴影部分点击事件*/
    $("#swiper-vedio>.swiper-wrapper>.swiper-slide>.img-info").click(function () {
        let src = $(this).parent().children("img").attr("src");
        let myvideo =  document.getElementById("gsfc-video");
        $("#gsfc-video").css("display", "none");
        $("#gsfc-img").attr("src", src);
        $("#gsfc-img").css("display", "block");
        myvideo.pause();
    });


    $("#video-swiper .swiper-slide img").click(function () {
        let src = $(this).attr("video-src");
        $("#gsfc-img").css("display", "none");
        $("#gsfc-video").css("display", "block");
        $("#gsfc-video").attr("src", src);

    });

    $("#swiper-vedio-2>.swiper-wrapper>.swiper-slide>img").click(function () {
        let src = $(this).attr("src");
        let myvideo =  document.getElementById("zyjs-video");
        myvideo.pause();
        $("#zyjs-video").css("display", "none");
        $("#zyjs-img").attr("src", src);
        $("#zyjs-img").css("display", "block");

    });
     /*阴影部分点击事件*/
    $("#swiper-vedio-2>.swiper-wrapper>.swiper-slide>.img-info2").click(function () {
        let src = $(this).parent().children("img").attr("src");
        let myvideo =  document.getElementById("zyjs-video");
        myvideo.pause();
        $("#zyjs-video").css("display", "none");
        $("#zyjs-img").attr("src", src);
        $("#zyjs-img").css("display", "block");

    });




    $("#video-swiper-2 .swiper-slide img").click(function () {
        let src = $(this).attr("video-src");
        $("#zyjs-img").css("display", "none");
        $("#zyjs-video").css("display", "block");
        $("#zyjs-video").attr("src", src);

    });


    $(".info-detail>.heart>p>i").click(function () {
        if ($(this).css("color") == "rgb(255, 255, 255)") {
            $(this).css("color", "red");
            $("#top>.top-button i").css("color", "red");
        } else if ($(this).css("color") == "rgb(255, 0, 0)") {
            $(this).css("color", "white");
            $("#top>.top-button i").css("color", "#959595");
        }
    });

    $("#top>.top-button i").click(function () {
        if ($(this).css("color") == "rgb(149, 149, 149)") {
            $(this).css("color", "red");
            $(".info-detail>.heart>p>i").css("color", "red");
        } else if ($(this).css("color") == "rgb(255, 0, 0)") {
            $(this).css("color", "#959595");
            $(".info-detail>.heart>p>i").css("color", "white");
        }
    });



    $("#jieshao").css("color", "#fff");
    $("#jieshao").css("background", "#2d8acb");
    $("#youshi").css("background", "#fff");
    $("#wenda").css("background", "#fff");

    $(".gongsijieshao").css("display", "block");
    $(".hangyeyoushi").css("display", "none");
    // $(".mingqimingyou").css("display", "none");
    $(".youwenbida").css("display", "none");

    $("#jieshao").click(function () {

        $("#top4").css("display", "block");
        $("#top5").css("display", "none");
        // alert(1)
        $("#gsfc-img").css("display", "none");
        $("#gsfc-video").css("display", "block");
        let myvideo =  document.getElementById("zyjs-video");
        myvideo.pause();
        let myvideo1 =  document.getElementById("gsfc-video");
        myvideo1.play();


        $(".info-detail>.heart-1").css("display", "block");
        $(".info-detail>.heart-2").css("display", "none");
        $(".info-detail>.heart-3").css("display", "none");

        $("#top1").css("color", "#ffffff");
        $("#top1").css("background", "#2d8acb");
        $("#top2").css("color", "#000");
        $("#top2").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#top3").css("color", "#000");
        $("#top3").css("background", "#fff");

        $("#jieshao").css("color", "#ffffff");
        $("#jieshao").css("background", "#2d8acb");
        $("#youshi").css("color", "#000");
        $("#youshi").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#wenda").css("color", "#000");
        $("#wenda").css("background", "#fff");

        $("#jieshao").parent("li").addClass("active");
        $("#youshi").parent("li").removeClass("active");
        // $("#mingyou").parent("li").removeClass("active");
        $("#wenda").parent("li").removeClass("active");

        $(".gongsijieshao").css("display", "block");
        $(".hangyeyoushi").css("display", "none");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "none");
    });


    $("#youshi").click(function () {

        $("#top4").css("display", "none");
        $("#top5").css("display", "block");

        $("#zyjs-img").css("display", "none");
        $("#zyjs-video").css("display", "block");
        let myvideo =  document.getElementById("gsfc-video");
        myvideo.pause();
        let myvideo1 =  document.getElementById("zyjs-video");
        myvideo1.play();


        $(".info-detail>.heart-1").css("display", "none");
        $(".info-detail>.heart-2").css("display", "block");
        $(".info-detail>.heart-3").css("display", "none");

        $("#top1").css("color", "#000");
        $("#top1").css("background", "#fff");
        $("#top2").css("color", "#ffffff");
        $("#top2").css("background", "#2d8acb");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#top3").css("color", "#000");
        $("#top3").css("background", "#fff");

        $("#jieshao").css("color", "#000");
        $("#jieshao").css("background", "#fff");
        $("#youshi").css("color", "#ffffff");
        $("#youshi").css("background", "#2d8acb");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#wenda").css("color", "#000");
        $("#wenda").css("background", "#fff");

        $("#jieshao").parent("li").removeClass("active");
        $("#youshi").parent("li").addClass("active");
        // $("#mingyou").parent("li").removeClass("active");
        $("#wenda").parent("li").removeClass("active");

        $(".gongsijieshao").css("display", "none");
        $(".hangyeyoushi").css("display", "block");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "none");
    });

    /*    $("#mingyou").click(function () {
            $("#jieshao").css("color", "#000");
            $("#youshi").css("color", "#000");
            $("#mingyou").css("color", "#ffffff");
            $("#wenda").css("color", "#000");

            $("#jieshao").parent("li").removeClass("active");
            $("#youshi").parent("li").removeClass("active");
            $("#mingyou").parent("li").addClass("active");
            $("#wenda").parent("li").removeClass("active");

            $(".vedio-play").css("display", "none");
            $(".hangyeyoushi").css("display", "none");
            $(".mingqimingyou").css("display", "block");
            $(".youwenbida").css("display", "none");
        });*/

    $("#wenda").click(function () {
        let myvideo =  document.getElementById("gsfc-video");
        myvideo.pause();
        let myvideo1 =  document.getElementById("zyjs-video");
        myvideo1.pause();

        // $("#liuxuexuzhi").addClass("btn-primary");

        // $(".content-2>.sidebar-2").css("display", "none");
        // $(".publish-btn-relative").css("display", "none");

        $("#top4").css("display", "block");
        $("#top5").css("display", "none");

        $(".info-detail>.heart-1").css("display", "none");
        $(".info-detail>.heart-2").css("display", "none");
        $(".info-detail>.heart-3").css("display", "block");

        $("#top1").css("color", "#000");
        $("#top1").css("background", "#fff");
        $("#top2").css("color", "#000");
        $("#top2").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        $("#top3").css("color", "#ffffff");
        $("#top3").css("background", "#2d8acb");

        $("#jieshao").css("color", "#000");
        $("#jieshao").css("background", "#fff");
        $("#youshi").css("color", "#000");
        $("#youshi").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        $("#wenda").css("color", "#ffffff");
        $("#wenda").css("background", "#2d8acb");

        $("#jieshao").parent("li").removeClass("active");
        $("#youshi").parent("li").removeClass("active");
        // $("#mingyou").parent("li").removeClass("active");
        $("#wenda").parent("li").addClass("active");

        $(".gongsijieshao").css("display", "none");
        $(".hangyeyoushi").css("display", "none");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "block");
    });

    //滚动一定距离后，头部的js
    //初始状态
    $("#top1").css("background", "#2d8acb");
    $("#top1").css("color","#fff");
    $("#top2").css("background", "#fff");
    $("#top3").css("background", "#fff");


    //点击公司介绍按钮
    $("#top1").click(function () {
        $("#top4").css("display", "block");
        $("#top5").css("display", "none");
        // alert(1)
        $("#gsfc-img").css("display", "none");
        $("#gsfc-video").css("display", "block");
        let myvideo =  document.getElementById("zyjs-video");
        myvideo.pause();

        $(".info-detail>.heart-1").css("display", "block");
        $(".info-detail>.heart-2").css("display", "none");
        $(".info-detail>.heart-3").css("display", "none");

        $("#top1").css("color", "#ffffff");
        $("#top1").css("background", "#2d8acb");
        $("#top2").css("color", "#000");
        $("#top2").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#top3").css("color", "#000");
        $("#top3").css("background", "#fff");
        $("#jieshao").css("color", "#ffffff");
        $("#jieshao").css("background", "#2d8acb");
        $("#youshi").css("color", "#000");
        $("#youshi").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#wenda").css("color", "#000");
        $("#wenda").css("background", "#fff");

        // $("#jieshao").parent("li").addClass("active");
        // $("#youshi").parent("li").removeClass("active");
        // // $("#mingyou").parent("li").removeClass("active");
        // $("#wenda").parent("li").removeClass("active");

        $(".gongsijieshao").css("display", "block");
        $(".hangyeyoushi").css("display", "none");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "none");
    });


    //点击专业优势按钮
    $("#top2").click(function () {

        $("#top4").css("display", "none");
        $("#top5").css("display", "block");
        $("#zyjs-img").css("display", "none");
        $("#zyjs-video").css("display", "block");
        let myvideo =  document.getElementById("gsfc-video");
        myvideo.pause();


        $(".info-detail>.heart-1").css("display", "none");
        $(".info-detail>.heart-2").css("display", "block");
        $(".info-detail>.heart-3").css("display", "none");

        $("#top1").css("color", "#000");
        $("#top1").css("background", "#fff");
        $("#top2").css("color", "#ffffff");
        $("#top2").css("background", "#2d8acb");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#top3").css("color", "#000");
        $("#top3").css("background", "#fff");
        $("#jieshao").css("color", "#000");
        $("#jieshao").css("background", "#fff");
        $("#youshi").css("color", "#ffffff");
        $("#youshi").css("background", "#2d8acb");
        // $("#mingyou").css("color", "#000");
        // $("#mingyou").css("background", "#fff");
        $("#wenda").css("color", "#000");
        $("#wenda").css("background", "#fff");

        // $("#jieshao").parent("li").removeClass("active");
        // $("#youshi").parent("li").addClass("active");
        // // $("#mingyou").parent("li").removeClass("active");
        // $("#wenda").parent("li").removeClass("active");

        $(".gongsijieshao").css("display", "none");
        $(".hangyeyoushi").css("display", "block");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "none");
    });

    //点击你问我答按钮
    $("#top3").click(function () {
        $("#top4").css("display", "block");
        $("#top5").css("display", "none");
        $(".info-detail>.heart-1").css("display", "none");
        $(".info-detail>.heart-2").css("display", "none");
        $(".info-detail>.heart-3").css("display", "block");

        $("#jieshao").css("color", "#000");
        $("#jieshao").css("background", "#fff");
        $("#youshi").css("color", "#000");
        $("#youshi").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        $("#wenda").css("color", "#ffffff");
        $("#wenda").css("background", "#2d8acb");
        $("#top1").css("color", "#000");
        $("#top1").css("background", "#fff");
        $("#top2").css("color", "#000");
        $("#top2").css("background", "#fff");
        // $("#mingyou").css("color", "#000");
        $("#top3").css("color", "#ffffff");
        $("#top3").css("background", "#2d8acb");

        // $("#jieshao").parent("li").removeClass("active");
        // $("#youshi").parent("li").removeClass("active");
        // // $("#mingyou").parent("li").removeClass("active");
        // $("#wenda").parent("li").addClass("active");

        $(".gongsijieshao").css("display", "none");
        $(".hangyeyoushi").css("display", "none");
        // $(".mingqimingyou").css("display", "none");
        $(".youwenbida").css("display", "block");
    });
    //监听滚动条滑动距离
    window.addEventListener('scroll',function () {
        let leth=$("body,html").scrollTop();
        if(leth>430){
            $("#top").css("display","block");
        }
        else{
            $("#top").css("display","none");
        }
    });

   // let myvideo5 =  document.getElementById("gsfc-video");
   // myvideo5.play();
   /*視頻下方圖片的mousehover事件*/
//    $("#swiper-vedio img").hover(function(){
// 	   $(this).CSS("background","black");
// 	 });
});