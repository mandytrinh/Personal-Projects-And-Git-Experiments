/* 
Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
remove([1,2,3,4], 3) // should remove 3 and return [1,2,4]
```
*/
var removeFromArray = function() 
{
	// define function with no params
	// use keyword parameters, which is an array-like object, and its [] index method, to get the Nth parameters
	let inputArray = arguments[0];
	let paramLength = arguments.length;
	let inputArrayLength = inputArray.length;
	
	for (let i = 0; i < inputArrayLength; i++)
	{
		let idx = 1;
		while (idx < paramLength)
		{
			if (inputArray[i] === arguments[idx])
			{
				inputArray.splice(i, 1);
				console.log(inputArray);
			}
			idx++;		
		}
	}
	return inputArray;
}

module.exports = removeFromArray
