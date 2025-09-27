let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];



boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box clicked"); 
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }
        else
        {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwin();
    });
});
const checkwin = () =>{
    for(pattern of winPatterns)
        {
            if(boxes[pattern[0]].innerText !== "" &&
                boxes[pattern[0]].innerText === boxes[pattern[1]].innerText 
                && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText)
                {
                   showWinner(boxes[pattern[0]].innerText);
                }    
        }
};
const showWinner = (winner) =>{
    msg.innerText = `congratulations! ${winner} has won the game!`;
    msgcontainer.classList.remove("hidden");
    boxes.forEach((box) => (box.disabled = true));
};
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hidden");
};
const enableBoxes = () =>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })
};
resetButton.addEventListener("click",resetGame);