let gameSeq=[];
let userSeq=[];
let hScore=0;


let btns=["btn1","btn2","btn3","btn4"];

let level=0;
let started=false;

let h2=document.querySelector('h2');
let highscore=document.querySelector('.highscore');
let body=document.querySelector('body');


document.addEventListener('keypress',function(event){
    if(started==false){
        console.log("Game Started...");
        started=true;

        levelUp();
    }
});

//Function To Flash Button By Game
function gameFlash(btn){
    btn.classList.add("gameFlash"); 
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
} 
//Function To Flash Button By User
function userFlash(btn){
    btn.classList.add("userFlash"); 
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
} 

function overFlash(){
    body.classList.add("overFlash");
    setTimeout(function(){
        body.classList.remove("overFlash");
    },250);
}

//Function Level Up Of Game
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    //Choose random button 
    let ranIdx=Math.floor(Math.random()*4);
    let ranBtn=btns[ranIdx];
    let selBtn=document.querySelector(`.${ranBtn}`);
    // console.log(ranIdx);
    // console.log(ranBtn);
    // console.log(selBtn);
    gameSeq.push(ranBtn);
    console.log(gameSeq);
    gameFlash(selBtn);
}

function reSet(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
function seqChecker(index){
    // console.log("Current Level ",level);
    // let index=level-1;
    if(userSeq[index] == gameSeq[index]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,800);
        }
    }
    else{
        let score=level-1;
        h2.innerHTML=`Game Over! Your score was <b>${score}</b><br><br>Press any key to start Again`;
        overFlash();
        if(hScore<score){
            hScore=score;
            highscore.innerHTML=`Highest Score was ${hScore}`;
        }
        else{
            highscore.innerHTML=`Your Highest Score was ${hScore}`;
        }
        reSet();
    }
}

function btnPress(){
    let pressedBtn=this;
    userFlash(pressedBtn);
    // console.log(pressedBtn); 
    
    let pressedBtnid=pressedBtn.getAttribute('id');
    userSeq.push(pressedBtnid);

    seqChecker(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}




















// let btn1=document.querySelector('.btn1');
// btn1.addEventListener('click',function(event){
//     console.log("button clicked");  
// });
// let btn2=document.querySelector('.btn2');
// btn2.addEventListener('click',function(event){
//     console.log("button clicked");
// });
// let btn3=document.querySelector('.btn3');
// btn3.addEventListener('click',function(event){
//     console.log("button clicked");
// });
// let btn4=document.querySelector('.btn4');
// btn4.addEventListener('click',function(event){
//     console.log("button clicked");
// });