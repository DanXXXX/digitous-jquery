$(function () {
    $(".btn-success").click(function () {
        $("input[type='button']").click(function() {
            $("#formulaire")[0].reset();
        });
    })
})