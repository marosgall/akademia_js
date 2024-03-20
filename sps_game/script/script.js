let userScore = 0
let compScore = 0
let firstGame = true
let winner = "Remíza"
let counter = {
    stone: 0,
    paper: 0,
    scissors: 0

}


function playGame() {
    let playBtn = document.getElementById("playBtn")
    let scoreDiv = document.getElementById("scoreDiv")
    let historyDiv = document.getElementById("historyDiv")

    compChoice = generateCompChoice()

    let userChoice = prompt("Zadaj K,P alebo N").toUpperCase()

    while (userChoice.length > 1 || !["K", "P", "N"].includes(userChoice)) {
        alert("Napíš K,P alebo N")
        userChoice = prompt("Zadaj K,P alebo N").toUpperCase()
    }

    console.log(`User choice: ${userChoice}`)
    
    
    findOutWinner(userChoice, compChoice)

    playBtn.value = "Ďalšie kolo"

    scoreDiv.innerHTML = `
        <h2 class="m-5">Skóre</h2>
        <h3 class="m-3">Hráč : PC</h3>
        <p class="fs-4">${userScore} : ${compScore}</p>
    `
    handleHistory(compChoice, userChoice)
    choicesCounter(compChoice, userChoice)
    firstGame = false
}

function handleHistory(compChoice, userChoice) {
    let result = document.createElement("p")
    result.className = "fs-4"
    result.innerText = `Vyhral: ${winner} - Hráč: ${userChoice} - PC: ${compChoice}`

    if (firstGame) {
        let heading = document.createElement("h2")
        heading.className = "m-5"
        heading.textContent = "História"
        historyDiv.appendChild(heading)
    }
    
    historyDiv.appendChild(result)
}

function generateCompChoice() {
    if (firstGame) {
        alert("V nasledujúcom okne zadaj K-kameň, P-papier alebo N-nožnice. Potom sa dozvieš kto vyhral.")
    }

    let tools = ["K", "P", "N"]

    let randomIndex = Math.floor(Math.random() * tools.length)
    
    let compChoice = tools[randomIndex]
    console.log(`Computer choice: ${compChoice}`)

    return compChoice
}

function findOutWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        console.log("Draw");
        return alert("Remíza!")
    } else if (
        (userChoice === "K" && compChoice === "N") ||
        (userChoice === "P" && compChoice === "K") ||
        (userChoice === "N" && compChoice === "P")
    ) {
        userScore++
        winner = "Hráč"
        console.log("User wins");
        return alert("Vyhral si!")

    } else {
        compScore++
        winner = "PC"
        console.log("Computer wins");
        return alert("Prehral si!")
    }
}

function choicesCounter(compChoice, userChoice) {
    switch (compChoice) {
        case "K":
            counter.stone++
            break
        case "N":
            counter.scissors++
            break
        default:
            counter.paper++
            break
    }

    switch (userChoice) {
        case "K":
            counter.stone++
            break
        case "N":
            counter.scissors++
            break
        default:
            counter.paper++
            break
    }

    console.log(counter);
    console.log("-----------");
}