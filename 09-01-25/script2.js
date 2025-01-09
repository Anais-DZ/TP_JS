//! Le nom de la classe commence tjrs par majuscule
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(paramNameUser, paramMailUser, paramPhoneUser) {
    // Attribut en IN MODE indispensable pour créer des new UserProfile
    this.nameUser = paramNameUser;
    this.mailUser = paramMailUser;
    this.phoneUser = paramPhoneUser;
    // Attribut en outMode
    this.contact = paramPhoneUser + paramMailUser;
    this.resume = this.getProfileInfo();
    this.count = 0
    // this._nom = nom;  
    }
    getPhone(){
        if(user==="connected")
        return this.phoneUser;
    }
    getProfileInfo() {
    console.log('this ',this);
    return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son mail : ${this.mailUser}
            son Tél : ${this.phoneUser}`;
    }
}

const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
console.log(exampleUser1);
const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");


console.log(exampleUser2.nameUser);
exampleUser2.getProfileInfo();
const exampleUser3 = new UserProfile("yann", "yann@gmail.com", "098765432");
exampleUser3.getProfileInfo();


//exo : faire une classe IMC
class Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
    this.nomUser = nom;
    this.poidsUser = poids;
    this.tailleUser = taille;
    this.poidsTaille = poids + taille;
    this.resume = this.display();
    }
    //* Le calcul
    calculImc() {
        console.log(this.poidsUser/(this.tailleUser ** 2));

    }
    //* Affichage
    display() {
        console.log('this ',this);
    return `imc de l'utilisateur : 
            son nom : ${this.nomUser}
            son poids : ${this.poidsUser}
            sa taille: ${this.tailleUser}`;
    }
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55)
];
list.???((uneInstanceImc) => uneInstanceImc.display());