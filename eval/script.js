class CompteBancaire {
    constructor(titulaire) {
        this._titulaire = titulaire;
        this._virement = this.virer();
        this._retrait = this.retirer();
        this._solde = this.crediter();
    }
    
    // Ajoute un montant au solde
    crediter() {
        return + 1000
    }
    // Retirer un montant au solde
    retirer() {
        
    }
    virer() {
    }

    // Renvoie la description du compte
    decrire() {
        console.log(`${this._titulaire}, le solde de votre compte est de : ${this._solde} euros`)
    }
}

// Main, gère 3 comptes bancaires dans un tableau associatif
const lesComptes = {
    Alex: new CompteBancaire("Alex"),
    Clovis: new CompteBancaire("Clovis"),
    Marco: new CompteBancaire("Marco"),
};


// lecture tableau associatif ou Objet["truc"]
// Crédite et décrit chaque compte
for (let key in lesComptes) {
    lesComptes[key].crediter(1000);
}

// un retrait de 100 par Alex
lesComptes["Alex"].retirer(100);
// un petit virement: Marco Vire 300 à Clovis
lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
// un petit retrait incorrect (doit déclencher erreur custom) : 
// Alex fait un retrait de 1200
lesComptes["Alex"].retirer(1200);
// bilan : faire une déscription de tous les comptes en console (ou DOM ?)
for (let key in lesComptes) {
    console.log(lesComptes[key].decrire());
}