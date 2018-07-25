/* Write a function that simply repeats the string a given number of times:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```*/
var repeatString = function(input, numberOfTime) 
{
	if (numberOfTime > 0)
	{
		let result = "";
		for (i = 0; i < numberOfTime; i++)
		{
			result += input;
		}
		return result;
	}
	else { return "ERROR";}
}

module.exports = repeatString
