const fleche_gauche = document.getElementById("fleche_gauche"); //on récupère l'image de la fleche gauche de l'html

const fleche_droite = document.getElementById("fleche_droite"); //on récupère l'image de la fleche droite de l'html

const image = document.getElementById("coupe_1"); //on récupère l'image de la coupe 1 de l'html

const tableau_coupe = ["img/hair-black-1.png", "img/hair-black-2.png", "img/hair-black-3.png"]; //tableau des images


let changement = 0 //index du tableau


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
//     } else if (changement == 2) {
//         fleche_droite.style.opacity = "0.5"; // La flèche droite est désactivée
//         fleche_gauche.style.opacity = "1";  // La flèche gauche est normale
//     } else {
//         fleche_gauche.style.opacity = "1";  // Toutes les flèches sont normales
//         fleche_droite.style.opacity = "1";
//     }
// }
// opacite_fleche();

if (changement === 0) { // Si l'image est la première, on désactive la flèche gauche
    fleche_gauche.style.opacity = 0.5; // Flèche gauche plus transparente
} else {
    fleche_gauche.style.opacity = 1; // Sinon, on la rend opaque
}

if (changement === tableau_coupe.length - 1) { // Si l'image est la dernière, on désactive la flèche droite
    fleche_droite.style.opacity = 0.5; // Flèche droite plus transparente
} else {
    fleche_droite.style.opacity = 1; // Sinon, on la rend opaque
}



//changement couleur de cheveux

const box_1 = document.getElementById("gris");

const box_2 = document.getElementById("jaune");

const box_3 = document.getElementById("bleu");

const tableau_couleur = ["img/hair-black-1.png", "img/hair-blond-1.png", "img/hair-turquoise-1.png"]; //tableau des images

//fonction changement de couleur 

function changement_couleur () {
    image.setAttribute ("src", tableau_couleur[changement])
}

//changement de couleur avec la box 2 pour couleur 2
box_2.addEventListener("click", function() {
    image.setAttribute ("src", tableau_couleur[1]);
});


// box_2.addEventListener("click", function() {
    
// });

// box_3.addEventListener("click", function() {
    
// });
