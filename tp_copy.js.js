const fleche_gauche = document.getElementById("fleche_gauche"); //on récupère l'image de l'html

const fleche_droite = document.getElementById("fleche_droite"); //on récupère l'image de l'html

const image = document.getElementById("coupe_1"); //on récupère l'image de l'html

const tableau_coupe = ["img/hair-black-1.png", "img/hair-black-2.png", "img/hair-black-3.png"]; //tableau des images

let changement = 0


// cette fonction permet de changer l'image
function premiere_coupe () {
    image.setAttribute ("src", tableau_coupe[changement])
}


//fonctionne mais ne s'arrête pas
// fleche_gauche.addEventListener("click", function () { 
//     if (changement > 0) { //si l'index plus petit que 0, enlever 1 à l'index
//         changement --;
    
//     } else {
//         changement = tableau_coupe.length -1 //si l'index vaut dernier nombre du tableau
//     }
//     premiere_coupe ();

// })


//fonctionne et s'arrête !!!!
fleche_gauche.addEventListener("click", function () {
    if (changement > 0) {
        changement--;
        premiere_coupe();
    }
});

// Si changement est égal à tableau_coupe.length - 1 (dernier index), l'image ne change pas, le clic est ignoré.
fleche_droite.addEventListener("click", function () {   
    if (changement < tableau_coupe.length - 1) {
        changement++;
        premiere_coupe();
    }
});





// fonction pour changer l'opacité des flèches

// function opacite_fleche() {
//     if (changement == 0) {
//         fleche_gauche.style.opacity = "0.5"; // La flèche gauche est désactivée
//         fleche_droite.style.opacity = "1";  // La flèche droite est normale
//     } else if (changement == tableau_coupe.length - 1) {
//         fleche_droite.style.opacity = "0.5"; // La flèche droite est désactivée
//         fleche_gauche.style.opacity = "1";  // La flèche gauche est normale
//     } else {
//         fleche_gauche.style.opacity = "1";  // Toutes les flèches sont normales
//         fleche_droite.style.opacity = "1";
//     }
// }
// opacite_fleche();

//changement coupe de cheveux

//si (if) condition 
//alors instruction 1 (changement image)
//et si condition 
//alors instruction 2 (changement d'image à nouveau)
//sinon 
//instruction (pas de changement d'image)






// fleche_droite.addEventListener("click", function () { 
//         image.setAttribute("src", "img/hair-black-3.png");
//     })






//changement couleur de cheveux

// const changement = document.getElementById("coupe_1");
// const box_1 = document.getElementById("gris");
// const box_2 = document.getElementById("jaune");
// const box_3 = document.getElementById("bleu");

// box_1.addEventListener("click", function() {
    
// });

// box_2.addEventListener("click", function() {
    
// });

// box_3.addEventListener("click", function() {
    
// });
