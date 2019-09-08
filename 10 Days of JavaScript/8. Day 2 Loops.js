const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function vowelsAndConsonants(s) {
    s = s.split(""); //string will be converted to array
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) !== -1) {
            console.log(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i]) === -1) {
            console.log(s[i]);
        }
    }
}