/* 
The insert function takes three parameters as inputs: array, rightIndex, and value.
(rightIndex = index at which everything to the left is ALREADY SORTED)

Before the insert function is called:
* the elements from array[0] to array[rightIndex] are sorted in ascending order.

After calling the insert function:
* value and the elements that were previously in array[0] to array[rightIndex], should be sorted in ascending order and stored in the elements from array[0] to array[rightIndex+1].

In order to do this, the insert function will need to make room for value by moving items that are greater than value to the right. It should start at rightIndex, and stop when it finds an item that is less than or equal to value, or when it reaches the beginning of the array. Once the function has made room for value, it can write value to the array.

*/
var insert = function(array, rightIndex, value) {
    var placeHolder = value;
    for (var i = rightIndex; array[i] > placeHolder && i >= 0; i--)
    {
        array[i + 1] = array[i];
    }
    array[i + 1] = placeHolder;
};

// TESTING
var array = [3, 5, 7, 11, 13, 2, 9, 6];

insert(array, 4, 2);
println("Array after inserting 2:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 11, 13, 9, 6]);

insert(array, 5, 9);
println("Array after inserting 9:  " + array);
Program.assertEqual(array, [2, 3, 5, 7, 9, 11, 13, 6]);

insert(array, 6, 6);
println("Array after inserting 6:  " + array);
Program.assertEqual(array, [2, 3, 5, 6, 7, 9, 11, 13]);

/*
Insertion sort loops over items in the array, inserting each new item into the subarray before the new item.
Write insertion sort, making use of the insert function that was written in the previous challenge.
 */
var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++)
    {
        insert(array, i-1, array[i]);
    }
};

//TESTING

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
println("Array after sorting:  " + array);
Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);
var arr2 = [24, -9, 0, 5, 59, -1];
insertionSort(arr2);
println("Array after sorting: " + arr2);
Program.assertEqual(arr2, [-9, -1, 0, 5, 24, 59]);
