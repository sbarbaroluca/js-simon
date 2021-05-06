// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Creare un array vuoto dove pushare i numeri random creati dal Pc
var numRandomArray = [];

// Dopo aver creato la funzione per stabilire se un numero è già presente in un array pushare solo nel caso il computer non trova una corrispondenza
while (numRandomArray.length < 5) {
var numPc = getRndNumber(1,100);
var sameNumber = checkArrayNumber(numRandomArray, numPc);
numRandomArray.push(numPc);
}
console.log(numRandomArray);

// Creare Un alert che espone i 5 numeri casuali generati dal Pc
alert(numRandomArray);



// Far partire un timer di 30 secondi 
// Creare funziona che genera un numero random 

// Creare una funzione per controllare che un numero non sia già presente nell'array

