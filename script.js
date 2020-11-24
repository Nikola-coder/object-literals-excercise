// vi vill skapa info om en person. ex namn, ålder, kön osv.
let name = "Niklas";
let age = 36;
let gender = "Male"

let name1 = "Maria";
let age1 = 28;
let gender1 = "Female";

// Istället för att skapa massa enskilda variabler så kan vi klumpa ihop de variablerna som hör ihop till ett och samma objekt.

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

console.log(niklas, maria);

// Vi kan lägga till egenskaper på ett simpelt sätt någon av utav objekten. Det gör vi enklast genom punknotation.
niklas.address = "Drottninggatan 20";

// Vi kan även ändra på egenskaper i ett objekt. Det finns två sätt att göra detta på. Första är via punknotation.
niklas.age = 31;

// Det andra sättet är på ett arrayliknande sätt.
niklas["age"] = 45;
niklas["gender"] = "non-binary";

// Vill vi ta borg en egenskap, vilket man sällan gör, istället brukar man sätta värdet till null eller 0 (om det är ett nummer) eller en tom sträng om det är en sträng.
delete niklas.age;
delete niklas["address"]

console.log(niklas);