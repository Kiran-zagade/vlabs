function maxSumSubarray(arr, K) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]; 
        if (windowEnd >= K) {
            currentSum -= arr[windowStart];
            windowStart++;
        }

    
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Test cases
console.log(maxSumSubarray([1, 2, 3, 4, 5], 2)); 
console.log(maxSumSubarray([-1, -2, -3, -4, -5], 3)); 
console.log(maxSumSubarray([1, -2, 3, 4, -1, 2], 4)); 
