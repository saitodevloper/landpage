$(document).ready(function() {
    setup()
});

function setup() {
    $.ajaxSetup({
        headers: {'Authorization': 'Client-ID e3654eff8ad41e699d4e79fa65f322677c2363a468baf72db0a9a913a29d30e6'}
    });
}


function queryImage(search, callback) {
    $.get(`https://api.unsplash.com/search/photos?query=${search}`, function(json) {
        callback(json);
    });
}