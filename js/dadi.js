const randomNumberperson = Math.floor(Math.random() * 6) + 1;
const randomNumbercomputer = Math.floor(Math.random() * 6) + 1;
const response = document.getElementById ("response");

console.log("il tuo numero è " + randomNumberperson);
console.log("il numero per il computer è " + randomNumbercomputer);

if (randomNumberperson > randomNumbercomputer) {
    console.log("Complimenti hai vinto");
    
    response.innerHTML = `Complimeti hai vinto i numeri generati sono: 
    n° ${randomNumberperson} per il giocatore e il
    n° ${ randomNumbercomputer } per il computer`;

} else if (randomNumberperson < randomNumbercomputer) {
    console.log("Mi dispiace ha vinto il computer");
    response.innerHTML = `Mi dispiace hai perso i numeri generati sono: 
    n° ${randomNumberperson} per il giocatore e il
    n° ${ randomNumbercomputer } per il computer.
    Prova a tirare nuovamente i dadi!!`
}
else if (randomNumberperson === randomNumbercomputer) {
    console.log("Avete pareggiato");

    response.innerHTML =`Avete pareggiato i numeri generati sono: 
    n° ${randomNumberperson} per il giocatore e il
    n° ${ randomNumbercomputer } per il computer.
    Prova a tirare nuovamente i dadi!!`
}