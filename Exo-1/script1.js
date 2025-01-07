// const allParag = document.body.getElementsByTagName("p");
// console.log(allParag);
// console.log(typeof allParag);
// const paragTablo = Array.from(allParag);
// console.log(paragTablo);
// console.log(typeof paragTablo);

// let unIndex = 0;
// while (unIndex < 10) {
//     console.log("Le Nombre : " + unIndex);
//     unIndex++;
// };

// let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
// //? Boucle for, on définit un index (ici c'est i), 
// //? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
// //? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
// for(let i=0;i<listeFilm.length;i++){
//     console.log('boucle FOR : ',listeFilm[i]);
// };

// // let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
// //? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// // ? On va choisir une variable temporaire pour parcourir les elements du tableau
// listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

// //? L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable 
// //? (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
// //? et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
// // on définit une variable temporaire pour parcourir le tableau
// for(let unElementTablo of listeFilm){
//     console.log('boucle FOR...OF : ',unElementTablo);
// };

// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true
// };

// // on définit une variable temporaire pour parcourir le objet :)
// //! Pour accèder aux valeurs correspondantes aux clés utilisez la notation en tableau associatif 👇
// for(let cleObjet in userData){
//     console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${userData[cleObjet]} `);
// };

// //? Parcourir les Objet  (Depuis javaScript ES8)
// //? La Method .keys() qui convertit les clés d'un objet en tableau
// //? La Method .values() qui convertit les valeurs d'un objet en tableau
// //? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
// const keyUser = Object.keys(userData);
// console.log("les clé de l'objet converties en array : ",keyUser);

// const valuesUser = Object.values(userData);
// console.log("les valeur de l'objet converties en array : ",valuesUser);

// const convertedDataUser = Object.entries(userData);
// console.log("les entrées de l'objet converties en array : ",convertedDataUser);



// //exercice

// const paragraphe = document.body.querySelectorAll("p");
// const array = Array.from(paragraphe); //!Array.from crée un tableau avec une HTML collection

// const map = array.map (paragraphe => 
//     paragraphe.innerText = "Lol je suis le Hacker"
// );
// console.log(map);


//Bonus
// array.forEach((uneCase) => 
//     uneCase.style.cursor = "pointer"
// );

// array.forEach((uneCase) => 
//     uneCase.addEventListener("click", () => {
//         console.log("click");
//     })
// );

//autre façon plus courte de l'écrire
// array.forEach((uneCase) => {
//     uneCase.style.cursor = "pointer"
//     uneCase.style.color = "blue"

//     uneCase.addEventListener("click", () => {

//         console.log("la couleur et le texte ont changé !");
//     })
// });

//exo 2
// //TODO : Pourquoi ca beug ?
// let wtf = 9;
// function buggyFunction() {
//     console.log(wtf);
// }; 
// buggyFunction();
// console.log(wtf);


//TODO : Pourquoi ca beug / Pourquoi ca marche pas ?
// let something = 44;
// let lesNews = `il est 99h67`;

// function functionBugParent() {
//     something = 9;
//     console.log(something); 
// };

// function functionBugEnfant() {
//     console.log(lesNews);    
// };

// functionBugParent();
// functionBugEnfant();

//! EXO 20.1 
//TODO: via JS afficher le profil  utilisateur dans la page web
// const userData2 = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
// };

// const image = document.createElement("img");
// image.src = "https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";
// image.style.height = '350px';
// image.style.width = '280px';
// document.querySelector("div").appendChild(image);

// const nom = document.createElement("h1");
// nom.innerText = "John delavega";
// nom.style.fontSize = "22px";
// document.querySelector("div").appendChild(nom);

// const email = document.createElement("p");
// email.innerText = "john.doe@example.com";
// email.style.fontSize = "18px";
// document.querySelector("div").appendChild(email);

// const age = document.createElement("p");
// age.innerText = "25";
// age.style.fontSize = "18px";
// document.querySelector("div").appendChild(age);

// const dob = document.createElement("p");
// dob.innerText = "08/02/1989";
// dob.style.fontSize = "18px";
// document.querySelector("div").appendChild(dob);

// const active = document.createElement("p");
// active.innerText = "true";
// active.style.fontSize = "22px";
// document.querySelector("div").appendChild(active);

// const background = document.querySelector("div");
// background.style.backgroundColor = '#4158D0';
// background.style.backgroundImage = 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)';
// background.style.height = "auto";
// background.style.width = "38%";
// background.style.margin = "auto";
// background.style.padding = "30px";
// background.style.color = "white";


const background = document.querySelector("div");

const title = document.createElement("h1");
title.innerText = "D.O.M Events";
title.style.cursor = "pointer";
background.append(title);

let selecTitle = false; //un bouléen pour savoir si le titre a été cliqué

title.addEventListener("click", () => {
    title.innerText = selecTitle==true  ? "-- 🥳 --":"D.O.M Events"; 
    selecTitle = !selecTitle; // veut dire selectitle égale à son inverse
});


const input = document.createElement("input");
background.append(input);

input.addEventListener("focus", () => {
    input.style.backgroundColor = "blue";
    input.style.color = "white";
    input.value = ''; // note perso : à mettre dans le code fil rouge --> efface l'input
});

input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
    input.style.color = "black";
});