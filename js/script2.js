function performCalculation(a, b, operation){
	switch(operation){
		case '+':
			return parseInt(a) + parseInt(b);
			break;

		case '-':
			return parseInt(a) - parseInt(b);
			break;

		default:
			return "Sorry, no match found";
			break;
	}
}

var operation = prompt("Which operation you want to perform? Write +, -, /, *");
if(operation == '+' || operation == '-' ){
	var number1 = prompt("Enter first number");
	var number2 = prompt("Enter second number");
	alert(performCalculation(number1, number2, operation));
} else {
	alert('error');
}