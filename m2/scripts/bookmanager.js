$(function() {
	$.ajax({
		type : 'POST',
		url : "http://www.shopbop.ink:9090/bookmanager/lookResume",
		contentType: "application/json; charset=utf-8",
        data: JSON.stringify(GetJsonData()),
        dataType:'json',
		async : true,
		success : function(result) {
			$("#resumeCount").html(result.resumeCount);
			$("#totalcount").html(result.totalcount);
			$("#todayCount").html(result.todayCount);
			$("#todayVisitorCount").html(result.todayVisitorCount);
			$("#totalVisitorCount").html(result.totalVisitorCount);
		},
		error : function(xhr, ajaxOptions, thrownError) {
			/*alert("error.");
			if (xhr.status == 200) {
				alert(ajaxOptions);
			} else {
				alert(xhr.status);
				alert(thrownError);
			}*/
		}
	});
	function GetJsonData() {
		var json = {
			"appName" : navigator.appName,
			"appCodeName" : navigator.appCodeName,
			"platform" : navigator.platform,
			"appVersion" : navigator.appVersion,
			"userAgent" : navigator.userAgent,
			"product" : navigator.product,
			"cpuClass" : navigator.cpuClass,
			"oscpu" : navigator.oscpu,
			"productSub" : navigator.productSub,
			"userProfile" : navigator.userProfile,
			"cookieEnabled" : navigator.cookieEnabled
		};
		return json;
	}
});