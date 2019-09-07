'use strict';

function getLetter(s) {
    let letter, setOf;
    // Write your code here
    let aSet = ['a', 'e', 'i', 'o', 'u'];
    let bSet = ['b', 'c', 'd', 'f', 'g'];
    let cSet = ['h', 'i', 'j', 'k', 'l', 'm'];

    if(aSet.indexOf(s[0]) !== -1) setOf = aSet;
    if(bSet.indexOf(s[0]) !== -1) setOf = bSet;
    if(cSet.indexOf(s[0]) !== -1) setOf = cSet; 

    switch(setOf) {
        case aSet:
        letter = 'A';
        break;

        case bSet:
        letter = 'B';
        break;

        case cSet:
        letter = 'C';
        break;

        default:
        letter = 'D';
    }
    return letter;
}