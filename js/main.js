$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).find("ul").stop().slideDown(300);
		},
		function(){
			$(this).find("ul").stop().slideUp(300);
		}
	);
	$("#gnb > ul > li").focusin(function(){
		$(this).addClass("active");
		$(this).find("ul").show();
	});
	$("#gnb li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
		$(this).parent().hide();
	});

	var n=0;
	var pos=0;

	setInterval(function(){
		n=n+1;
		pos=-1*960*n;
		$(".main_image ul").animate({left:pos}, 400);

		if(n == 3){
			n=pos=0;
			$(".main_image ul").animate({left:pos}, 0);
		}
	}, 6000);
});