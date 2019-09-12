/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    var sumLeft = 0;
    var sumRight = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j) sumLeft = arr[i][j] + sumLeft;
            if (i == arr.length - j - 1) sumRight = arr[i][j] + sumRight;
        }
    }

    return Math.abs(sumLeft - sumRight);
}