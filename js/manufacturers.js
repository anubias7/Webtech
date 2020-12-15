$(document).ready(function () {
    $.getJSON(
        "https://webtechcars.herokuapp.com/api/manufacturers",
        function (manufacturers) {
            var table = document.getElementById("autotable");

            for (let i = 0; i < manufacturers.length; i++) {
                var tr = document.createElement("tr");
                var nametd = document.createElement("td");
                var countrytd = document.createElement("td");
                var foundedtd = document.createElement("td");

                nametd.innerHTML = manufacturers[i].name;
                countrytd.innerHTML = manufacturers[i].country;
                foundedtd.innerHTML = manufacturers[i].founded;

                tr.appendChild(nametd);
                tr.appendChild(countrytd);
                tr.appendChild(foundedtd);
                table.appendChild(tr);
            }
        }
    );
});