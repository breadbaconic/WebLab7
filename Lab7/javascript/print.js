// JavaScript Document
function printTable(){
	printTitle();
	printTableHead();
	printTableLine();
	printTableFoot();
}

//打印标题
function printTitle(){
	document.writeln("<h1>JavaScript九九乘法表</h1><p/>");
}

//打印行首
function printTableHead(){
	document.writeln("<table border='1' width='500'>");
	document.writeln("<tr>");
	//在此使用循环语句输出第一行的*号)，以及1至9
	document.write("<td>*</td>");
	for (var i = 1; i <= 9; i++) {
		document.write("<td>" + i + "</td>");
	}
	
	document.writeln("</tr>");
}

//打印表格内容
function printTableLine(){
	for (var i=1; i<=9; i++) {//第1行至第9行遍历
		document.writeln("<tr>");
		//在这里填入适当的JavaScript代码，
		//输出九九乘法表的主题内容
		document.write("<td width='45'></td>");
		
		for (var j = 1; j<=9; j++) {
			document.write("<td width='45' onMouseOver='mouseOver(this)' onMouseOut='mouseOut(this)' >");
			var result = "";
			if (j >= i) {
				result = i * j;
			}
			document.write(result + "</td>");
		}
		
		
		document.writeln("</tr>");
	}
}

//
function mouseOver(obj){
	obj.style.backgroundColor="yellow";
}
//
function mouseOut(obj){
	obj.style.backgroundColor="white";
}

//打印标题
function printTableFoot(){
	document.writeln("</table>");
}