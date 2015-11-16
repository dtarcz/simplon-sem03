<?php
$prenommoins = [];
$prenomplus = [];
$tableau_artistes = array('Michel'=>'520', 'Johnny'=>'100000', 'Tarrus'=>'230', 'Bob'=>'14444', 'Kurt'=>'2700', 'Queen'=>'20000');

foreach ($tableau_artistes as $key => $value) {
  if ($value < 10000) {
    echo "$key a vendu $value albums, donc moins de 10.000 albums, <br>";
    $prenommoins[$key] = $value;
    //$prenommoins = ($prenommoins++);
  }
  else {
    echo "$key a vendu plus de 10.000 albums, <br>";
    $prenomplus[$key] = $value;
  }
}
echo "<p>";
foreach ($prenommoins as $key => $value) {
  # code...
  echo "$key n'est pas très connu.</p>";
}
var_dump($prenommoins);
echo "<p>";
foreach ($prenomplus as $key => $value) {
  # code...
  echo "$key a rendu son producteur content :) .</p>";
}
var_dump($prenomplus);
 ?>
