/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var radius = 3; 
function calcCircumfrence(radius)
{

	var circumference = (radius * 2) * 3.14 
	console.log("The circucumferene is: " +circumference)
}

calcCircumfrence(radius) 

// calcArea 

function calcArea(radius)
{
	var area = (radius * radius) * 3.14

	console.log("The Area is: "+ area)
}

calcArea(radius)