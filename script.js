console.log("script loaded");
const title = document.querySelector(".divi");
const total = document.querySelector("#count");
let score = 0;
title.addEventListener("click", function (event) {
    const found = event.target.closest("button");
    if (!found) return;
    score = score + 1;
    console.log(found.dataset.item);
    total.textContent = score;
});