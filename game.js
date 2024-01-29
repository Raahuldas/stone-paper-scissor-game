let choice;
let score

function start() {
    let readStorage = localStorage.getItem("score");

    if (readStorage === null || readStorage === "") {
        score = {
            win: 0,
            draw: 0,
            lose: 0,
        }
    } else {
        score = JSON.parse(readStorage);
    }

    document.getElementById("win").innerText=score.win;
    document.getElementById("draw").innerText=score.draw;
    document.getElementById("lose").innerText=score.lose;
}

function upadateScore() {
    localStorage.setItem("score", JSON.stringify(score));
}

function rst(){
    localStorage.clear();
    start();

    document.getElementById("compguess").innerText="";
    document.getElementById("yourguess").innerText="";
    document.getElementById("result").innerText="";
}

function stone() {
    choice = "stone";
    startGame();
    upadateScore();
}
function paper() {
    choice = "paper";
    startGame();
    upadateScore();
}
function scissor() {
    choice = "scissor";
    startGame();
    upadateScore();
}

function startGame() {

    let yourGuess = document.getElementById("yourguess");
    yourGuess.innerHTML = choice;

    //let randomguess= Math.ceil(Math.random()*10);
    let randomguess = Math.floor(Math.random() * 3) + 1
    let compGuess = document.getElementById("compguess");

    if (randomguess == 1) {
        compGuess.innerHTML = "stone";
    } else if (randomguess == 2) {
        compGuess.innerHTML = "paper";
    } else if (randomguess == 3) {
        compGuess.innerHTML = "scissor";
    } else {
        compGuess.innerHTML = "plz try again";
    }


    let scoreWin = document.getElementById("win");
    let scoreLose = document.getElementById("lose");
    let scoreDraw = document.getElementById("draw");

    let res = document.getElementById("result");

    if (compGuess.innerHTML === "stone" && choice === "paper" || compGuess.innerHTML === "paper" && choice === "scissor" || compGuess.innerHTML === "scissor" && choice === "stone") {
        res.innerHTML = "win";
        res.style.color = "green";
        score.win++;
        scoreWin.innerText = score.win;
    } else if (compGuess.innerHTML === choice) {
        res.innerHTML = "draw";
        res.style.color = "";
        score.draw++;
        scoreDraw.innerText = score.draw;
    } else {
        res.innerHTML = "lose";
        res.style.color = "red";
        score.lose++;
        scoreLose.innerText = score.lose;
    }
}
