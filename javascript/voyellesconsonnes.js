/*
var phrase = '', nbre_voyelle = ''; //définition de variables

phrase = (prompt('Saisissez une phrase :')) //demande d'entrer une phrase

var array_phrase = phrase.split('');

for (var i = 0; i < array_phrase.length; i++) {
  array_phrase[i]
}
nbre_voyelle = (/[aeiouy]/i.test(phrase));

console.log(nbre_voyelle);

console.log(/[aeiouy]/i.test(phrase)); // voyelles dans la phrase retourne true ??

if (/[aeiouy]/i.test(phrase)) {

} else {

}
*/
var strSaisie = prompt("Saisir une phrase");

var tabVoyelles = ["a", "e", "i", "o", "u", "y"];
var intCptVoyelles = 0;

for (var i = 0; i < strSaisie.length; i++) {
  // console.log(strSaisie.substring(i, i+1));
  var charLettre = strSaisie.substring(i, i+1);

  for (var j = 0; j < tabVoyelles.length; j++) {
    if (charLettre == tabVoyelles[j]) {
      console.log(charLettre + " est une voyelle.");
      intCptVoyelles++;
    }
  }
}
