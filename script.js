let box=document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let newgame= document.querySelector(".newgame");
let msg= document.querySelector(".win");
let container= document.querySelector(".winner");
let turnO= true;
const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
box.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
   })
}

)
const checkwinner=() =>{
    for(let pattern of winpatterns){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("Winner");
                showwinner(pos1);
            }
        }
    }
}
const showwinner=(winner)=>{
    msg.innerText= `Congrats!!!!!Winner is ${winner}`;
    container.classList.remove("hide");
    disableboxes();
}
const disableboxes=()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
}
const enableboxes=()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerText="";
    }
}
const resetgame=()=>{
    turnO=true;
    enableboxes();
    container.classList.add("hide");
}
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);