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

  let board = ["", "", "", "", "", "", "", "", "" ]
  let currentPlayer = "X"
  let isGameActive = true
  const PLAYERX_WON = "PlayerX WON"
  const PLAYERO_WON = "PlayerO WON"
  const TIE = "TIE"

  let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

  playerX.addEventListener('click', () => {
    currentPlayer = "X"
    console.log(currentPlayer)
  })

  playerO.addEventListener('click', () => {
    currentPlayer = "O"
    console.log(currentPlayer)
  })

  tiles.forEach((tile, index) => {
    tile.addEventListener('click', (e) => {
      let element = e.target
      index = element.dataset.index
      if (currentPlayer == "X"){
        e.target.textContent = currentPlayer
        board[index] = currentPlayer
        currentPlayer = "O"
      } else if (currentPlayer == "O"){
        e.target.textContent = currentPlayer
        board[index] = currentPlayer
        currentPlayer = "X"
      }
      checkBoard()
    })
  })

  function checkBoard(){
    let arrayX = []
    let arrayO = []
      for (let i = 0; i < board.length; i++){
        const playerSelection = board[i]
        if (playerSelection == "X"){
          arrayX.push(i)
        } else if (playerSelection == "O"){
          arrayO.push(i)
        }
        
      }
    const arrayXsorted = arrayX.slice().sort()
    const arrayOsorted = arrayO.slice().sort()
    console.log("ArrayX " + arrayXsorted)
    console.log("ArrayO " + arrayOsorted)
    compareArray(arrayXsorted, winCondition)
  }


} )