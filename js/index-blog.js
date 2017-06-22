$(function(){
	$(".left_page li").on("click",function(){
		$(this).addClass("click_change").siblings().removeClass("click_change");;
	})
	$(".lable_icon span").on("click",function(){
		$(this).addClass("lable_icon_change").siblings().removeClass("lable_icon_change");
	})
})
