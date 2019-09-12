// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    // as x2 > x1 always so if v2 >= v1 they will never meet
    // they will only meet if v1 > v2 and 
    // (x1 + v1 * number of jumps) = (x2 + v2 * number of jumps)
    // number of jumps must be a non-fractional postive number
    // which occurs only if |x1-x2| % |v1-v2| = 0

    if (v2 < v1 && (Math.abs(x1 - x2) % Math.abs(v1 - v2) == 0)) return `YES`;
    else return `NO`;
}