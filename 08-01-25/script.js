// * Mini test pour capter event du Clavier
// document.addEventListener('keyup', function(eventClavier){
//     console.log('Yes Moi ECRIRE');
//     console.log(eventClavier);
//     console.log(eventClavier.key);
// });


const input = document.querySelector("#input-test");
const textInput = document.querySelector("p");

function afficherInput(jePeuxMettreCeQueJeVeuxIci) {
    textInput.innerText = jePeuxMettreCeQueJeVeuxIci.target.value;
}
input.addEventListener("keyup", afficherInput);


// effacer le texte de l'input et du texte qui s'affiche dans le paragraphe quand on focus l'input

function effacerInput(e) {  // si le E est clair, c'est qu'il n'est pas écrit à l'intérieur de la fonction donc pas besoin de mettre un E, laisser vide --> cf code fil rouge
    input.value = "";
    textInput.innerText = "";
    console.log(effacerInput);
}
input.addEventListener("focus", effacerInput);


// //solution formateur - fonction anonyme
// input.addEventListener("keyup", () => {
//     textInput.innerText = input.value
// });