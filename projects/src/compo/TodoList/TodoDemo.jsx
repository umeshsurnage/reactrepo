import { useState } from "react";

function TodoDemo(){
 
let [mainData, setMainData]  = useState([])
let [name, setName]=useState('')
let [email, setEmail]=useState('')

function changeName(e){
  let value = e.target.value
  setName(value);
}
function changeEmail(e){
  let value = e.target.value;
  setEmail(value)
}
function update(){
  setMainData([...mainData, {name,email}]);
  setName('');
  setEmail('')
}

console.log(mainData);
return<>
 <div className="wrapper">
  <h1>To do</h1>
  <input type="text" value={name} onChange={changeName} />
  <input type="text" value={email} onChange={changeEmail}/>
  <button onClick={update}>Add</button>
  {mainData.map((value,index)=>{
    return <div key={index}>
      <p>{value.name} {value.email}</p>
    </div>
  })}
 </div>
  </>
}

export default TodoDemo;

