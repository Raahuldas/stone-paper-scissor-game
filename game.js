//    let choice = prompt("choose any one from stone paper and scissors", "");

let choice;
let win=0;
let draw=0;
let lose=0;

function stone(){
    choice ="stone";
    startGame();
}
function paper(){
    choice="paper";
    startGame();
}
function scissor(){
    choice="scissor";
    startGame();
}

function startGame(){
    
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
    

    let scoreWin= document.getElementById("win");
    let scoreLose= document.getElementById("lose");
    let scoreDraw = document.getElementById("draw");

    let res = document.getElementById("result");
    
    if (compGuess.innerHTML === "stone" && choice === "paper" || compGuess.innerHTML === "paper" && choice === "scissor" || compGuess.innerHTML === "scissor" && choice === "stone") {
        res.innerHTML = "win";
        res.style.color="green";
        win++;
        scoreWin.innerText=win;
    }else if(compGuess.innerHTML===choice){
        res.innerHTML="draw";
        res.style.color="";
        draw++;
        scoreDraw.innerText=draw;
    }else if (choice == "") {
        res.innerHTML = "enter choice";
        res.style.color="red";
    } else {
        res.innerHTML = "lose";
        res.style.color="red";
        lose++;
        scoreLose.innerText=lose;
    }

}
