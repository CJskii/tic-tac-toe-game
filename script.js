// Event lisener for player selection
// Board Array
// Win conditions

// 1. Player selects X or O
// -- start turn function
// 2. Player click on the board
// 3. Player selection is recorded 
// 4. Computer turn 
// 5. Computer selection recorded
// check for win conditions -- end of turn
// 6. Print winner





/* 
      BOARD
    | 0 1 2 |
    | 3 4 5 |
    | 6 7 8 |
*/

document.addEventListener('DOMContentLoaded', () =>{
  console.log("Page has been loaded")
  const tiles = Array.from(document.querySelectorAll('.tile')) 
  const playerX = document.querySelector('.playerX')
  const playerO = document.querySelector('.playerO')
  const winner = document.querySelector('.winnerSpan')

} )