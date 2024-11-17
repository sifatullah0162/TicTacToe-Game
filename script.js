let boxes = document.querySelectorAll(".box");

let resetBtn=document.querySelector(".reset-btn");

let newGameBtn=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");

let msg =document.querySelector("#msg");
let player1=true;

const resetGame = ()=>{
player1=true;
enableBoxes();
msgContainer.classList.add("hide");
}


const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

boxes.forEach((box)=>{

box.addEventListener("click", ()=>{
  console.log("box was clicked");
  if(player1){
    box.innerText="O";
    player1 =false;
  }
    else{
      box.innerText="X";
      player1 =true;
    }
  box.disabled=true;

  checkWinner();

});

});


const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}


const disableBoxes=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}


const showWinner= (winner)=>{
  if(winner==='O')
  msg.innerText=`Congratulation , winner is Player-1 , who picked O`;
else
msg.innerText=`Congratulation , winner is Player-2 , who picked X`;

  msgContainer.classList.remove("hide");
  disableBoxes();
}

const checkWinner = ()=>{

  for(let pattern of winPatterns){
   let pos1val = boxes[pattern[0]].innerText;
   let pos2val = boxes[pattern[1]].innerText;
   let pos3val = boxes[pattern[2]].innerText;


   if(pos1val != "" && pos2val != "" && pos3val!=""){
    if(pos1val === pos2val && pos2val === pos3val){
      console.log("winner",pos1val);
      showWinner(pos1val);
    }
   }
  }

}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
