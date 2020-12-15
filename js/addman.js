$(document).ready(function(){
    $("#addmanufacturers").submit(function (event) {
        event.preventDefault();
        var formdata = $(this).serializeArray();
        var mandata = {
            name: formdata[0].value,
            country: formdata[1].value,
            founded: formdata[2].value,
        };
        console.log(mandata);
        $.ajax({
            type: "POST",
            url: "https://webtechcars.herokuapp.com/api/manufacturers",
            dataType: "application/json",
            data: mandata,
            success: function () {
                alert("Manufacturer added!");
            },
        });
    });
})
