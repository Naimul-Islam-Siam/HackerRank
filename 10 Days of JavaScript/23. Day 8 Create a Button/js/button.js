var btn = document.querySelector("#btn");
let i = 0;

btn.addEventlistener("click", function () {
    i++
    btn.textContent = i;
});