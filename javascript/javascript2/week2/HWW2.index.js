let nr = [0]
let plus = 0;
function generat(start, end, three, five) {
  let nrIntrval = setInterval(() => {
    plus++;
    start.push(plus);
      // console.log(nr[i]);
    if (plus === end) {
      clearInterval(nrIntrval)
      for (var i = 0; i < start.length; i++) {
        if (start[i]%3===0 && start[i]%5===0) {
          console.log(three, five);
        }
        else if (start[i]%3===0) {
          console.log(three);
        }
        else if (start[i]%5===0) {
          console.log(five);
        }
       }
      }
  }, 250);
}
console.log(generat(nr, 15, "Say three", "Say five"));
