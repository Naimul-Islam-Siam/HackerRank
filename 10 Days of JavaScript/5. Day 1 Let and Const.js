const PI = Math.PI;

function area(r) {
    return PI * r * r;
}

function perimeter(r) {
    return 2 * PI * r;
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    // Print the area of the circle:
    console.log(area(r));
    // Print the perimeter of the circle:
    console.log(perimeter(r));
}