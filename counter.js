window.addEventListener("scroll", onScroll);

function onScroll() {

    $('.bloc').each(function () {
        var bloc = $(this);
        var offset = 100;
        var scroll = $(window).scrollTop();
        var top = bloc.offset().top;
        var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var startAt = top - vh;
        var blocHeight = bloc.height();
        var counter = scroll - startAt;
        var paint = (counter * 100) / (blocHeight + offset);

        bloc.find('span').css('height', paint + '%');
    });

}