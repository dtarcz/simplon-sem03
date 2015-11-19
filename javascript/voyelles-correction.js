var strSaisie = prompt("Saisir une phrase");

var tabVoyelles = ["a", "e", "i", "o", "u", "y"];

for (var i = 0; i < strSaisie.length; i++) {
  console.log(strSaisie.substring(i, i+1));
}
