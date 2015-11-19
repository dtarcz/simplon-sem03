var age = parseInt(prompt('Quel est votre âge ? : Entrez juste des chiffres'));

// il faudrait tout réduire à 4 choix...
/* donc ce code ne va pas :
switch (age) {
  case 1:
    alert("Vous n'êtes pas encore majeur.");
  break;
  case 2:
    alert("Vous êtes majeur mais pas encore sénior.");
  break;
  case 3:
    alert("Vous êtes sénior mais pas encore retraité.");
  break;
  case 4:
    alert("Vous êtes retraité, profitez du temps qu'il vous reste ! ");
  break;

  default:
    alert("Ceci n'est pas un âge ??");

}
*/

// CORRIGÉ :
if (age <= 0) {
  alert("Noon, sans blague, comment pouvez-vous avoir moins d'1 an ?");
} else if (1 <= age && age <= 17) {
  alert("Vous n'êtes pas encore majeur.");
} else if (18 <= age && age <= 49) {
  alert("Vous êtes majeur mais pas encore seniors.");
} else if (50 <= age && age <= 59) {
  alert("Vous êtes senior mais pas encore retraité.");
} else if (60 <= age && age <= 120) {
  alert("Vous êtes retraité, profitez du temps qu'il vous reste ! ");
} else if (age > 120) {
  alert("Félicitation !");
} else {
  alert("Le monsieur vous demande votre âge !");
}
