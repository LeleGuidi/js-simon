//FUNCTION

//Creare numeri random
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Aggiungere un elemento ad un array solamente se questo non è già presente all'interno dell'array
function checkNumbersBeforePush(array, number) {
    if (!array.includes(number)) {
        array.push(number);
    }
}

//Funzione countdown
function clockFunction() {
    clockBox.innerHTML = clock;
    clockRow.append(clockBox)
    if (clock == 0) {
        clearInterval(countdown)
        
    }
    clock -= 1
}

//MAIN
const numberBoxes = document.createElement("div");
const numberRow = document.getElementById("number_row");
const clockRow = document.getElementById("clock_row")
const clockBox = document.getElementById("clock_box")

//Prendere 5 numeri casuali
let cpuNumbers = [];
while (cpuNumbers.length < 5) {
    let cpuNumber = randomNumbers(1, 100);
    checkNumbersBeforePush(cpuNumbers, cpuNumber);
}

numberBoxes.classList.add("cpu_numbers")

//Stampare a video i numeri casuali
for (let i = 0; i < 5; i++) {
    numberBoxes.innerHTML = cpuNumbers[i]
    numberRow.append(numberBoxes.cloneNode(true))
}

//Avviare il countdown di 30 secondi stampando a video ogni secondo
const countdown = setInterval(clockFunction, 1000)
let clock = 3;

