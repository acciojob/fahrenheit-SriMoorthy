function toFahrenheit(celsius) {
 // Write your code here
	let n = (9/5)*celsius+32;
	return n.toFixed(2)
}

// Do not change the code below
const celsius = prompt("Enter Celsius:");
alert(toFahrenheit(Number(celsius)));
