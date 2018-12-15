//Aje-ify
let yearOfBirth = 1999;
let yearFutur = 2050;
let age = yearFutur - yearOfBirth;

console.log("You will be ", age, " years old in ", yearFutur);

//Housey Pricey
let volumeInMeters;
let gardenSizeInM2;
let housePrice;
let petersVolume = 8 * 10 * 10;
let petersGarden = 100;
let petersHouse = 2500000;
volumeInMeters = petersVolume;
gardenSizeInM2 = petersGarden;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("This is what Peter should pay ", housePrice);
console.log("Peter have paid ", petersHouse - housePrice, "too much");
let juliasVolume = 5 * 11 * 8;
let juliasGarden = 70;
let juliasHouse = 1000000;
volumeInMeters = juliasVolume;
gardenSizeInM2 = juliasGarden;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
console.log("This is what Julia should pay ", housePrice);
console.log("Julia have paid ", housePrice - juliasHouse, "too much");
