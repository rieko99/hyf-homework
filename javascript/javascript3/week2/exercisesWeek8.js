// fetch('https://yesno.wtf/api')
//  .then(response => response.json())
//  .then((obj) => console.log(obj.answer))
//
//
 // const hej = navigator.getBattery()
 //   .then(function(battery) {
 //
 //     console.log("Battery level: " + battery.level * 100 + " %");
 //
 //     battery.addEventListener('levelchange', function() {
 //       console.log("Battery level: " + battery.level * 100 + " %");
 //     });
 //
 //    return fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
 //
 //  })
 //  .then((response) => {
 //    return response.json()
 //  })
 //  .then((movies) => console.log(movies));
navigator.getBattery().then((batteryManager) => {
  console.log(batteryManager);
})

let functions = [ navigator.getBattery(), fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")]
  Promise.all(functions)
    .then((responses) => {
      console.log(responses);

      const batteryManager = responses[0];
      const response = responses[1];
      
      return response.json()
    //   (responses[0]) => console.log("Battery level: " + battery.level * 100 + " %");
    //
    //       battery.addEventListener('levelchange', function() {
    //         console.log("Battery level: " + battery.level * 100 + " %");
    //       });}
    //       (responses[1]) => {
    //         responses[1].json()
    //         console.log(responses[1]);
    //       }

    })
    .then((movies) => {
      console.log(movies);
    })





//
//  navigator.getBattery().then(function(battery) {
//
//   console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
//
//   battery.addEventListener('chargingchange', function() {
//     console.log("Battery charging? " + (battery.charging ? "Yes" : "No"));
//   });
//
// });
//
// console.log(navigator.getBattery());

// let massage = new Promise((resolve) => { setTimeout(()=> resolve("Hello"), 2000)
// });
//
// massage
// .then((resolve) => alert(resolve));
