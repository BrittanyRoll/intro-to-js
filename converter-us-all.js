function convert() {
	var input = document.getElementById("input").value;
	var choice = document.getElementById("money").value

	if (document.getElementById("money").value == "eur"){
	var result = input*.85;
	document.getElementById("result").innerHTML = "&euro; " + result;
	}


	else if (document.getElementById("money").value == "bp"){
	var result = input*.77;
	document.getElementById("result").innerHTML = "&pound; " + result;
	}


	else if (document.getElementById("money").value == "cd"){
	var result = input*1.27;
	document.getElementById("result").innerHTML = "&#036; " + result;
	}


	else if (document.getElementById("money").value == "jp"){
	var result = input*110.83;
	document.getElementById("result").innerHTML = "&yen; " + result;
	}
}
