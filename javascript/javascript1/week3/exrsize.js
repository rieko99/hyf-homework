// console.log("Ahmad");
// let myName = document.createElement("h1");
// myName.innerHTML = "Ahmad";
// document.body.appendChild(myName);
//
// let descripMySelf = document.createElement("p");
// descripMySelf.innerHTML = "My name is Ahmad, and I'm a HYF student";
// document.body.appendChild(descripMySelf);

const kittens = [{
  name: 'Oliver',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Fifi',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Bigotes',
  url: 'http://placekitten.com/g/200/300'
}, {
  name: 'Manchas'
}];

function changeImages() {
  let list = document.getElementById('image-list');
  let listElements = list.querySelectorAll('li');
  for (let i = 0; i < listElements.length; i++) {
    let newName = document.createElement("h1");
    newName.innerHTML = kittens[i].name;
    listElements[i].appendChild(newName);
    listElements[i];
  }
}
changeImages();
