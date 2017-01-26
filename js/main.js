var submitButt = document.getElementById("validateButt").addEventListener("click", validation);

function validation(e){
	e.preventDefault(); // Prevents form from submitting

	var textarea = document.getElementById("inputText");
	var val = textarea.value; // Stores user input
	var pattern = /^{("{1})[\w\.\s!@#$%^&*+-/=?`{|}~]+":((?:\d+)|(?:"{1}[a-zA-Z]+[a-zA-Z\d\s\._!@#$%^&*+-/=?`{|}~]*"{1})|(true|false))(,?)}$/;

	if (pattern.test(val)) {
		document.getElementById("resultContent").innerHTML = "Valid JSON";
	} else {
		document.getElementById("resultContent").innerHTML = "Invalid JSON";
	}
}


