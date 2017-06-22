$(function(){
	//合作方式下拉单选框效果
	$(".option_btn").on("click",function(){
		$(".option_ul").fadeToggle(500);
	})
	$(".option_ul li").on("click",function(){
		var text=$(this).text();
		$(".option").val(text).siblings(".option_ul").fadeOut(500);
	})
})
