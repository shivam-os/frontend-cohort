/*
1. Find peak element of the array.
Problem link: https://www.geeksforgeeks.org/problems/peak-element/1
*/
const findPeakElement = (arr: number[]) => {
    const n = arr.length;

    if (n === 1 || arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    for (let i = 1; i < n - 1; i++) {
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) return i;
    }

    return -1;
};

/*
2. Find min & max element of the array.
Problem link: https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1
*/
const findMinMax = (arr: number[]): [number, number] => {
    let maxElement = arr[0], minElement = arr[0];

    for (let item of arr) {
        if (item > maxElement) maxElement = item;
        if (item < minElement) minElement = item;
    }

    return [minElement, maxElement];
};

/*
3. Find sum & product of min & max element of the array.
Problem link: https://www.geeksforgeeks.org/dsa/sum-and-product-of-minimum-and-maximum-element-of-an-array/
*/
const findSumAndProductOfMinMax = (arr: number[]): [number, number] => {
    const [minItem, maxItem] = findMinMax(arr);
    return [minItem + maxItem, minItem * maxItem];
}

/*
4. Find Minimum steps to make sum and the product of all elements of array non-zero
Problem link: https://www.geeksforgeeks.org/dsa/minimum-steps-to-make-sum-and-the-product-of-all-elements-of-array-non-zero/
*/

/*
5. Find Minimum steps required to reduce all the elements of the array to zero
Problem link: https://www.geeksforgeeks.org/dsa/minimum-steps-required-to-reduce-all-the-elements-of-the-array-to-zero/
 */

/*
6. Sort 0s, 1s and 2s 
Problem link: https://www.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1
*/

/*
7. Find Subarray with Given Sum
Problem link: https://www.geeksforgeeks.org/dsa/find-subarray-with-given-sum/
*/

/*
8. Rotate Array by One
Problem link: https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1
*/

/*
9. Count pairs with given sum
Problem link: https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1
*/