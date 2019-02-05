const cars = [
    {
        make: 'Volvo',
        speed: 45,
        color: 'lightYellow',
    },
    {
        make: 'BMW',
        speed: 87,
        color: 'lightBlue',
    },
    {
        make: 'Fiat',
        speed: 78,
        color: 'lightCyan',
    }
];
let carColors = cars.map(cars => cars.color);
// console.log(carColors);
let speed = cars.filter(cars => cars.speed > 50);
// console.log(speed);
let carsBySpeed = cars.sort((a,b) => a.speed - b.speed);
// console.log(carsBySpeed);
function gears(arr, nr) {
  arr.push(nr);
}
let carGear = cars.forEach(gears(cars, Math.floor(Math.random()*3)+2));
console.log(carGear);
