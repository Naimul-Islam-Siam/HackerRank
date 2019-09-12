// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let AlicePoint = 0, BobPoint = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) AlicePoint++;
        if (a[i] < b[i]) BobPoint++;
    }

    return [AlicePoint, BobPoint];
}