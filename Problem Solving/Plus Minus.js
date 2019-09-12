function plusMinus(arr) {
    let countPositive = 0, countNegative = 0, countZero = 0;
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) countPositive++;
        if (arr[i] < 0) countNegative++;
        if (arr[i] == 0) countZero++;
    }

    console.log(countPositive / n);
    console.log(countNegative / n);
    console.log(countZero / n);
}