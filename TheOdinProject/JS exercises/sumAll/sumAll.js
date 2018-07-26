/* Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```
*/
var sumAll = function(startingNum, upperBound) 
{
	// declare sum variable to keep track of total sum
	// use for loop, start with startingNum, increase by 1 
	// until ending condition, upperBound, is reached
	let sum = 0;
	for (let i = 0; i < upperBound; i++)
	{
		sum += startingNum;
		startingNum++;
		console.log(startingNum);
	}
	return sum;
}

module.exports = sumAll
