"use strict";
// 1) Quali sono i tipi primitivi principali in TypeScript?
//string, number, boolean, undefined, null, any, never
Object.defineProperty(exports, "__esModule", { value: true });
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var MyName = "Rossella";
var MyAge = 31;
var IsStudyingTS = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao" + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) { return a + b; };
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var VATcalc = function (price) { return ((price + (price * 100) / 22)).toString() + " iva inclusa"; };
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var LengthCalc = function (a, b) { return (a + b).length; };
// 7) Cos'è un Type Union e come si scrive?
//un Union Type è un Custom Type, che permette di definire una variabile come l'unione di due o più tipi di dato.
// La variabile così definita potrà essere uno o l'altro tipo che abbiamo indicato
// let UnionType : number | string | boolean | null = "ecco"
//8) Crea una variabile che possa contenere un numero, null o undefined.
var newUT = "x";
// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbersArray1;
var numbersArray2;
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple;
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
var student;
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var Panda = {
    brand: "Fiat",
    name: "Panda",
    engine: "the most powerful ever",
    wheels: 4
};
