//erreur JS

// prenom;
// alert('Ce message ne s\'affichera pas');

// try {
//     prenom;
//     alert('Bonjour');
// }catch(erreurQueJeNommeCommeJeVeux) {
//     alert(`Errreur détectée, stoppez tout
//         Le nom de l'erreur
//         ${erreurQueJeNommeCommeJeVeux.name}

//         Le message de l'erreur
//         ${erreurQueJeNommeCommeJeVeux.message}

//         L'emplacement de l'erreur
//         ${erreurQueJeNommeCommeJeVeux.stack}`);   
// }
// alert(`Ce message s'affiche correctement`);



// function division(){
//     let x = prompt('Entrez un premier nombre (numérateur)');
//     let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
//     if(isNaN(x) || isNaN(y) || x == '' || y == ''){
//         throw new Error('Merci de rentrer deux nombres');
//     }else if(y == 0){
//         throw new Error('Division par 0 impossible')
//     }else{
//         alert(x / y);
//     }
// }

//on fera en try catch, l'exeption
//division(); //! ne pas décommenter si on fait le catch plus bas

// try {
//     division();
// }catch(err) {
//     alert(err.message);
// }finally{
//     alert(`Ce message s'affichera quoiqu'il arrive`);
// }


// const apiDiv = document.querySelector('.apiContacter');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  async () => {
//     //Data va récup Toutes les données de l'api
//     const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
//     const dataTransformed = await response.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
// };
// contactApi();


//autre façon de l'écrire
// async function contactApi() {
//     //Data va récup Toutes les données de l'api
//     const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);
//     //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
//     const dataTransformed = await response.json();
//     console.log(dataTransformed);
//     apiDiv.innerText = dataTransformed.latitude + ' ' + dataTransformed.longitude;
// };
// contactApi();



//Autre exemple de Fetch d'API avec ASYNC - AWAIT et un peu de sécu en plus via un I
// const apiDiv2 = document.querySelector('.apiContacter2');

// const contactApiSecure =  async () => {
//     const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
//     console.log(rawData);
    
//     // Vérification du statut de la réponse
//     if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//         console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//         return; // Sortir de la fonction si la réponse n'est pas OK
//     }

//     const transformedData = await rawData.json();
//     console.log(transformedData);
//     apiDiv2.innerHTML = transformedData.name.fr;
// }
// contactApiSecure();


//Version secu ++ avec du TRY CATCH //pas compris
// const contactApiSecurePlus =  async () => {
//     try {
//         const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
//         console.log(rawData);
        
//         // Vérification du statut de la réponse
//         if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
//             console.error("Erreur lors de la récupération des données : ", rawData.statusText);
//             return; // Sortir de la fonction si la réponse n'est pas OK
//         }

//         const transformedData = await rawData.json();
//         console.log(transformedData);
//         apiDiv2.innerHTML = transformedData.name.fr;
//     } catch (error) {
//         console.error("Erreur lors de l'appel à l'API : ", error);
//     }
// }
// contactApiSecurePlus();




//exo 20 premiers Pokemons
// const apiDiv3 = document.querySelector('.apiContacter3');

// const contactApi3 =  async () => {
//     const response = await fetch('https://pokeapi.co/api/v2/pokemon');
//     console.log(response);
//     console.log(response.ok);
//     console.log(response.status);

//     const dataTransformed = await response.json();

//     for (let i=0 ; i<dataTransformed.results.length ; i++) {
//     const ajoutNom = document.createElement("div");

//     ajoutNom.innerText = dataTransformed.results[i].name;
//     apiDiv3.appendChild(ajoutNom);
//     console.log(dataTransformed.results[i].name);
//     }
// };
// contactApi3();

//autre exercice
const apiDiv4 = document.querySelector('.apiContacter4');

const body = document.querySelector('body');
        body.style.backgroundColor = "lightgreen";

const contactApi4 = async () => {
    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/2');
    console.log(response);

    const dataTransformed = await response.json();

    for (let i=0 ; i<dataTransformed.length ; i++) {


        const image = document.createElement("img");
        image.src = dataTransformed[i].sprites.regular;
        image.style.width = "30%";
        image.style.height = "auto";
        apiDiv4.appendChild(image);

        const tropDeNoms = document.createElement("div");
        tropDeNoms.innerText = dataTransformed[i].name.fr;
        apiDiv4.appendChild(tropDeNoms);

        const types = document.createElement("div");
        types.innerText = dataTransformed[i].types[0].name;
        apiDiv4.appendChild(types);

        const poids= document.createElement("div");
        poids.innerText = dataTransformed[i].weight;
        apiDiv4.appendChild(poids);

        const taille = document.createElement("div");
        taille.innerText = dataTransformed[i].height;
        apiDiv4.appendChild(taille);
        

        
        
        console.log(dataTransformed[i]);
    }      
};
contactApi4();



// solution formateur

// let divPokemonUI = document.querySelector("#superPokemonList");

// const fetchPokemonGen9 = async () => {
//     try {
//         const response = await fetch("https://tyradex.vercel.app/api/v1/gen/9");
//         if (!response.ok) {
//             throw new Error('Erreur lors de la récupération des données');
//         }
//         const data = await response.json();
//         console.log(data);
        

         // Générer des cartes pour chaque Pokémon
//         data.forEach(pokemon => {
//             const cartePokemon = document.createElement('div');
//             cartePokemon.classList.add('card','m-3', 'p-3','bg-light');
//             cartePokemon.style.width = '18rem';
//             cartePokemon.innerHTML = DOMPurify.sanitize(`
//               <img src="${pokemon.sprites.regular}" class="card-img-top" alt="${pokemon.name.fr}">
//               <div class="card-body">
//                 <h5 class="card-title">${pokemon.name.fr}</h5>
//                 <p class="card-text">Type: ${pokemon.types.map(type => type.name).join(', ')}</p>
//                 <p class="card-text">Poids: ${pokemon.weight}</p>
//                 <p class="card-text">Taille: ${pokemon.height}</p>
//             </div>`);
//             divPokemonUI.appendChild(cartePokemon);
             // Ajouter la carte au conteneur
//         });
//     } catch (error) {
//         console.error('Erreur:', error);
//     }
// }

// fetchPokemonGen9();

