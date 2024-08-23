
/*------------------------------------*/
/*------------------------------------*/

$(window).on('load',function () {
  $(".wrap").addClass('is-show');
  $(".loadingLogo").fadeOut(600, function(){
   $(this).remove();
  });
  $(".loadingOverlay").delay(500).fadeOut(1500, function(){
   $(this).remove();
  });
});



$(function(){

//動画再生（中ページTRAILERボタン）
$(document).ready(function(){
  $('.js-trailer').modaal({type: 'iframe',overlay_opacity: '1.0',fullscreen: 'true',background:'#000000'});
});

$('.js-hover').easyRollover({
	suffix: '_off.',
	suffix_replace: '_on.'
});



$('a[href^="#"]').on('click',function(){
 var speed = 700;
 var href= $(this).attr("href");
 var target = $(href === "#" || href === "" ? 'html' : href);
 var position = (target.offset().top);
 $('body,html').animate({scrollTop:position}, speed, 'swing');
 return false;
});


/*----  scroll top  -------*/

var topBtn = $('.pagetop');  
//スクロールが100に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        topBtn.fadeIn();
    } else {
        topBtn.fadeOut();
    }
});

  
}); // $(function() end


/*=====================================================
meta: {
  title: "jquery-opacity-rollover.js",
  version: "2.1",
  copy: "copyright 2009 h2ham (h2ham.mail@gmail.com)",
  license: "MIT License(http://www.opensource.org/licenses/mit-license.php)",
  author: "THE HAM MEDIA - http://h2ham.seesaa.net/",
  date: "2009-07-21"
  modify: "2009-07-23"
}
=====================================================*/
(function($) {
	
	$.fn.opOver = function(op,oa,durationp,durationa){
		
		var c = {
			op:op? op:1.0,
			oa:oa? oa:0.6,
			durationp:durationp? durationp:'fast',
			durationa:durationa? durationa:'fast'
		};
		

		$(this).each(function(){
			$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
					$(this).fadeTo(c.durationp,c.oa);
				},function(){
					$(this).fadeTo(c.durationa,c.op);
				})
		});
	},
	
	$.fn.wink = function(durationp,op,oa){

		var c = {
			durationp:durationp? durationp:'slow',
			op:op? op:1.0,
			oa:oa? oa:0.2
		};
		
		$(this).each(function(){
			$(this)	.css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				}).hover(function(){
				$(this).css({
					opacity: c.oa,
					filter: "alpha(opacity="+c.oa*100+")"
				});
				$(this).fadeTo(c.durationp,c.op);
			},function(){
				$(this).css({
					opacity: c.op,
					filter: "alpha(opacity="+c.op*100+")"
				});
			})
		});
	}
	
})(jQuery);


// opacity-rollover

(function($) {
$(function() {
　$('.over').wink('100');
　$('.over').css("cursor", "pointer");
});
})(jQuery);


