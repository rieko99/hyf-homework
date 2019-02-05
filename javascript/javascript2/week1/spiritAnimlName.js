

let spiritAnimlNames = ["Copper falcon of Essix", "Amber leopard or Uraza.", "Bamboo panda of Jhi.", "Silver wolf of Briggan", "Marble swan of Ninani.", "Obsidian ape of Kovo.", "Bronze eagle of Halawir."];


document.getElementById("button").addEventListener("click", () => {
  let nameValue = document.getElementById("input").value;
  console.log(nameValue);
  return document.getElementById("h1").innerHTML = nameValue + ": The " + spiritAnimlNames[Math.floor(Math.random() * 6)];
})
