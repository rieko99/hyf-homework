console.log(1)
let div = document.createElement("div");
div.style.background = "red";
document.body.appendChild(div);

console.log(document.getElementsByName("button"));

document.getElementsByName("age")[0].addEventListener("click", function() {
  div.innerHTML = "Some text";
})



console.log(age);

document.getElementById("age").addEventListener("click", () => {
let age = parseInt(document.getElementById("ageForm").value)
console.log(typeof age);
  if(age >= 18){
   alert("You are allow to drive")
  }
  else if (age < 18){
   alert("You are not allow to drive")
  }
  else if (age===0){
    alert("You need to type your age")
  }

});


// const numCalculator = () =>{
//
//
// }
