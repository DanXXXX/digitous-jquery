$(function () {
    $(".btn-success").click(function () {
       $("#square").animate({
           left: 500
            }, 100, function () {
                console.log("animation terminée");
            })
    })
})