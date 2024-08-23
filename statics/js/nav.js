window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    // 如果菜单已展开则收起，反之则展开
    if (navLinks.classList.contains('expanded')) {
        navLinks.classList.remove('expanded');
        navLinks.style.animationName = 'slideUp'; // 应用向上收起的动画
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        navLinks.classList.add('expanded');
        navLinks.style.animationName = 'slideDown'; // 应用向下展开的动画
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

// 如果需要，你可以在这里添加更多针对移动设备的交互逻辑

// document.addEventListener('DOMContentLoaded', function() {
//     var video1 = document.getElementById('video1');

//     video1.removeAttribute('loop'); 

//     video1.addEventListener('ended', function() {
//         video1.style.display = 'none'; // 隐藏视频，背景图片将自然显示
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var video2 = document.getElementById('video2');

//     // 确保视频只播放一次，不循环
//     video2.removeAttribute('loop'); 

//     // 监听视频播放结束事件
//     video2.addEventListener('ended', function() {
//         video2.style.display = 'none'; // 隐藏视频，背景图片将自然显示
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var video1 = document.getElementById('video1');

    // 尝试播放视频以检查是否支持自动播放
    var promise = video1.play();
    
    if (promise !== undefined) {
        promise.catch(function(error) {
            // 自动播放失败，可以在这里添加备选方案，比如等待用户交互
            video1.controls = true; // 显示控件让用户手动播放
            console.log('自动播放失败:', error);
        });
    } else {
        // 自动播放成功或不支持Promise形式的play()
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video1');
    var videoSrc = 'https://olympics.com/orgassets/paris-2024/videos/paris-2024-background-720.m3u8';

    if(Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if(video.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari 和其他原生支持 HLS 的浏览器
        video.src = videoSrc;
        video.addEventListener('canplay', function() {
            video.play();
        });
    } else {
        console.error('此浏览器不支持HLS流播放.');
    }
});