// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let sum = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) sum = sum + bill[i];
    }

    let sumShare = sum / 2;
    if (b === sumShare) console.log(`Bon Appetit`);
    else console.log(b - sumShare);
}