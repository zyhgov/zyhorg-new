$(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) { // 向下滚动
            $('.navbar').css('top', '-80px');
        } else { // 向上滚动
            $('.navbar').css('top', '0');
        }
        lastScrollTop = st;
    });
});

$(document).ready(function() {
    var boxOffset = $('.box').offset().top;
    var sidebar = $('.sidebar');
    var offsetTop = 100; // 设置距离页面顶部的距离，单位为像素

    // 初始化第一个锚点为活动状态
    $('.anchor-link:first').addClass('active');

    // 监听滚动事件
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();

        // 获取所有锚点链接
        $('.anchor-link').each(function() {
            var link = $(this);
            var targetId = link.attr('href');
            var targetElement = $(targetId);
            var targetOffset = targetElement.offset().top;

            // 检查滚动位置是否在目标元素上方
            if (scrollTop >= targetOffset - offsetTop && scrollTop <= targetOffset + targetElement.height()) {
                // 如果在目标元素范围内，设置为活动状态
                $('.anchor-link').removeClass('active');
                link.addClass('active');
            }
        });

        if ($(this).scrollTop() >= boxOffset) {
            // 如果滚动到 .box 的位置，则显示 sidebar
            sidebar.show();
        } else {
            // 否则隐藏 sidebar
            sidebar.hide();
        }
    });

    // 绑定点击事件处理函数
    $('.anchor-link').on('click', function(e) {
        e.preventDefault(); // 阻止默认行为

        var targetId = $(this).attr('href');
        var targetElement = $(targetId);

        // 计算目标元素距离顶部的距离并加上偏移量
        var targetOffset = targetElement.offset().top - offsetTop;

        // 使用 animate 方法实现平滑滚动
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500); // 滚动动画持续时间为500毫秒

        // 移除其他链接的活动状态并设置当前链接为活动状态
        $('.anchor-link').removeClass('active');
        $(this).addClass('active');
    });
});


$(document).ready(function() {
    var zoomedImage = $('#zoomable-image');
    var isExpanded = false;

    zoomedImage.on('click', function() {
        if (!isExpanded) {
            // 如果未放大，则放大图片
            zoomedImage.addClass('expanded');
            isExpanded = true;
        } else {
            // 如果已放大，则还原图片
            zoomedImage.removeClass('expanded');
            isExpanded = false;
        }
    });
});