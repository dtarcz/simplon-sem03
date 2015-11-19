var tabVoyelles = ["a", "e", "i", "o", "u", "y"];

do {
  var strSaisie = prompt("Saisir une phrase");
  var intCptVoyelles = 0;

  for (var i = 0; i < strSaisie.length; i++) {
    var strLettre = strSaisie.substring(i, i+1);

    if (tabVoyelles.indexOf(strLettre) != -1) {
      console.log(strLettre + " est une voyelle.");
      intCptVoyelles++;
    }
  }

  alert('Il y a ' + intCptVoyelles + ' Voyelles');

  if (intCptVoyelles <= 5) {
    alert('Pas assez de voyelles');
  } else if (intCptVoyelles >= 6 && intCptVoyelles <= 10) {
    alert("C'est presque bon...");
  } else if (intCptVoyelles > 10) {
    alert("Nombre de voyelles OK !")
  }

} while (intCptVoyelles <= 10);
