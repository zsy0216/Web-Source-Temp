$(document).ready(function() {
    // 学生效果开始
    $(".student1").mouseover(function () {
        if ($(".student2").has(".active")) {
            $(".student2").removeClass("active");
        }
        if ($(".student3").has(".active")) {
            $(".student3").removeClass("active");
        }
        if ($(".student4").has(".active")) {
            $(".student4").removeClass("active");
        }
        if ($(".student5").has(".active")) {
            $(".student5").removeClass("active");
        }
        $(".student1").addClass("active");
    });
    $(".student2").mouseover(function () {
        if ($(".student1").has(".active")) {
            $(".student1").removeClass("active");
        }
        if ($(".student3").has(".active")) {
            $(".student3").removeClass("active");
        }
        if ($(".student4").has(".active")) {
            $(".student4").removeClass("active");
        }
        if ($(".student5").has(".active")) {
            $(".student5").removeClass("active");
        }
        $(".student2").addClass("active");
    });
    $(".student3").mouseover(function () {
        if ($(".student1").has(".active")) {
            $(".student1").removeClass("active");
        }
        if ($(".student2").has(".active")) {
            $(".student2").removeClass("active");
        }
        if ($(".student4").has(".active")) {
            $(".student4").removeClass("active");
        }
        if ($(".student5").has(".active")) {
            $(".student5").removeClass("active");
        }
        $(".student3").addClass("active");
    });
    $(".student4").mouseover(function () {
        if ($(".student1").has(".active")) {
            $(".student1").removeClass("active");
        }
        if ($(".student2").has(".active")) {
            $(".student2").removeClass("active");
        }
        if ($(".student3").has(".active")) {
            $(".student3").removeClass("active");
        }
        if ($(".student5").has(".active")) {
            $(".student5").removeClass("active");
        }
        $(".student4").addClass("active");
    });
    $(".student5").mouseover(function () {
        if ($(".student1").has(".active")) {
            $(".student1").removeClass("active");
        }
        if ($(".student2").has(".active")) {
            $(".student2").removeClass("active");
        }
        if ($(".student3").has(".active")) {
            $(".student3").removeClass("active");
        }
        if ($(".student4").has(".active")) {
            $(".student4").removeClass("active");
        }
        $(".student5").addClass("active");
    });
});