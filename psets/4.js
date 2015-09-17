/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
c

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
// Degrees C to F. 
var c = 30;
var ctof = (((c * 9) / 5) + 32);
console.log(c + "°C is " + ctof+ "°F" )
// Degrees F to C. 
var f =80; 
var ftoc = (((f - 32)* 5) /9 );
console.log(f +"°F is "+ ftoc + "°C")