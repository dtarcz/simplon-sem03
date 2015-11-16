<?php

$phrase = 'Bonjour, je suis une phrase beaucoup plus longue. ';

echo $phrase . '<br>';
// une fonction qui retourne la longueur d'une chaîne de caractères
$nombredecaracteres = strlen($phrase);
// une fonction qui mélange les caractères :
$melange = str_shuffle($phrase);

echo "Il y a $nombredecaracteres caractères dans cette phrase. <br>";
echo $melange . '<br>';

echo 'On est le ' . date('d') . 'ème jour du mois ' .  date('m') . '<br>';

// une fonction qui remplace une chaîne de caractères par une autre
$phrase = str_replace('Bonjour', 'Coucou', 'Bonjour, je suis une phrase beaucoup plus longue. ');

echo $phrase;

// une fonction qui met tous les caractères en minuscule :
$phrase = 'COMMENT ÇA C\'EST EN MAJUSCULE ??';
$phrase = strtolower($phrase);

echo '<p>' . $phrase . '</p>';

// déclaration (définition) d'une fonction :
function direBonjour($nom)
{
  echo '<p>Bonjour ' . $nom . '</p>';
}
//appel de la fonction :
direBonjour('Marie');
direBonjour('David');
direBonjour('Christophe');

// la fonction qui calcule le volume d'un cône :
function VolCone($rayon, $hauteur)
{
  $volume = $rayon * $rayon * 3.14 * $hauteur * (1/3); // calcul du volume
  return $volume; // indique la valeur à renvoyer, ici le volume
}

$volume = VolCone(3,1);
echo 'Le volume d\'un cône de rayon 3<sub>cm</sub> et de hauteur 1<sub>cm</sub> est de ' . $volume .'<sub>cm<sup>3</sup></sub>.';
?>
