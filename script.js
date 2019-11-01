var mayEdit = false;
var mayDot = true;

document.addEventListener('keydown', e => {
	// e.preventDefault();
	var code = e.keyCode;
	if (48<=code && code<=57) {
		writeInTextField(code-48);
	}
});

function writeInTextField(n) {
	if (n==='.' && !mayDot) {
		return;
	}
	if (n==='.') {
		mayDot=false;
	}
	document.getElementById("textfield").value = "" + document.getElementById("textfield").value + n;
	mayEdit=true;
	var elem = document.getElementById("textfield");
	elem.scrollLeft = elem.scrollWidth;
	printResult();
}

function printResult() {
	var res=" ";
	var expression = document.getElementById("textfield").value;
	if (expression!==" ") {
		res = " " + eval(expression);
	}
	document.getElementById("result").value = res;

}

function round() {
	if (mayEdit) {	
		var n = Math.round(parseFloat(document.getElementById("textfield").value));
		document.getElementById("result").value = "" +n;
	}
}

function sqrt() {
	if (mayEdit) {
		var n = Math.sqrt(parseFloat(document.getElementById("textfield").value));
		document.getElementById("result").value = "" + n;
	}
}

function abs() {
	if (mayEdit) {	
		var n = Math.abs(parseFloat(document.getElementById("textfield").value));
		document.getElementById("result").value = "" + n;
	}
}

function ceil() {
	if (mayEdit) {		
		var n = Math.ceil(parseFloat(document.getElementById("textfield").value));
		document.getElementById("result").value = "" + n;
	}
}

function floor() {
	if (mayEdit) {	
		var n = Math.floor(parseFloat(document.getElementById("textfield").value));
		document.getElementById("result").value = "" + n;
	}
}

function del() {
	document.getElementById("textfield").value = " ";
	mayEdit=false;
	mayDot=true;
	printResult();
}

function sin() {
	var n = Math.sin(parseFloat(document.getElementById("textfield").value)*Math.PI/180);
	document.getElementById("result").value = "" + n;
}

function cos() {
	var n = Math.cos(parseFloat(document.getElementById("textfield").value)*Math.PI/180);
	ddocument.getElementById("result").value = "" + n;
}

function evaluate() {
	alert("hey");
	document.getElementById("textfield").value = "" + eval("" + document.getElementById("textfield").value);
}