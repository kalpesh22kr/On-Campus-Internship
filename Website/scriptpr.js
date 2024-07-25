let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click" ,() => {
    body.style.backgroundColor="red";
    btn.style.backgroundColor="pink";
})