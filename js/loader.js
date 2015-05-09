$(document).ready(function(){
    $("#content").load("home.html");

    $("a").click(function() {
    var page = $(this).attr("href");
    $("#content").load(page);
    return false;
    });
});