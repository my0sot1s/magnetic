$(document).ready(function () {


    $("header nav ul li").click(function () {
        if ($(window).width() < 550) {
            $("#menu_icon").click();
        }
    });
    //mobile menu toggling
    $("#menu_icon").click(function () {
        $("header nav ul").toggleClass("show_menu");
        $("#menu_icon").toggleClass("close_menu");
        return false;
    });



    //Contact Page Map Centering
    var hw = $('header').width() + 50;
    var mw = $('#map').width();
    var wh = $(window).height();
    var ww = $(window).width();

    $('#map').css({
        "max-width": mw,
        "height": wh
    });

    if (ww > 1100) {
        $('#map').css({
            "margin-left": hw
        });
    }

    $('.main .work a .shower').click(function () {
        if ($('.main .work a .caption').css('opacity') === 0.5) {
            $('.main .work a .caption').css({ opacity: 0 });
        }
        else
            $('.main .work a .caption').css({ opacity: 0.5 });
    });




    //Tooltip
    $("a").mouseover(function () {

        var attr_title = $(this).attr("data-title");

        if (attr_title == undefined || attr_title == "") return false;

        $(this).after('<span class="tooltip"></span>');

        var tooltip = $(".tooltip");
        tooltip.append($(this).data('title'));


        var tipwidth = tooltip.outerWidth();
        var a_width = $(this).width();
        var a_hegiht = $(this).height() + 3 + 4;

        //if the tooltip width is smaller than the a/link/parent width
        if (tipwidth < a_width) {
            tipwidth = a_width;
            $('.tooltip').outerWidth(tipwidth);
        }

        var tipwidth = '-' + (tipwidth - a_width) / 2;
        $('.tooltip').css({
            'left': tipwidth + 'px',
            'bottom': a_hegiht + 'px'
        }).stop().animate({
            opacity: 1
        }, 200);


    });

    $("a").mouseout(function () {
        var tooltip = $(".tooltip");
        tooltip.remove();
    });


});





