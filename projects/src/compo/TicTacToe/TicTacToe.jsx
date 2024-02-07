import { useState } from "react"

function TicTacToe(){
let empty = [
  [-1,-1,-1],
  [-1,-1,-1],
  [-1,-1,-1]
]
const [currentPlayer, setCurrentPlayer] = useState(0);
  const[board, setBoard] = useState(empty)
const winningCombinations = [
  [0,3,6],[1,4,7],[2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]
]

const checkWinner = ()=>{
  const flatArr = board.flat()
  for(let combination of winningCombinations){
    const[a,b,c]=combination;
    if(flatArr[a]!==-1 && flatArr[b]!== -1 && flatArr[c]!==-1)
    if(flatArr[a]=== flatArr[b] && flatArr[b]===flatArr[c]){
      return true;
    }
  }
  return false;
}

const handleClick = (rowIndex, cellIndex) => {  
  if(board[rowIndex][cellIndex] !== -1)  {
    return;
  }
    board[rowIndex][cellIndex] = currentPlayer;
    setBoard(JSON.parse(JSON.stringify(board)))

    if(checkWinner()){
     alert(getText(currentPlayer)+ ' has won!');
     setBoard(empty)
     return <h1>The winner is {getText(currentPlayer)} </h1>
    }else{      
      setCurrentPlayer(currentPlayer==0 ? 1:0)
    }

    const isBoardFull = () => {
      for (let row of board) {
          for (let cell of row) {
              if (cell === -1) {
                  return false; // If any cell is empty, the board is not full
              }
          }
      }
      return true; // All cells are filled, indicating a draw
  };
  };
  
  const getText = (cellValue)=>{
    switch(cellValue){
      case -1:
        return "";
      case 0:
        return 'X';
      case 1:
        return 'O'
    }
  }
  return<>
    <div className="wrapper">
      <h1>Tic Tac Toe</h1>
      <hr />
      <h2>Player : {getText(currentPlayer)}</h2>
      <div className="parent-tictac-div">
        {board.map((row, rowIndex)=>{
          return <div className="row">
          {row.map((cell, cellIndex)=>{
            return <div className="cell" onClick={()=>{
              return handleClick (rowIndex, cellIndex)
            }}>{getText(cell)}</div>
          })}
        </div>
        })}
        <p><button onClick={()=>setBoard(empty)} type="">Reset the board</button> </p>
      </div>
    </div>
  </>
}
export default TicTacToe

// backup
// import { useState } from "react"

// function TicTacToe(){
// let empty = [
//   [-1,-1,-1],
//   [-1,-1,-1],
//   [-1,-1,-1]
// ]
// const [currentPlayer, setCurrentPlayer] = useState(0);
//   const[board, setBoard] = useState(empty)
// const winningCombinations = [
//   [0,3,6],[1,4,7],[2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]
// ]

// const checkWinner = ()=>{
//   const flatArr = board.flat()
//   for(let combination of winningCombinations){
//     const[a,b,c]=combination;
//     if(flatArr[a]!==-1 && flatArr[b]!== -1 && flatArr[c]!==-1)
//     if(flatArr[a]=== flatArr[b] && flatArr[b]===flatArr[c]){
//       return true;
//     }
//   }
//   return false;
// }

// const handleClick = (rowIndex, cellIndex) => {    
//     board[rowIndex][cellIndex] = currentPlayer;
//     setBoard(JSON.parse(JSON.stringify(board)))

//     if(checkWinner()){
//      alert(getText(currentPlayer)+ ' has won!');
//      setBoard(empty)
//      return <h1>The winner is {getText(currentPlayer)} </h1>
//     }else{      
//       setCurrentPlayer(currentPlayer==0 ? 1:0)
//     }
//   };
  
//   const getText = (cellValue)=>{
//     switch(cellValue){
//       case -1:
//         return "";
//       case 0:
//         return 'X';
//       case 1:
//         return 'O'
//     }
//   }
//   return<>
//     <div className="wrapper">
//       <h1>Tic Tac Toe</h1>
//       <hr />
//       <h2>Player : {getText(currentPlayer)}</h2>
//       <div className="parent-tictac-div">
//         {board.map((row, rowIndex)=>{
//           return <div className="row">
//           {row.map((cell, cellIndex)=>{
//             return <div className="cell" onClick={()=>{
//               return handleClick (rowIndex, cellIndex)
//             }}>{getText(cell)}</div>
//           })}
//         </div>
//         })}
//         <p><button onClick={()=>setBoard(empty)} type="">Reset the board</button> </p>
//       </div>
//     </div>
//   </>
// }
// export default TicTacToe