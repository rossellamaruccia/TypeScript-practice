// 1) Quali sono i tipi primitivi principali in TypeScript?
//string, number, boolean, undefined, null, any, never

import { number } from "prop-types"


// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let MyName: string = "Rossella"
let MyAge: number = 31
let IsStudyingTS: boolean = true

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

const greet = (name: string) => {
    return "Ciao" + name
}
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
let sum = (a:number, b:number) : number => { return a + b }

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
let VATcalc = (price: number) : string => {return ((price + (price * 100)/22)).toString() + " iva inclusa" }

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
let LengthCalc = (a: string, b: string): number => { return (a + b).length }

// 7) Cos'è un Type Union e come si scrive?
//un Union Type è un Custom Type, che permette di definire una variabile come l'unione di due o più tipi di dato.
// La variabile così definita potrà essere uno o l'altro tipo che abbiamo indicato
// let UnionType : number | string | boolean | null = "ecco"

//8) Crea una variabile che possa contenere un numero, null o undefined.
let newUT: number | null | undefined = "x"

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
let numbersArray1: number[]
let numbersArray2: Array<string>

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const myTuple: [string, string, string, number, number]

// 12) Qual è la differenza tra type e interface?
// La interface, similmente alle classes, è un insieme di più variabili a cui si può assegnare uno o più tipi di valore.
// Il type dichiara che tipo di valore è una variabile.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
    firstName: string,
    lastName: string,
    age: number,
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
    email: Required<string>,
    telephone?: number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
let student: [name: string, vote: number]

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Vehicle {
    brand: string,
    name: string,
    engine: string,
}

interface Auto extends Vehicle {
    wheels: 4
}


// 17) Crea un oggetto che implementi l'interfaccia Auto.

const Panda: Auto = {
    brand: "Fiat",
    name: "Panda",
    engine: "the most powerful ever",
    wheels: 4
}

// 18) Cosa sono i Generics in TypeScript?
// Generics è un tipo che viene passato come argomento per una interface, serve ad inserire un valore in una interface senza definirne subito il tipo.


// 19) È possibile avere più tipi generici in un'interfaccia?
// sì, vanno separati con virgola tra le angle brackets.


// 20) Crea un'interfaccia generica per una risposta API.

interface data<d1, d2, d3, d5> {
    data: d1,
    moredata: d2,
    ...
}