$(document).ready(function() {
    $(".open-modal").click(e => { 
        $(".modal").css('display', 'block')
        $(".modal .content").addClass('visible');
    });
    $(".close-modal").click(e => { 
        $(".modal").css('display', 'none') 
        $(".modal .content").removeClass("visible");
    });
    initView();
});

function initView() {
    queryImage('Brazil', function(json) {
        $("#place1").attr('src', json.results[0].urls.regular);
        $("#place2").attr('src', json.results[1].urls.regular);
        $("#place3").attr('src', json.results[2].urls.regular);
        $("#place4").attr('src', json.results[6].urls.regular);
    });
}

function gup( name, url ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}