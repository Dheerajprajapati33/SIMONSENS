let gameSeq = [];
let userSeq = [];

let btns = ["hotpink", "green", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// game start
document.addEventListener("keypress", function() {
     if(started == false){
        console.log("game is started");
         started = true;

         levelUp();
     }
});
//button flash function
function gameFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
    btn.classList.remove("flash");
   }, 250);
}
// use flash
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash");
    }, 250);
 }
// level up
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
// random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
// checked the ans
function checkAns(idx){
     if(userSeq[idx] === gameSeq[idx]) {
       if(userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
       } 
     } else{
        h2.innerHTML = `Game Over!  Your score was <b>${level}</b> <br> Press any key to start. `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
     }
}

function btnPress(){
    let btn = this;
    // gameFlash(btn);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// reset
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
