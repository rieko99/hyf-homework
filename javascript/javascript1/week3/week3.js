console.log("-- step 1 --");

console.log("===Exercise 1.1===");

let books = ["harry_potter_chamber_secrets-1", "harry_potter_chamber_secrets-2", "harry_potter_chamber_secrets-3", "harry_potter_chamber_secrets-4", "harry_potter_chamber_secrets-5",
 "harry_potter_chamber_secrets-6", "harry_potter_chamber_secrets-7", "harry_potter_chamber_secrets-8", "harry_potter_chamber_secrets-9", "harry_potter_chamber_secrets-10"];
console.log(books);


console.log("===Exercise 1.3===");


let ul = document.createElement("ul");
ul.innerHTML = "Book list: ";
document.body.appendChild(ul);

function loop() {
  for (var i = 0; i < books.length; i++) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = books[i];
  }
}
loop();

console.log("===Exercise 1.4===");


let info = [
  {id: books[0],
   language: "en.",
   title: "Harry Potter",
   auther: "J. K. Rowling"},
   {id: books[1],
    language: "en.",
    title: "Harry Potter",
    auther: "J. K. Rowling"},
    {id: books[2],
     language: "en.",
     title: "Harry Potter",
     auther: "J. K. Rowling"},
     {id: books[3],
      language: "en.",
      title: "Harry Potter",
      auther: "J. K. Rowling"},
      {id: books[4],
       language: "en.",
       title: "Harry Potter",
       auther: "J. K. Rowling"},
       {id: books[5],
        language: "en.",
        title: "Harry Potter",
        auther: "J. K. Rowling"},]


        console.log("===Exercise 1.5===");


        let ulFixed = document.createElement("ul");
        ulFixed.innerHTML = "Book info.: ";
        document.body.appendChild(ulFixed);


        function fixedLoop() {
          for (var i = 0; i < info.length; i++) {
           let li = document.createElement("li");
           ulFixed.appendChild(li);
           let h3 = document.createElement("h3");
           h3.innerHTML = info[i].title;
           let p = document.createElement("p");
           p.innerHTML = info[i].language + info[i].auther;
           li.innerHTML = info[i].id + ": " + h3 + p;
          }
        }
        fixedLoop();
