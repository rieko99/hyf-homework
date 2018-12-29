console.log("--Smart-Ease part 2--");
console.log('=== Exercise 3.1 ===');


let notes = [];
function addNote(note, noteId) {
  return notes.push({note:note, noteId:noteId});
}
  // == test ==
addNote("Hi World", 1);
addNote("Hej Verden", 2);
addNote("Hej Verden", 3);
console.log(notes);

console.log('=== Exercise 3.2 ===');


function getNoteFromId(id) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].noteId === id) {
      return notes[id-1].note;
    }
    return "Error";
 }
}
// == test ==
console.log(getNoteFromId(2));


console.log('=== Exercise 3.3 ===');


function showAllNotes() {
  for (var i = 0; i < notes.length; i++) {
    console.log("The note with id: " + notes[i].noteId + ", has the following note text: " + notes[i].note);
  }
}
showAllNotes();





console.log('=== Exercise 3.4 ===');

let activities = [];

function addActivity(date, activity, duration) {
  return activities.push({date:date, activity:activity, duration:duration});
}
// ==test==
addActivity("20, 1, 2018", "Google", 150);
addActivity("20, 1, 2018", "Google", 150);

console.log('=== Exercise 3.5 ===');


let a = 0;
function showStatus() {
  for (var i = 0; i < activities.length; i++) {
    a += activities[i].duration;
  }
  if (activities.length===0) {
    console.log("Add some activities before calling showStatus");
  } else {
  console.log("You have added " + activities.length + " activities. They amount to " + a + " min. of usage");
 }
}
showStatus();


console.log('=== Exercise 3.6 ===');


let x = 120; //Exsample   x shold = ?
 if (a>=x) {
  console.log("You have reached your limit, no more smartphoning for you!");
 }
