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
    const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

    if (regexMail.test(emailValue)) {
        email.style.background = "green";
    } else {
        email.style.background = "red";
    }
};


// pas fini ^_^'
// const motDePasse = document.querySelector("#mot");
// const confirm = document.querySelector("#confirm");

// function MDPValide() {
//     const motDePasseValue = motDePasse.value;
//     const charDecimal = /\d/;
//     const charSpecial = /[$&@!]/;

//     if (charDecimal.match(motDePasseValue)) {
//         confirm.innerText = "mot de passe valide";
//     } else {
//         confirm.innerText = "mot de pase non valide";
//     }
// };

// motDePasse.addEventListener('keyup', MDPValide );


//Solution formateur
const loginInput = document.querySelector('#exampleInputEmail1');
const passwordInput = document.querySelector('#exampleInputPassword1');
const userMessage = document.querySelector('#userMessage');

loginInput.addEventListener('keyup',()=>{ 
 // Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
 const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
 // Définit une expression régulière pour valider le format de l'email
 if(regexMail.test(loginInput.value)){ 
   loginInput.style.backgroundColor = 'lightgreen'; 
   // Change la couleur de fond en rouge si l'email est invalide
 }
 else{  // Vérifie si la valeur saisie ne correspond pas à l'expression régulière
   loginInput.style.backgroundColor = 'red'; // Change la couleur de fond en vert
 }
});

passwordInput.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
    // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
    // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
    // etc ... meme système pour les autres cas 
    // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
    if(passwordInput.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(passwordInput.value.length>8){
      errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!passwordInput.value.match(charDecimal)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      userMessage.style.border ='5px solid red'
    }
    else{
      userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
      userMessage.style.border ='5px solid green'
    }
});
