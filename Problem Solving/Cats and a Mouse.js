// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let distFromA = Math.abs(x - z);
    let distFromB = Math.abs(y - z);

    if (distFromA < distFromB) return `Cat A`;
    else if (distFromB < distFromA) return `Cat B`;
    else if (distFromA == distFromB) return `Mouse C`;
}