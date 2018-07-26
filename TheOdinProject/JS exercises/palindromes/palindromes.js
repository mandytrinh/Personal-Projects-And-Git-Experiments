/* Write a function that determines whether or not a given string is a palindrome. */
var palindromes = function(str) 
{
  // make copy of string
  // split into its characters using [...string] spread syntax 
  // use the reverse function to reverse the characters
  // join the characters into a word
  // compare this version to the inputstring, if equal then return true
  let compareStrSplit = [...str];
  let reversedStr = compareStrSplit.reverse().join("");
  return reversedStr === str;
}

module.exports = palindromes
