$(document).ready(function() {
    $("#c-p-2").css("display", "none");
    $("#c-p-3").css("display", "none");
    // 学生效果开始
    $(".school1").mouseover(function () {
        if ($(".school2").has(".active1")) {
            $(".school2").removeClass("active1");
        }
        if ($(".school3").has(".active1")) {
            $(".school3").removeClass("active1");
        }
        $(".school1").addClass("active1");
        $("#c-p-2").css("display", "none");
        $("#c-p-3").css("display", "none");
        $("#c-p-1").css("display", "");
        
    });
    $(".school2").mouseover(function () {
        if ($(".school1").has(".active1")) {
            $(".school1").removeClass("active1");
        }
        if ($(".school3").has(".active1")) {
            $(".school3").removeClass("active1");
        }
        $(".school2").addClass("active1");
        $("#c-p-1").css("display", "none");
        $("#c-p-3").css("display", "none");
        $("#c-p-2").css("display", "");
    });
    $(".school3").mouseover(function () {
        if ($(".school1").has(".active1")) {
            $(".school1").removeClass("active1");
        }
        if ($(".school2").has(".active1")) {
            $(".school2").removeClass("active1");
        }
        $(".school3").addClass("active1");
        $("#c-p-1").css("display", "none");
        $("#c-p-2").css("display", "none");
        $("#c-p-3").css("display", "");
    });
});