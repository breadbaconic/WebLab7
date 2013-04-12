// JavaScript Document
function change() {
	var color = document.getElementById("select").value;
	document.body.style.backgroundColor = color;
	setCookie("color", color);
}

function setCookie(name, value) {
	var Days = 360;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

function getCookie(name) {
	if (document.cookie.length > 0) {
  		var start = document.cookie.indexOf(name + "=");
		if (start != -1) { 
    		start = start + name.length + 1; 
    		var end = document.cookie.indexOf(";", start);
    		if (end == -1) {
				end = document.cookie.length;
			}
    		return unescape(document.cookie.substring(start, end));
    	} 
  	}
	return "";
}

function init() {
	var count = getCookie("count");
	var text = document.getElementById("text");
	var selectColor = document.getElementById("select");
	var color = "#FFF";
	var date = new Date();
	if (count != null && count != "") {
		var year = getCookie("year");
		var month = getCookie("month");
		var day = getCookie("day");
		var hour = getCookie("hour");
		var minute = getCookie("minute");
		var second = getCookie("second");
		text.innerHTML = "欢迎第 " + count + " 次访问本站！上次访问时间为" + (1900 + parseInt(year)) + "年" + (1 + parseInt(month)) + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒";
		color = getCookie("color");
		document.body.style.backgroundColor = color;
		selectColor.value = color;
		count = parseInt(count) + 1;
	} else {
		text.innerHTML = "欢迎您首次光临!";
		document.body.style.backgroundColor = "#FFF";
		selectColor.value = "#FFF";
		count = 1;
	}
	setCookie("count", count);
	setCookie("color", color);
	setCookie("year", date.getYear());
	setCookie("month", date.getMonth());
	setCookie("day", date.getDate());
	setCookie("hour", date.getHours());
	setCookie("minute", date.getMinutes());
	setCookie("second", date.getSeconds());
}

function deleteCookie() {
	setCookie("color", "");
	setCookie("year", "");
	setCookie("month", "");
	setCookie("day", "");
	setCookie("hour", "");
	setCookie("minute", "");
	setCookie("second", "");
	setCookie("count", "");
}

function closePage() {
	window.close();
}