const randomNumber1 = parseInt(prompt("Inserire il 1 numero da 1 a 100"));
const randomNumber2 = parseInt(prompt("Inserire il 2 numero da 1 a 100"));
const randomNumber3 = parseInt(prompt("Inserire il 3 numero da 1 a 100"));
// const randomNumberall = ["randomNumber1","randomNumber2","randomNumber3"]
// console.log(`${randomNumberall}`)
const sommaRondomnumber = (randomNumber1 + randomNumber2 + randomNumber3);
console.log(`la somma dei tuoi numeri è ${sommaRondomnumber}`)


const computerRandom1 = Math.floor(Math.random() * 100);
console.log(` ${computerRandom1}`)
const computerRandom2 = Math.floor(Math.random() * 100);
console.log(` ${computerRandom2}`)
const computerRandom3 = Math.floor(Math.random() * 100);
console.log(` ${computerRandom3}`)

const sommaComputernumber = (computerRandom1 + computerRandom2 + computerRandom3);
console.log(`la somma dei numeri del computer è ${sommaComputernumber}`)


if (sommaRondomnumber > sommaComputernumber) {
    console.log("Complimenti hai vinto");

    response.innerHTML = `Complimeti hai vinto i numeri da te inseriti sono: 
    n° ${randomNumber1},${randomNumber2},${randomNumber3}, la somma è ${sommaRondomnumber}. Quelli generati dal computer sono:
    n° ${computerRandom1},${computerRandom2},${computerRandom3}, la somma è  ${sommaComputernumber}`;

} else if (sommaRondomnumber < sommaComputernumber) {
    console.log("Mi dispiace ha vinto il computer");
    response.innerHTML = `Ritenta hai perso i numeri da te inseriti sono: 
    n° ${randomNumber1},${randomNumber2},${randomNumber3}, la somma è ${sommaRondomnumber}. Quelli generati dal computer sono:
    n° ${computerRandom1},${computerRandom2},${computerRandom3}, la somma è  ${sommaComputernumber}`;
}
else if (sommaRondomnumber === sommaComputernumber) {
    console.log("Avete pareggiato");

    response.innerHTML = `Ritenta avete pareggiato i numeri da te inseriti sono: 
    n° ${randomNumber1},${randomNumber2},${randomNumber3}, la somma è ${sommaRondomnumber}. Quelli generati dal computer sono:
    n° ${computerRandom1},${computerRandom2},${computerRandom3}, la somma è  ${sommaComputernumber}`;
}