alert('Hello World !');

console.log('coucou console');

var number = 2;
console.log(typeof number);

var text = 'Mon magnificient texte';
console.log(typeof text);

var aBoolean = false;
console.log(typeof aBoolean);

var result = 3 + 2;
console.log(result);

var nb1 = 5, nb2 = 7, result;
result = nb1 * nb2;
console.log(result);

var divisor = 3, result1, result2, result3;

result1 = (16 + 8) / 2 - 2 ;
result2 = result1 / divisor;
result3 = result1 % divisor;

console.log(result1);
console.log(result2);
console.log(result3);

// la CONCATENATION
var hi = 'Bonjour ', name = 'toi ', result;
result = hi + name;
alert(result);

var text = 'Bonjour ';
text += 'toi :) ';
alert(text);

// INTERAGIR AVEC L'UTILISATEUR
var userName = prompt('Entrez votre prénom : ');

console.log( userName );

var start = 'Bonjour ', name, end = ' !', result;

name = prompt('Quel est votre prénom ? ');
result = start + name + end;
alert(result);

// convertir une string en number
var first, second, result;

first = prompt('entrez un chiffre');
second = prompt('entrez un autre chiffre');
result = parseInt(first) + parseInt(second);

alert(result);

// COMPARAISON :
var nb1 = 2, nb2 = 2, nb3 = 4, result;

result = nb1 == nb2; // on spécifie 2 variables avec l'opérateur de comparaison entre-elles
alert(result); //affiche "true", la condition est donc vérifiée car les 2 variables contiennent bien la même valeur

result = nb1 == nb3;
alert(result);

result = nb1 < nb3;
alert(result);

// conditions normales ou triple égale ?
var number = 4, text = '4', result;

result = number == text;
alert(result); // Affiche  « true » alors que « number » est un nombre et « text » une chaîne de caractères

result = number === text;
alert(result); // Affiche « false » car cet opérateur compare aussi les types des variables en plus de leurs valeurs

// COMBINER LES OPÉRATEURS :
var condition1, condition2, result;

condition1 = 2 > 8; // false
condition2 = 8 > 2; // true

result = condition1 && condition2;
alert(result);

// qu'on peut résumer en :
var result = 2 > 8 && 8 > 2;
alert(result);
