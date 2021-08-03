$(function () {
    $(".btn-success").click(function () {
       $("#text").animate({
           fontSize: '50px'
            }, 10000, function () {
                console.log("animation terminée");
            })
    })
})