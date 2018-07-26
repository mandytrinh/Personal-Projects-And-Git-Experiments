
Implement a function that takes an array and some other arguments then removes the other arguments from that array:

```javascript
remove([1,2,3,4], 3) // should remove 3 and return [1,2,4]
```

// DESTRUCTIVE (modifies original array)
var removeFromArray = function() 
{
	// define function with no params
	// use keyword parameters, which is an array-like object, and its [] index method, to get the Nth parameters
	// loop through and compare, using splice to remove the elements that are the same
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

// NON-DESTRUCTIVE (returns new array)

/* let removeFromArray = function(...args)
{
	// use .filter(), which creates new array w/ elements that pass the test in the callback function
	// on elements that are NOT in the array
	// by using the .includes() method which determines whether an array includes a certain element
	let inputArray = args[0];
	return resultArray = inputArray.filter(elem => !args.includes(elem));
	return resultArray;
} */


module.exports = removeFromArray
