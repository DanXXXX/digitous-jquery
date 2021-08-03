$(function () {
    $(".btn-success").click(function () {
       $("#bg").animate({
           marginright:  100px
            }, 100, function () {
                console.log("animation terminée");
            })
    })
})