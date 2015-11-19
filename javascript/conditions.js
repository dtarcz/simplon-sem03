if (true) {
  console.log("Ce message s'est bien affiché.");
}
if (false) {
  console.log("Inutile d'insister, ce message ne s'affichera pas.");
}

if (confirm('Voulez-vous exécuter le code Javascript de cette page ?')) {
  console.log('Le code a bien été executed !');
}

// la structure if, else
if (confirm('Pour accéder à ce site vous devez avoir plus de 18ans, cliquez sur OK si c\'est le cas.')) {
  alert('Vous allez être redirigé vers le site.');
} else {
  alert("Désolé, vous n'avez pas accès à ce site.");
}

// la struture if, else if, else
var floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));

if (floor == 0) {//premiere condition a tester
  alert("Vous vous trouvez déjà au rdc.")
} else if (-2 <= floor && floor <= 30) {//sera testée si la première échoue
  alert("En route pour l'étage n°" + floor + ' !');
} else {//si aucune condition ne se vérifie, alors celle-ci sera exécutée...
  alert("L'étage que vous avez indiqué n'existe pas, désolé :) ");
}

/*
Prenons un exemple : nous avons un meuble avec quatre tiroirs contenant chacun des objets différents, et il faut que l'utilisateur puisse connaître le contenu du tiroir dont il entre le chiffre. Si nous voulions le faire avec if else ce serait assez long et fastidieux :
*/
/*
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

if (drawer == 1) {
    alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
} else if (drawer == 2) {
    alert('Contient du matériel informatique : des câbles, des composants, etc.');
} else if (drawer == 3) {
    alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
} else if (drawer == 4) {
    alert('Contient des vêtements : des chemises, des pantalons, etc.');
} else {
    alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}
*/
/*
C'est long, non ? Et en plus ce n'est pas très adapté à ce que l'on souhaite faire. Le plus gros problème est de devoir réécrire à chaque fois la condition ; mais avec switch c'est un peu plus facile :
*/
var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :'));

switch (drawer) {
    case 1:
        alert('Contient divers outils pour dessiner : du papier, des crayons, etc.');
    break;

    case 2:
        alert('Contient du matériel informatique : des câbles, des composants, etc.');
    break;

    case 3:
        alert('Ah ? Ce tiroir est fermé à clé ! Dommage !');
    break;

    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
    break;

    default:
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}

// LA TERNAIRE
var startM = 'Votre catégorie : ',
  endM,
  adult = confirm('Êtes-vous majeurs ?');

endM = adult ? '18+' : '-18';

alert(startM + endM);
