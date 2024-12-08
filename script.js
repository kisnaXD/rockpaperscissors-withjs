let userScore = 0;
let compScore = 0;
let a = ["rock", "paper", "scissors"];
let you = document.querySelector(".you");
let comp = document.querySelector(".comp");
const choices = document.querySelectorAll(".choice");
let result = document.querySelector("#msg")
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let i = Math.floor(Math.random()*a.length);
        let r = a[i];
        if((choice.id === "rock" && r === "scissors") || (choice.id === "scissors" && r === "paper") || (choice.id === "paper" && r === "rock")) {
            result.style.backgroundColor = "green";
            result.innerText = `Congratulations! You won, the computer selected ${r}`;
            userScore = userScore + 1;
        } else if((choice.id === "scisssors" && r === "rock") || (choice.id === "paper" && r === "scissors") || (choice.id === "rock" && r === "paper")) {
            result.style.backgroundColor = "red";
            result.innerText = `You lost! Computer selected ${r}`;
            compScore = compScore + 1;
        } else {
            result.innerText = `Its a Draw! You both chose ${r}`;
            result.style.backgroundColor = '#061A2F'
        }

        updateScores();
    })
})

function updateScores() {
    you.innerText = userScore;
    comp.innerText = compScore;
}