// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });


// const input = document.querySelector("#input-test");
// const textInput = document.querySelector("p");

// function afficherInput(event) {
//     textInput.innerText = event.target.value;
// }
// input.addEventListener("keyup", afficherInput);


// effacer le texte de l'input et du texte qui s'affiche dans le paragraphe quand on focus l'input

// function effacerInput(e) {  // si le E est clair, c'est qu'il n'est pas écrit à l'intérieur de la fonction donc pas besoin de mettre un E, laisser vide --> cf code fil rouge
//     input.value = "";
//     textInput.innerText = "";
//     console.log(effacerInput);
// }
// input.addEventListener("focus", effacerInput);


//solution formateur - fonction anonyme
// input.addEventListener("keyup", () => {
//     textInput.innerText = input.value;
//     textInput.innerHTML = marked(input.value); //transforme le texte comme pour le readme. Ne pa oublier le script dans html et DOMPurify pour éviter les attaques xss
// });


//! Local Storage

// const input = document.querySelector("#input-test");
// const textInput = document.querySelector("p");


// let info = localStorage.getItem("monSuperTexte");
// input.value = info;
// textInput.innerText = input.value

// function afficherInput(event) {
//     textInput.innerText = event.target.value;
//     localStorage.setItem("monSuperTexte", event.target.value);
// }
// input.addEventListener("keyup", afficherInput);
 

//solution formateur //!ne pas oublier de mettre dans html textaera etc
// const zoneTxt = document.querySelector("textarea");
// const zoneRender = document.querySelector("#formRender");
// // Dès qu'on arrive sur la page,
// //On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
// zoneTxt.value = localStorage.getItem('monSuperTexte');
// //Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
// if(zoneTxt.value){
// //    zoneRender.innerText = localStorage.getItem('monSuperTexte');
//    zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
// };
// //On détecte ce que tape l'utilisateur dans le textarea
// zoneTxt.addEventListener("keyup", function() {
// //On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
// localStorage.setItem('monSuperTexte',zoneTxt.value);
// //On affiche ce que tape l'utilisateur traduit en marked dans la div     
// //    zoneRender.innerHTML =marked(zoneTxt.value);
//    zoneRender.innerHTML =DOMPurify.sanitize(marked(zoneTxt.value));
// //    zoneRender.innerHTML =marked(zoneTxt.value);
// });

// VANTA.BIRDS({
//     el: "#vanta",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00
// });



//! REGEX

const email = document.querySelector("#mail");

email.addEventListener('keyup', emailValide ); // mettre avant la fonction ?

function emailValide() {
    const emailValue = email.value;
    const emailPattern = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if (emailPattern.test(emailValue)) {
        email.style.background = "green";
    } else {
        email.style.background = "red";
    }
};


// pas fini ^_^'
const motDePasse = document.querySelector("#mot");
const confirm = document.querySelector("#confirm");

function MDPValide() {
    const motDePasseValue = motDePasse.value;
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;

    if (charDecimal.match(motDePasseValue)) {
        confirm.innerText = "mot de passe valide";
    } else {
        confirm.innerText = "mot de pase non valide";
    }
};

motDePasse.addEventListener('keyup', MDPValide );
