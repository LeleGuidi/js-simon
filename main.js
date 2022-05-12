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
const numberBoxes = document.createElement("div");
const numberRow = document.getElementById("number_row");
const clockRow = document.getElementById("clock_row")
const clockBox = document.getElementById("clock_box")
const userRow = document.getElementById("user_number")
const input = document.getElementById("input_number")
const check = document.getElementById("check")
const messages = document.getElementById("messages")

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
let clock = 3;
const countdown = setInterval(function() {
    clockBox.innerHTML = clock;
    if (clock == 0) {
        clearInterval(countdown)
        clockBox.style.display = "none";
        userRow.style.display = "block";

        //I div contenenti i numeri del computer vengono rimossi 
        const boxes = document.querySelectorAll(".cpu_numbers")
        for (let i = 0; 0 < boxes.length; i++) {
            boxes[i].remove();
        }
        
    }
    clock -= 1
}, 1000)

//Al click del bottone il computer prenderà il numero inserito nella text area
let userChoice = []
let result = 0;
check.addEventListener(`click`, 
    function(){
        const userNumber = Number(input.value)
        //Piccolo controllo se è numero o meno
        if (isNaN(userNumber) || userNumber == "") {
            input.value = ""
            messages.style.display = "block"
            messages.innerHTML = "Inserisci un numero"
        } else {
            //Se è un numero verrà inserito nell'array dedicato ai numeri dell'utente
            //Piccola pulizia nel caso precedentemente l'utente abbia inserito un testo invece del numero
            messages.innerHTML = "";
            messages.style.display = "none"

            //Si inserisce nell'array dell'utente il numero da lui indicato solo se non è già stato inserito precedentemente
            if (userChoice.includes(input.value)) {
                input.value = ""
                messages.style.display = "block"
                messages.innerHTML = "Furbetto, non puoi inserire lo stesso numero più volte 😤"
            } else {
                userChoice.push(Number(input.value))
                //Il numero viene visualizzato nella riga dedicata
                numberBoxes.innerHTML = input.value
                numberRow.append(numberBoxes.cloneNode(true))
                input.value = ""
                
            }
            
            //Se i numeri inseriti dall'utente sono 5 allora la sezione di input si blocca e si controllano i numeri inseriti
            if (userChoice.length === 5) {
                userRow.remove()
                for (i = 0; i < 5; i++) {
                    if (cpuNumbers.includes(userChoice[i])) {
                        result = result + 1
                    }
                }
                //Se i numeri inseriti dall'utente sono 5 allora la sezione di input si blocca e si controllano i numeri inseriti
                if (result != 0) {
                    messages.style.display = "block"
                    messages.innerHTML = `Complimenti, hai beccato ${result} numero/i 😜`

                } else {
                    messages.style.display = "block"
                    messages.innerHTML = `Mi dispiace, non hai beccato nessun numero 💩`
                }
            }

        }
    }
)
