
(function() {
    const ytplayer = document.getElementById('ytplayer');
    if ( window.innerWidth < 600  ) {
        ytplayer.width = '320';
        ytplayer.height = '180';
    } else if (window.innerWidth > 601 && window.innerWidth < 800) {
        ytplayer.width = '580';
        ytplayer.height = '326';
    } else {
        ytplayer.width = '800';
        ytplayer.height = '450';
    }
})();