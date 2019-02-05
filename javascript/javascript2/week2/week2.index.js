// function logSomeThing() {
//   console.log("Something");
// // }
// function logSomeThing() {
//   setTimeout(() => {
//   let text = document.createElement("span");
//   document.body.appendChild(text);
//   text.innerHTML = "Something 2 2"
// }, 2000)};
// const btn = document.getElementById("button");
// console.log(btn);
// btn.addEventListener("click", logSomeThing);


let nr = 0;
function logSomeThing() {
  let counter = setInterval(() => {
  let text = document.createElement("span");
  document.body.appendChild(text);
  nr++;
  text.innerHTML = nr;
  if (nr===10) {
    clearInterval(counter)
  }
}, 500)};

const btn = document.getElementById("button");
console.log(btn);
btn.addEventListener("click", logSomeThing);
