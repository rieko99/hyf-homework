const input = document.createElement("input");
input.setAttribute('type',"number");
input.setAttribute("value", "default");
document.body.appendChild(input);


function changeColor() {
   if (input.value%3===0 && input.value%5===0) {
     document.body.style.backgroundColor = "red";
   }
   else if (input.value%3===0) {
     document.body.style.backgroundColor = "blue";
   }
   else if (input.value%5===0) {
     document.body.style.backgroundColor = "yellow";
   }
   else {
     document.body.style.backgroundColor = "white";
   }
}

const click = document.querySelector(".button");
click.addEventListener('click', changeColor);


let locaionBtn = document.createElement("button");
locaionBtn.innerHTML = "Show locaion";
document.write("<br><br><br>");
document.body.appendChild(locaionBtn);

document.write("<br><br><br>");
let map = document.createElement("div");
map.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap");
map.setAttribute('class', "map");
document.body.appendChild(map);

locaionBtn.addEventListener('click', () => {
  function onPsitionReceived(position) {
    console.log(position);
  }
  function locaionNotReceived(positionError) {
    console.log(positionError);
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onPsitionReceived,locaionNotReceived);
  }
})
