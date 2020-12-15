$(document).ready( function (){
    $.getJSON("http://webtechcars.herokuapp.com/api/cars", function(carslist){
        
        console.log(carslist);
        for (let i=0; i<carslist.length;  i++){
            var sor=document.createElement("tr");
            var name = document.createElement("td");
            var consumption = document.createElement("td");
            var color = document.createElement("td");
            var manufacturer = document.createElement("td");
            var avaiable = document.createElement("td")
            var year = document.createElement("td");
            var horsepower = document.createElement("td");
            
            name.innerHTML = carslist[i].name;
            consumption.innerHTML = carslist[i].consumption;
            color.innerHTML = carslist[i].color;
            manufacturer.innerHTML = carslist[i].manufacturer;
            avaiable.innerHTML = carslist[i].avaiable;
            year.innerHTML = carslist[i].year;
            horsepower.innerHTML = carslist[i].horsepower;

            sor.appendChild(name);
            sor.appendChild(consumption);
            sor.appendChild(color);
            sor.appendChild(manufacturer);
            sor.appendChild(avaiable)
            sor.appendChild(year);
            sor.appendChild(horsepower);

           
            $("#cartable").append(sor);
        }
    })
});