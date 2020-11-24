// Vi vill skapa info om en person. Till exempel namn, ålder, kön osv.
let name = "Niklas";
let age = 30;
let gender = "Male";

let name1 = "Maria";
let age1 = 28;
let gender1 = "Female";

// Istället för att skapa massa enskilda variabler för olika personer, så kan vi klumpa ihop de variablerna som hör ihop till ett och samma objekt.

let niklas = {
  name: "Niklas",
  age: 30,
  gender: "Male",
};

let maria = {
  name: "Maria",
  age: 28,
  gender: "Female",
};

console.log(niklas, maria)

// Vi kan lägga til egenskaper på ett simpelt sätt till något av utav objekten. Det gör vi enklast genom punktnotation.
niklas.address = "Drottninggatan 20";

// Vi kan även ändra på egenskaper i ett objekt. Det finns två sätt att göra detta på. Första är via punknotation.
niklas.age = 31;

// Det andra sättet är på ett arrayliknande sätt.
niklas["age"] = 45;
niklas["gender"] = "Non-binary";  

// Vill vi ta bort en egenskap, vilket man sällan gör, istället brukar man sätta värdet till null eller 0 (om det är ett nummer) eller en tom sträng om det är en sträng.
delete niklas.age;
delete niklas["address"];

console.log(niklas, maria);