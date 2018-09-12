/* Complete the doSearch function so that it implements a binary search
 Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue 
*/
// check if targetValue is even in bound
// take the average of the min and max
// if actual # is higher than this new value, set min to be the value + 1
// else if actual # is lower than this value, set max to be the value - 1
// if any time the max is less than the min then return error (or -1)
//guess is the index. You are always guessing the actual index, not the number itself!


var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess; 
    while (min <= max) //NOT array[guess] !== targetValue b/c it doesn't account for inputs NOT in array!
	{
		guess = Math.floor((min + max) / 2);
		if (array[guess] === targetValue)
		{ 
		}
			return guess;
		else if (array[guess] < targetValue)
		{
			min = guess +1;
		}
		else 
		{
			max  =  guess - 1;
		}		
	}
	return -1;
};


 var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var result = doSearch(primes, 73);
println("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);

