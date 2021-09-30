var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: 780,
        width: 1280,
        videoId: "bhuYIr1J1zc",
        playerVars: {
            'autoplay': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

function onPlayerReady(e) {
    player.mute();
    player.loadVideoById({
        videoId: "bhuYIr1J1zc",
        startSeconds: 7
    })
    stopOnTen(e);
}

function onPlayerStateChange(e) {
}

function stopOnTen(e) {
    let current,
        state = player.getPlayerState();
    if (state === 1) {
        let id = setInterval(function () {
            current = e.target.getCurrentTime()

            if (Math.ceil(current) >= 11) {
                player.pauseVideo();
                clearInterval(id);
            }
        }, 1000)
    } else {
        setTimeout(() => {
            stopOnTen(e)
        }, 10)
    }
}