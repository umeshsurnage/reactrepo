import { useState } from "react"

function Counter(){
// let count = 0;
// function Increment(){
//   count+=1;
//   console.log(count);
// }

// function Decrement(){
//   count-=1;
//   console.log(count);
// console.log(count);
// }
const[Count, setCount] = useState([])
let random = Math.floor(Math.random()*1000)
function Increment(){
  setCount([...Count,random])
}
function Decrement(){  
    setCount(Count-random)
}
function Delete(){
  setCount([])
}


  return<>
  <div className="wrapper">
  
  <div>
    <input type="button" value="Add row" onClick={Increment} />
    <input type="button" value="Delete All" onClick={Delete} />
  </div>
  {Count.map((item, index)=>{
    return <h1>{item}</h1>
  })}

  </div>
  </>
}
export default Counter