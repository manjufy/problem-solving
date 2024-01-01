// returns maximum sum in a subarray of size k
function maxSum(arr, n, k) {
    // initialise max_sum
    let max_sum = 0;

    // calculate max_sum from i to k
    for (let i = 0; i < k; i++) {
        max_sum = max_sum + arr[i];
    }

    // init window_sum & assign max_sum to window_sum
    let window_sum = max_sum;

    for (let i = k; i < n; i++) {
        window_sum = window_sum - arr[i-k] + arr[i];
        max_sum = Math.max(max_sum, window_sum);
    }

    return max_sum;
}


// Driver code
let arr = [ 1, 4, 2, 10, 2, 3, 1, 0, 20 ];
let k = 4;
let n = arr.length;
console.log(maxSum(arr, n, k));