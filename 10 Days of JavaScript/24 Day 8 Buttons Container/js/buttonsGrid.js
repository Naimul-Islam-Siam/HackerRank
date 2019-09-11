var btn = document.querySelector("#btn5");

var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");
var btn6 = document.querySelector("#btn6");
var btn7 = document.querySelector("#btn7");
var btn8 = document.querySelector("#btn8");
var btn9 = document.querySelector("#btn9");

let i = 0;

btn.addEventListener("click", function () {
    i++;
    console.log(i);
    if (i == 1) {
        btn1.innerHTML = 4;
        btn2.innerHTML = 1;
        btn3.innerHTML = 2;
        btn4.innerHTML = 7;
        btn6.innerHTML = 3;
        btn7.innerHTML = 8;
        btn8.innerHTML = 9;
        btn9.innerHTML = 6;
    }

    if (i == 2) {
        btn1.innerHTML = 7;
        btn2.innerHTML = 4;
        btn3.innerHTML = 1;
        btn4.innerHTML = 8;
        btn6.innerHTML = 2;
        btn7.innerHTML = 9;
        btn8.innerHTML = 6;
        btn9.innerHTML = 3;
    }

    if (i == 3) {
        btn1.innerHTML = 8;
        btn2.innerHTML = 7;
        btn3.innerHTML = 4;
        btn4.innerHTML = 9;
        btn6.innerHTML = 1;
        btn7.innerHTML = 6;
        btn8.innerHTML = 3;
        btn9.innerHTML = 2;
    }

    if (i == 4) {
        btn1.innerHTML = 9;
        btn2.innerHTML = 8;
        btn3.innerHTML = 7;
        btn4.innerHTML = 6;
        btn6.innerHTML = 4;
        btn7.innerHTML = 3;
        btn8.innerHTML = 2;
        btn9.innerHTML = 1;
    }

    if (i == 5) {
        btn1.innerHTML = 6;
        btn2.innerHTML = 9;
        btn3.innerHTML = 8;
        btn4.innerHTML = 3;
        btn6.innerHTML = 7;
        btn7.innerHTML = 2;
        btn8.innerHTML = 1;
        btn9.innerHTML = 4;
    }

    if (i == 6) {
        btn1.innerHTML = 3;
        btn2.innerHTML = 6;
        btn3.innerHTML = 9;
        btn4.innerHTML = 2;
        btn6.innerHTML = 8;
        btn7.innerHTML = 1;
        btn8.innerHTML = 4;
        btn9.innerHTML = 7;
    }

    if (i == 7) {
        btn1.innerHTML = 2;
        btn2.innerHTML = 3;
        btn3.innerHTML = 6;
        btn4.innerHTML = 1;
        btn6.innerHTML = 9;
        btn7.innerHTML = 4;
        btn8.innerHTML = 7;
        btn9.innerHTML = 8;
    }

    if (i == 8) {
        btn1.innerHTML = 1;
        btn2.innerHTML = 2;
        btn3.innerHTML = 3;
        btn4.innerHTML = 4;
        btn6.innerHTML = 6;
        btn7.innerHTML = 7;
        btn8.innerHTML = 8;
        btn9.innerHTML = 9;
        i = 0;
    }
});
