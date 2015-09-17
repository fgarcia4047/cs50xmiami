/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var c = 30
function celsiusToFahrenheit(c)
{
	var result = (((c * 9) / 5) + 32)
	console.log(c + "°C is " + result+"°F")
}

celsiusToFahrenheit(c);


// Farenheit to celsius 
var f = 80; 
function fahrenheitToCelsius(f)
{
	var result = (((f - 32) * 5) / 9)
	console.log(f +"°F is " + result +"°CC")
}
fahrenheitToCelsius(f);

