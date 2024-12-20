const fleche_gauche = document.getElementById("fleche_gauche"); //on récupère l'image de la fleche gauche de l'html

const fleche_droite = document.getElementById("fleche_droite"); //on récupère l'image de la fleche droite de l'html

const image = document.getElementById("coupe_1"); //on récupère l'image de la coupe 1 de l'html

const box_1 = document.getElementById("gris");
const box_2 = document.getElementById("jaune");
const box_3 = document.getElementById("bleu");

let couleur = "black";
let num = 1;
fleche_gauche.style.opacity = "0.5"; // La flèche gauche est désactivée dès l'arrivée sur la page


fleche_droite.addEventListener("click", function () {   
    if (num < 3) {
        num++;
        image.setAttribute ("src", `img/hair-${couleur}-${num}.png`);
        fleche_gauche.style.opacity = "1";
    }
    if (num == 3) {
        fleche_droite.style.opacity = "0.5";
    }
});

fleche_gauche.addEventListener("click", function () {   
    if (num > 1) {
        num--;
        image.setAttribute ("src", `img/hair-${couleur}-${num}.png`);
        fleche_droite.style.opacity = "1";
    }
    if (num == 1) {
        fleche_gauche.style.opacity = "0.5";
    }
});



// changement couleur de cheveux
box_1.addEventListener("click", function () {
    couleur= "black";
    image.setAttribute ("src", `img/hair-${couleur}-${num}.png`);
});

box_2.addEventListener("click", function () {
    couleur= "blond";
    image.setAttribute ("src", `img/hair-${couleur}-${num}.png`);
});

box_3.addEventListener("click", function () {
    couleur= "turquoise";
    image.setAttribute ("src", `img/hair-${couleur}-${num}.png`);
});

