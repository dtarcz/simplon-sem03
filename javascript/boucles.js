/*
var number = 1;

while (number < 10) {
  number++;
}

alert(number);
*/

/*
var prenoms = '', prenom,
  proceed = true; // une variable de boucle

while (proceed) {
  prenom = prompt("Entrez donc un prénom :");

  if (prenom) {
    prenoms += prenom + ' '; //ajoute le nouveau prénom et un espace derrière
  } else {
    proceed = false; //aucun prénom d'entré, donc on fait en sorte d'invalider la condition
  }
}

alert(prenoms); // affiche les prénoms à la suite
*/


// LA BOUCLE FOR
/*
for (var i = 0; i < 5; i++) {
  alert('Itération n°' + i);
}
*/
// EXEMPLE AVEC LES PRÉNOMS

/*
for (var prenoms = '', prenom; true;){
  prenom = prompt('ENtrez un prénom : ');

  if (prenom) {
    prenoms += prenom + ' ';
  } else {
    break;
  }
}

alert(prenoms);
*/

for (var i = 0, prenoms ='', prenom; true; i++) {
  prenom = prompt('Entrez un prénom :');

  if (prenom) {
    prenoms += prenom + ' ';
  } else {
    break;
  }
}
alert('Il y a ' + i + ' prénoms :\n\n' + prenoms);
