$(document).ready(function() {
    $("#includeFooter").load("../footer.html");
    $("#includeNav").load("../nav.html");
    $.get("head.html", function(data){
	    $(data).appendTo("head");
    });
    $(".nav-link").click(function(e) {
        e.preventDefault();
        var link = $(this);
        var href = link.attr("href");
        $("html,body").animate({
            scrollTop: $(href).offset().top - 80
        }, 500);
        link.closest(".navbar").find(".navbar-toggle:not(.collapsed)").click();
    });

});
