
//p = first index, r = last index
// make a new partition, then call quickSort again from 0 to the new partition (NOT including the partition)
// then call quickSort again from new partition to the end (NOT including the partition)
var quickSort = function(array, p, r) {
    if (p < r)
    {
        var newPartition = partition(array, p, r);
        quickSort(array, p, newPartition - 1);
        quickSort(array, newPartition + 1, r);
    }
};

// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

// The partition function should partition the subarray array[p..r] so that all elements to left pivot is smaller (though not necessarily in order)
// and all elements to the right of pivot is greater (though not necessarily in order)
// and it returns the index of where the pivot ends up.

var partition = function(array, p, r) {
    var indexOfSmallest = p;
    for (var counter = p; counter < r; counter++)
    {
        if (array[counter] <= array[r])
        {
            swap(array, counter, indexOfSmallest);
            indexOfSmallest++;
            
        }
    }
    swap(array, r, indexOfSmallest);
    //println(indexOfSmallest);
    return (indexOfSmallest);
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
var q = partition(array, 0, array.length-1);
println("Array after partitioning: " + array);
 Program.assertEqual(q, 4);
 Program.assertEqual(array, [5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
