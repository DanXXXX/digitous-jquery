$(function () {
    $(".btn-success").click(function () {
       $("#square").animate({
           width: '500px'
            }, 10000, function () {
                console.log("animation terminée");
            })
    })
})