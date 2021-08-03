$(function () {
    $(".btn-success").click(function () {
       $("#square").animate({
           textAlign: 'right'
            }, 100, function () {
                console.log("animation terminée");
            })
    })
})