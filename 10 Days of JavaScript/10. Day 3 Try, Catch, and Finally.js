/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join(""); //reverse the "s" string
    }

    catch (error) {
        console.log(error.message); //if "s" is not a string
    }

    finally {
        console.log(s); //if "s" can't be reversed print s without reversing
    }
}