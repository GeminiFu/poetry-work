function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'oHC1230OpOg', // YouTube 影片ID
        width: 560, // 播放器寬度 (px)
        height: 316, // 播放器高度 (px)
        playerVars: {
            autoplay: 1, // 在讀取時自動播放影片
            controls: 0, // 在播放器顯示暫停／播放按鈕
            showinfo: 0, // 隱藏影片標題
            modestbranding: 0, // 隱藏YouTube Logo
            loop: 0, // 讓影片循環播放
            fs: 0, // 隱藏全螢幕按鈕
            cc_load_policty: 0, // 隱藏字幕
            iv_load_policy: 3, // 隱藏影片註解
            autohide: 0 // 當播放影片時隱藏影片控制列
        },
        events: {
            onReady: function (e) {
                e.target.mute();
            }
        }
    });
}

console.log("測試")
