// import { useState } from "react"

// function Forms(){
//   const[inputName, setInputName]=useState('')
//   function changeInputName(e){
//     setInputName(e.target.value)
//   }
//   function changeInputMobile(e){
//     setInputEmail(e.target.value)
//   }
//   return<>
//   <div className="wrapperForm">
//   <h1>React Forms</h1>
//   <table>
//   <tr>
//       <td className="lable">Name</td>
//       <td className="lable">
//         <input value={inputName} onChange={changeInputName} type="name" class="form-control" placeholder="Name" />
//         </td>
//     </tr>
//     <tr>
//       <td className="lable">Mobile</td>
//       <td className="lable">
//         <input value={inputMobile} onChange={changeInputMobile} type="number" class="form-control" placeholder="Mobile No" /></td>
//     </tr>
//     <tr>
//       <td className="lable">Email</td>
//       <td className="lable"><input type="email" class="form-control" placeholder="Email" /></td>
//     </tr>
//     <tr>
//       <td className="lable">Address</td>
//       <td className="lable"><input type="address" class="form-control" placeholder="Address" /></td>
//     </tr>
//     <tr>
//       <td className="lable">Gender </td>
//       <td className="lable">
//         <input type="radio" name="gender" value="male" checked />
//         <label for="male">Male</label><br/>
//         <input type="radio" name="gender" value="female"/>
//         <label for="female">Female</label>
//       </td>
//     </tr>
//     <tr>
//       <td className="lable">Address</td>
//       <td className="lable"><input type="address" class="form-control" placeholder="Address" /></td>
//     </tr>
//     <tr>
//       <td className="lable">State</td>
//       <td className="lable">
//         <select id="inputState" class="form-control">
//           <option selected>Choose...</option>
//           <option>Maharashtra</option>
//           <option>Delhi</option>
//           <option>Punjab</option>
//         </select>
//       </td>
//     </tr>
//     <tr>
//       <td className="lable">Password</td>
//       <td className="lable"><input type="password" class="form-control" placeholder="Password"/></td>
//     </tr>
//     <tr>
//       <td className="lable"></td>
//       <td className="lable">
//         <input class="form-check-input" type="checkbox" id="gridCheck" checked />
//         <label class="form-check-label">Terms and conditions</label>
//       </td>
//     </tr>
//     <tr>
//       <td className="lable"></td>
//       <td className="lable"><button type="submit" id="submit" class="btn-primary">Register</button>&nbsp; &nbsp;<button type="reset" class="btn-primary">Reset</button></td>
//     </tr>
//   </table>
//   </div>
//   </>
// }
// export default Forms