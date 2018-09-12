// Takes in an array that has two sorted subarrays, from [p..q] and [q+1..r], and merges the array
// q = midpoint, p = first index,  r = last index
// k = index of original array
// i = index of lowerArray, j = index of upperArray

var merge = function(array, p, q, r) {
    var lowHalf = [];
    var highHalf = [];

    var k = p;
    var i;
    var j;
    for (i = 0; k <= q; i++, k++) {
        lowHalf[i] = array[k];
    }
    for (j = 0; k <= r; j++, k++) {
        highHalf[j] = array[k];
    }

    k = p;
    i = 0;
    j = 0;
    
    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array
	
    while (j < highHalf.length && i < lowHalf.length)
    {
        if (lowHalf[i] < highHalf[j])
        {
            array[k] = lowHalf[i];
            i++;
        }
        else
        {
            array[k] = highHalf[j];
            j++;
        }
        println(array);
        k++;
    }
	
    //println(i);
    //println(j);
	
    // Below 2 while loops checks in the cases when you run out of elements faster in either one of the temp arrays
    // e.g - after 1st while loop, lowHalf temp array is on index 2, while highHalf temp array is already done at index 4
    // so you copy the remaining values in the temp array into the main array. These values are obviously ALREADY SORTED
    
    while (i < lowHalf.length)
    {
        array[k] = lowHalf[i];
        i++;
        k++;
        //println(array);
    }
    while (j < highHalf.length)
    {
        array[k] = highHalf[j];
        k++;
        j++;
        //println(array);
    }
    
};

/* TESTING
var array = [3, 7, 12, 14, 2, 6, 9, 11];
merge(array, 0,
    Math.floor((0 + array.length-1) / 2),
    array.length-1);
println("Array after merging: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);
*/

// Takes in an array and recursively merge sorts it.
// p & r are indexes
var mergeSort = function(array, p, r) {
    
    if (r > p)
    {
        var midPoint = Math.floor((p + r)/2);
        mergeSort(array, p, midPoint);
        mergeSort(array, midPoint + 1, r);
        merge(array, p, midPoint, r);
    }
};

/*TESTING
var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var arr2 = [3, 0, -9, 42, 1, -7];
mergeSort(arr2, 0, arr2.length-1);
*/
Program.assertEqual(arr2, [-9, -7, 0, 1, 3, 42]);