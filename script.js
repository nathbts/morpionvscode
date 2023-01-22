// Verifier les informations du joueur et du jeu
const statut = document.querySelector("h2")
let jeuactif = true
let joueuractif = "X"
let etatjeu = [ "", "", "", "", "", "", "", "", ""];

// les possibilites de victoire pour le joueur 
const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Messages qui s'affichent au joueur
const gagne = () => `le joueur ${joueuractif} a gagne`
const egalite = () => "egalite"
const tourjoueur = () => `c'est au tour du joueur ${joueuractif} `;

statut.innerHTML = tourjoueur();

// Interaction avec les bouttons disponibles
document.querySelectorAll("cell").forEach(cell => cell.addEventListener("click", gestionClicCase))
document.querySelector("recommencer").addEventListener("click", recommencer);

// Fonction qui permet au joueur de relancer le jeu
function recommencer(){
    joueuractif = "X"
    jeuactif = true
    etatjeu = ["", "", "", "", "", "", "", "", ""]
    statut.innerHTML = tourJoueur()
    document.querySelectorAll("cell").forEach(cell => cell.innerHTML = "")
};