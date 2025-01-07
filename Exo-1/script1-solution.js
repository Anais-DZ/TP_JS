// TODO :JS map phase 1
// TODO : côté template html rajouter plein de <p></p>
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt via getElementsByTagName
// TODO :On va faire un console log de lesTxt 
//* On récupère TOUS les <p>
const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);
console.log(lesTxt[0].innerHTML);
//TODO JS map Phase 2 
//TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
//TODO On console log la variables textesTab 
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);
//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
textesTab.map(function(uneCaseTab,index){
    uneCaseTab.innerText = "LOL JE SUIS HACKERMAN";
    uneCaseTab.style.color = "red";
    uneCaseTab.style.cursor = "pointer";
    console.log('System indice :',index)
    uneCaseTab.addEventListener('click',()=>{
        console.log("SUPER CA CLICK");
    });
});

//autre synthaxe en fonction
textesTab.map((x,i) => {
    x.style.color = "red";
    console.log(i)
});
console.log(textesTab);

textesTab.map(toto => toto.addEventListener('click',megaClick));
textesTab.map(toto => toto.addEventListener('click',()=>{
    console.log("SUPER CA CLICK");
}));

function megaClick(){
    console.log('mega click ');
}