$(function () {
    //--
    {
        $('.navA').click(function () {
            if ($('body').hasClass('navShow')) {
                $('body').removeClass('navShow')
            } else {
                $('body').addClass('navShow')
            }
        });
        $('.g-nav2').find('li').each(function () {
            var li = $(this);
            if (li.find('.list').length > 0) {
                li.find('h2').addClass('h2');
                li.find('h2').click(function () {
                    if ($(window).width() > 800) return;
                    if (li.hasClass('on')) {
                        li.removeClass('on');
                        li.find('.list').hide()
                    } else {
                        li.addClass('on');
                        li.find('.list').show()
                    }
                })
            }
        });
        if ($(window).width() < 800) {
var elem = document.getElementsByClassName('search');
         $('.g-nav2').append('<div class="btn-list">' + $('.g-head .btn-list').html() + '</div>');
elem[0].parentNode.removeChild(elem[0]);
        }
    }
 {
        $('.g-head').find('.search').hover(
            function () {
                $(this).addClass('on')
            },
            function () {
                $(this).removeClass('on')
            }
        )
    }
    //--返回顶部
    scroll2top();

    //--js下拉选择框
    {
        $('.select').each(function () {
            var select = $(this);
            select.find('select').change(function () {
                select.find('span').html($(this).find("option:selected").text());
            })
        })
    }

    {
        $('.form').find('li').each(function () {
            var li = $(this);
            li.find('input').focus(function () {
                li.addClass('on')
            });
            li.find('input').blur(function () {
                li.removeClass('on')
            });
            li.find('textarea').focus(function () {
                li.addClass('on')
            });
            li.find('textarea').blur(function () {
                li.removeClass('on')
            })
        })
    }

    {
        var layer = $('.p-layer');
        layer.click(function () {
            layer.removeClass('show');
            $('body').removeClass('hidden');
        });
        layer.find('.container').click(function (e) {
            e.stopPropagation()
        })
    }

});

function swiperFun(swiper) {
    this.dom = swiper.dom;
    this.domList  = this.dom;
    this.dom.find('ul').addClass('swiper-wrapper');
    this.dom.find('li').addClass('swiper-slide');
    if(swiper.domList !== undefined){
        this.domList = this.dom.find(swiper.domList)
    }
    if(this.dom.find('.num').length > 0){
        this.dom.find('.num-total').html(this.dom.find('li').length)
    }

    this.change = function () {};
    var that = this;
    this.mySwiper = new Swiper(that.domList, {
        effect: swiper.effect !== undefined ? swiper.effect : 'slide',
        loop: swiper.loop !== undefined ? swiper.loop : true,
        autoplay: swiper.autoplay !== undefined ? swiper.autoplay : 5000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        speed: 600,
        slidesPerView: swiper.slidesPerView !== undefined ? swiper.slidesPerView : 1,
		slidesPerGroup: swiper.slidesPerGroup !== undefined ? swiper.slidesPerGroup : 1,
        centeredSlides: swiper.centeredSlides !== undefined ? swiper.centeredSlides : false,
        slideToClickedSlide: swiper.slideToClickedSlide !== undefined ? swiper.slideToClickedSlide : false,
        pagination: that.dom.find('.dots'),
        loopAdditionalSlides : 10,
        onSlideChangeStart: function(swiper){
            if(that.dom.find('.num').length > 0){
                that.dom.find('.num-curr').html(swiper.realIndex + 1)
            }
            that.change(swiper.realIndex);
        }
    });
    this.dom.find('.prev').click(function () {
        that.mySwiper.slidePrev();
        return false
    });
    this.dom.find('.next').click(function () {
        that.mySwiper.slideNext();
        return false
    })
}

//--选项卡-- tabFun({dom: $('.about'), curr: 0});
function tabFun(tab) {
    var btn = tab.dom.find('.tab-btn li'),
        box = tab.dom.find('.tab-box');
    btn.each(function (i) {
        $(this).click(function () {
            change(i)
        })
    });
    change(tab.curr);
    function change(curr) {
        btn.removeClass('on');
        btn.eq(curr).addClass('on');
        box.hide();
        box.eq(curr).fadeIn()
    }
}

function scroll2top() {
    var btn = $('.topA');
    btn.click(function () {
        $('body,html').stop(true, true).animate({scrollTop: 0}, 300);
    });
    $(window).scroll(function () {
        if($(window).scrollTop() > $(window).height()){
            btn.addClass('show')
        }else{
            btn.removeClass('show')
        }
    });
}

function arrayOne2Two(baseArray, n) {
    var len = baseArray.length,
        lineNum = len % n === 0 ? len / n : Math.floor( (len / n) + 1 ),
        res = [];
    for (var i = 0; i < lineNum; i++) {
        // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
        var temp = baseArray.slice(i*n, i*n+n);
        res.push(temp);
    }
    return res
}