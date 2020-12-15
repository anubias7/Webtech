$(document).ready( function (){
    $.getJSON("http://webtechcars.herokuapp.com/api/manufacturers", function(manlist){
        
        //console.log(carslist);
        for (let i=0; i<manlist.length;  i++){
           var manoption = document.createElement("option");
           manoption.innerHTML = manlist[i].name;
           manoption.setAttribute("value", manlist[i].name);
           $("#manufacturerselect").append(manoption);
        }
    })
    
$("#addcar").submit(function (event) {
    event.preventDefault();
    var formdata = $(this).serializeArray();
    var cardata = {
        name: formdata[0].value,
        consumption: formdata[1].value,
        color: formdata[2].value,
        manufacturer: formdata[3].value,
        year: formdata[4].value,
        avaiable: formdata[5].value,
        horsepower: formdata[6].value,
    };
    //console.log(data);
    $.ajax({
        type: "POST",
        url: "https://webtechcars.herokuapp.com/api/cars",
        dataType: "application/json",
        data: cardata,
        headers: { "Access-Control-Allow-Origin": "*" },
        success: function () {
            alert("Manufacturer added!");
        },
    });
});
});

