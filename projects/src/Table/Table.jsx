import { useState } from "react"
function Table() {  

  const [data, setdata] = useState([
    {id:1, name: "umesh", email: "umesh@gmail.com" },
    {id:2, name: "jeet", email: "jeet@gmail.com" },
    {id:3, name: "archit", email: "archit@gmail.com" },
  ])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function addName(e) {
    setName(e.target.value)   
  }
  function addEmail(e) {
    setEmail(e.target.value);
  }

  function update() {
    setdata([...data, {id:data.length+1, name: name, email: email }])
    setName('');
    setEmail('')
  }

  const onDelete = (id) => {
    const filteredData = data.filter((value, index) => value.id !== id)
    setdata(filteredData)
  }

  function onEdit(id) {
    let updateName = prompt()
    let updateEmail = prompt()
    
    
  let newData = [...data]
  newData[id-1]={...newData[id-1], id:id, name:updateName, email:updateEmail};
  setdata(newData)

  };
  
  return (
    <>
      <div className='wrapper2 userTable'>
        <h2>User Data</h2>
        <table>
          <tr>
            <td colSpan={2}>
              <input type='text' onChange={addName} value={name} />
            </td>
            <td colSpan={2}>
              <input type='text' onChange={addEmail} value={email} />
            </td>
            <td>
              <button onClick={update}>Add</button>
            </td>
          </tr>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Action</th>
          </tr>
          {data.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>
                  <button type='' onClick={() =>{onEdit(value.id)}}>Edit</button>
                </td>
                <td>
                  <button  onClick={() => onDelete(value.id)}> Delete </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </>
  )
}
export default Table

