function sumNumbers(){
	var number1, number2, ans;
	number1 = prompt("Enter first number");
	number2 = prompt("Enter second number");
	ans = parseInt(number1) + parseInt(number2);
	alert("Sum is "+ ans );

}

function subtractNumbers(){
	var number1, number2, ans;
	number1 = prompt("Enter greater number");
	number2 = prompt("Enter second number");
	ans = parseInt(number1) - parseInt(number2);
	alert("Ans is "+ ans );
}

function multiplyNumbers(){
	var number1, number2, ans;
	number1 = prompt("Enter first number");
	number2 = prompt("Enter second number");
	ans = parseInt(number1) * parseInt(number2);
	alert("Ans is "+ ans );
}

var operation = prompt("Press 1 or 100 for sum \n 2 for subtract \n 3 for multilpy");

switch(operation){
	case '1':
	case '100':
		sumNumbers();
		break;

	case '2':
		subtractNumbers();
		break;

	case '3':
		multiplyNumbers();
		break;

	default:
		alert("Sorry, no match found");
		break;
}


