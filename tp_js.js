const fleche_gauche = document.getElementById("fleche_gauche");
const fleche_droite = document.getElementById("fleche_droite");
const image = document.getElementById("cheveux_noirs_courts");
const tabCoupe = ["img/hair-black-1.png", "img/hair-black-2.png", "img/hair-black-3.png"];
let changement = 1


fleche_gauche.addEventListener("click", function () { 

    if (changement<=3) {
        image.setAttribute("src", tabCoupe[changement]);
    } else {
        changement--
    }
    })








// fleche_droite.addEventListener("click", function () { 
//         image.setAttribute("src", "img/hair-black-3.png");
//     })



//changement couleur de cheveux

// const changement = document.getElementById("cheveux_noirs_courts");
// const box_1 = document.getElementById("gris");
// const box_2 = document.getElementById("jaune");
// const box_3 = document.getElementById("bleu");

// box_1.addEventListener("click", function() {
    
// });

// box_2.addEventListener("click", function() {
    
// });

// box_3.addEventListener("click", function() {
    
// });
