/*
ternary operator - shortcut for if/else
    takes 3 operands
      1. a condition with ?
      2. expression if True
      3. expression if False
   
  condition ? expression IfTrue : expression IfFalse
  */

checkWinner(true);
function checkWinner(win) {
  win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
