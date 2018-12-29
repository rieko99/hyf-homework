console.log('--warmup part 2--');
console.log('=== Exercise 3.1 ===');


function empty() {
  return {
    time: 12,
  };
}
let timeObject = empty();
console.log(timeObject);


console.log('=== Exercise 3.2 ===');


function emptyObjects(color1, color2, color3) {
  return [
    {color:color1,},
    {color:color2,},
    {color:color3,}];
}
let colorObjects = emptyObjects("red", "blue", "green");
console.log(colorObjects);

for (var i = 0; i < colorObjects.length; i++) {
  console.log(colorObjects[i]["color"]);
}


console.log('=== Exercise 3.3 ===');


let today = "Sunday";
let daysToMeeting = 9%7;
let days = ["Manday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "Sunday"];
let meetingDay = days[daysToMeeting-1];
console.log("Meeting day is " + meetingDay);
