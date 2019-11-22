$(function () {
    //监听问号图片的鼠标事件
    $("#span-img").mouseover(function () {
        $("#span-img-mouseover").css("display","block");
    });
    $("#span-img").mouseout(function () {
        $("#span-img-mouseover").css("display","none");
    });
   $('input[type=radio][name=check-box]').change(function () {
        if (this.value=='guo-qi-checkbox'){
            $("#si-qi-content").css("display","none");
           $("#guo-qi-content").css("display","block");
        }else if(this.value=='si-qi-checkbox'){
            $("#guo-qi-content").css("display","none");
            $("#si-qi-content").css("display","block");
        }
   });
});