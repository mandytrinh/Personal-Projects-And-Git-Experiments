/* Create a function that determines whether or not a given year is a leap year.  Leap years are determined by the following rules:

1) There is a leap year every year whose number is perfectly divisible by four 
2) except for years which are both divisible by 100 and not divisible by 400. The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.

```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```
*/
var leapYears = function(yr) 
{
	// checks if input year is NOT divisible by 4
	// if pass (i.e NOT divisible by 4), may edge case: check if they're divisible by 100 and not 400
	// if that passes: return true
	// if not pass either of above, return false
	
	if (yr % 4 !== 0)
	{
		if (yr % 100 === 0 && yr % 400 !== 0)
		{
			return true;
		}
		return false;
	}
	else return true;
}

module.exports = leapYears
