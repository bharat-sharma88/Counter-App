let counter = document.querySelector("#counter");
let decrementBtn = document.querySelector("#decrement");
let incrementBtn = document.querySelector("#increment");
let resetBtn = document.querySelector("#resetBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    counter.innerText = count;
});

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
    counter.innerText = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.innerText = 0;
});