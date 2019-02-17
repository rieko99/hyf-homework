console.log('=== Drawning Circles ===');

let firstCircle = document.getElementById('canvas');
const cContext = firstCircle.getContext("2d");
cContext.beginPath();
cContext.arc(95, 50, 40, 0, 2 * Math.PI);
cContext.fillStyle = "red";
cContext.fill();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    cContext.beginPath();
    cContext.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    cContext.fillStyle = this.fillColor;
    cContext.fill();
  }
}



setInterval(() => {
  function randomColor() {
    const a = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += a[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let x = Math.floor(Math.random() * 500) + 1;
  let y = Math.floor(Math.random() * 500) + 1;
  let r = Math.floor(Math.random() * 25) + 1;
  const endAngle =  2 * Math.PI;
  let c1 = new Circle(x, y, r, 0, endAngle, randomColor());
  c1.draw();
},
50);


console.log('=== Fetching repo data ===');
let repos = [fetch('https://api.github.com/search/repositories?q=user:rieko99'), fetch('https://api.github.com/search/repositories?q=user:Afshinrommel'), fetch('https://api.github.com/search/repositories?q=user:humayunadilshahzad')];

Promise.all(repos.map(repo => repo.then(data => data.json())))
.then((responses => {
  console.log(responses)
  responses.forEach((data) => {
    console.log('This is the full_name for: ' + data.items[0].full_name)
    console.log('and This is the url: ' + data.items[0].url)
    console.log('and This is the owner: ' + data.items[0].owner)
  })
}))
