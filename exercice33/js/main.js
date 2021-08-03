

$(function () {
    $(".btn-success").click(function () {
        
       $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/france',
            success: function(data, statuts, response) {
                
                $("#country").append(data[0].name);
                $("#capital").append(data[0].capital);
            }
                
        })
    })
})
