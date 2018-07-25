var reverseString = function(str) 
{
	// find the length of the string
	// go through the string via for loop backwards (from the length - 1 as starting position)
	// use slice to get character (start index at current position i, end index at i + 1)
	// concat it to the new string
	let newString = "";
	let stringLength = str.length;
	for (let i = stringLength - 1; i > -1 ; i--)
	{
		console.log(i);
		let singleCharac = str.slice(i, i+1);
		console.log(singleCharac);
		newString += singleCharac;
		//console.log(newString);
	}
	return newString;
}
module.exports = reverseString