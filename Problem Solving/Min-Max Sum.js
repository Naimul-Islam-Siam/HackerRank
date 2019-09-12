// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr = arr.sort();
    let minSum = 0, maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) minSum = arr[i] + minSum;
        if (i !== 0) maxSum = arr[i] + maxSum;
    }

    console.log(`${minSum} ${maxSum}`);
}