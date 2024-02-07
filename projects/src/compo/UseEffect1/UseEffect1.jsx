import { useState, useEffect } from "react";

function UseEffect (){
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

useEffect(()=>{
  console.log('inside useEffect');
  
  // return ()=>{
  //   setCount(0);
  //   setCount2(0)
  // }
},[count2])

const minus = ()=>setCount(count-1)
const plus = ()=>setCount(count+1)
const plus2 = ()=>setCount2(count2+1)
  return <>
  <div className="wrapper">
    <h1>UseEffect</h1>
    <hr />
  <h1>Count is:- <u>{count}</u></h1>
  <h1>Count is:- <u>{count2}</u></h1>
  <button onClick={minus} className="btn-primary">-</button> &nbsp;&nbsp;
  <button onClick={()=>setCount(0)} className="btn-primary">0</button>
  &nbsp;&nbsp;
  <button onClick={plus} className="btn-primary">+</button>
  <hr />
  <button onClick={plus2} className="btn-primary">+</button>
  </div>
  
   

  </>
}
export default UseEffect;