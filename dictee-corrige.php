<?php
$dictee = "Les courses en mer

Sur les quais, la foule agglutinée qui lance à cor et à cri un au revoir aux équipages annonce l'imminence du départ. \"Ohé !\" Des mains et des mouchoirs, semblables à des oriflammes bariolées, sont agités par la famille, les amis, des enfants... Puis les ancres surjalées sont relevées: \"Larguez les amarres !\"

Qu'il s'agisse de Christophe Colomb, de Florence Arthaud ou du charismatique Eric Tabarly, que ce soit à bord de trois-mâts, de catamarans ou de simples canots, les navigateurs, inlassables, depuis la nuit des temps, ont sillonné les océans. Tous ces découvreurs d'îlots inconnus, ces marins sportifs familiers des top niveaux et ces scientifiques de haut vol ont confié leur phénoménal destin à la mer.

Dépourvus du moindre biscuit de survie, certains se sont sustentés avec des harengs pacqués, des clovisses charnues, avec du phytoplancton, voire des rhodophycées, et ont ainsi survécu. Croisant des vraquiers ou des thoniers, vainquant des vents cycloniques, ils se sont aussi dégagés de lames qui les auraient engloutis.

Que n'auraient-ils donné alors pour rallier les atolls ensoleillés du Pacifique ou même pour voir, tel Jonas, les fanons des baleines ! \"Terre à bâbord !\" A mille milles des côtes, loin du pays qui les a vus naître, ils ont vécu dans l'immensité pélagique, là où l'horizon rejoint l'infini.

Quels qu'ils soient, un jour, après s'être laissé buriner par les embruns salés et s'être mesurés à la force des flots lors des courses transocéaniques, hantés par l'inénarrable aventure des mers, ils ont retrouvé la terre ferme.";

function extraire_mots($texte, $nbCarac=5, $motRecherche="")
{
  $textenett = str_replace(".", "", $texte);
  $textenett = str_replace(",", "", $textenett);
  $textenett = str_replace("\n", "", $textenett);
  $textenett = str_replace("\r", "", $textenett);

  $dictionnaire = explode(" ", $textenett);

  $grandsMots = array();

  foreach ($dictionnaire as $mot) {

    if ($mot == $motRecherche) {
      echo "<p>Le mot " . $motRecherche . " existe dans le texte.</p>";
    }

    if (strlen($mot) >= $nbCarac) {
      $grandsMots[] = $mot;
    }
  }
  return($grandsMots);
}
$nbLettres = 8;
$tableauResult = extraire_mots($dictee, $nbLettres, "buriner");
echo "<p>Il y a " . count($tableauResult) . " mots de plus de " . $nbLettres . " caractères dans le texte.</p>";

?>
