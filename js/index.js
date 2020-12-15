$(document).ready(function () {
    $("#content").load("lorem.html")
    $.each($(".menuItem"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            $("#content").load($(this).attr("href"));
        });
    });
});