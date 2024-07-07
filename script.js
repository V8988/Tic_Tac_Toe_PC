let boxes = document.getElementsByClassName("box");
let reset = document.querySelector("#reset");
let newGameButt=document.querySelector("#new_game");
let msgContainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg")
let turnO = true; //playerO or playerX
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],];
boxes = Array.from(boxes);
boxes.forEach((box,idx)=>{
    box.addEventListener('click',()=>{
        let but=`Button ${idx} was clicked`
        console.log(but);
        if(turnO){
            box.innerText="O";
            turnO =false;
        }
        else{
            box.innerText="X";
            turnO =true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const reStartGame=()=>{
    turnO = true;
    msgContainer.classList.add('hide');
    enabe();
    alert("It's PlayerO Turn");
}
const enabe=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratultions Winner is Player${winner}`;
    msgContainer.classList.remove('hide');
    disable();
}
const matchDrawMsg=(message)=>{
    msg.innerText=message;
    msgContainer.classList.remove('hide');
    disable();
}
const checkWinner  = () =>{
    for(pat of winPatterns){
        let pos1Val=boxes[pat[0]].innerText;
        let pos2Val=boxes[pat[1]].innerText;
        let pos3Val=boxes[pat[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner",pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}
const matchDraw=()=>{
    boxes.forEach((box)=>{
        if(box.innerText != ""){
            
        }
    })
}
reset.addEventListener('click',reStartGame);
newGameButt.addEventListener('click',reStartGame);