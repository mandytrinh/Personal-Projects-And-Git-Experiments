/* 
Write two functions that convert temperatures from Fahrenheit to Celsius (and the other way around):
```
ftoc(32) // fahrenheit to celsius, should return 0

ctof(0) // celsius to fahrenheit, should return 32
*/

var ftoc = function(fahrenheit) 
{
	return ((fahrenheit - 32) * (5/9));
}

var ctof = function(celsius) 
{
	return ((celsius * (9/5) + 32));
}

module.exports = {
  ftoc,
  ctof
}
