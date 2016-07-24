$(function(){
	$('#dowebok').fullpage({
		'navigation': true,
		/*navigationTooltips=["登录百度舆情","领先：数据收集与处理","全面：舆情分析逻辑与架构","专业：专业数据可视化"];*/
	});
	var $down=$(".down");
	$(document).on('click', $down, function(){
  		$.fn.fullpage.moveSectionDown();
  		
	})
});