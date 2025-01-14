const firebaseConfig = {
    apiKey: "AIzaSyAuJfMi9S8R_6TxX3Wp58CeWgJLNqdZ9e0",
    authDomain: "projet-dev-25993.firebaseapp.com",
    projectId: "projet-dev-25993",
    storageBucket: "projet-dev-25993.firebasestorage.app",
    messagingSenderId: "978819006867",
    appId: "1:978819006867:web:86f192744c5244140aa866"
};

/**
 * Initialisation de Firebase avec la configuration fournie.
 * @function initializeFirebase
 */
firebase.initializeApp(firebaseConfig);

/**
 * Référence à la base de données Firebase.
 * @type {Object}
 */
const dbRef = firebase.database().ref();

/**
 * Référence au noeud "tasks" dans la base de données.
 * @type {Object}
 */
const allTasksRef = dbRef.child("tasks");