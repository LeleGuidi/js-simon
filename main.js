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


//MAIN
const boxes = document.createElement("div");
const row = document.getElementById("row");

//Prendere 5 numeri casuali
let cpuNumbers = [];
while (cpuNumbers.length < 5) {
    let cpuNumber = randomNumbers(1, 100);
    checkNumbersBeforePush(cpuNumbers, cpuNumber);
}

boxes.classList.add("cpu_numbers")
//Stampare a video i numeri casuali
for (let i = 0; i < 5; i++) {
    boxes.innerHTML = cpuNumbers[i]
    row.append(boxes.cloneNode(true))
}

