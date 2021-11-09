import { useState } from "react";
import './mytable.css';
//import ReactDOM from "react-dom";

function Student() {
    const [sid, setId] = useState("S-1001");
    const [sname, setName] = useState("Adam Smith");
    const [saddress, setAddress] = useState("Thypil villa, nedumangad");
    const [scourse, setCourse] = useState("React");
    return(
        <>
         <table className="Table">
            <thead className="Table-header">
               <tr>
                 
               </tr>
               <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Address</th>
                <th>Course</th>
               </tr>
            </thead>
             <tr className="Table-body">
               <td>{sid}</td>
               <td>{sname}</td>
               <td>{saddress}</td>
               <td>{scourse}</td>
         </tr>
         <tr className="Table-body">
             <td><input id="sid" type="text"></input></td>
             <td><input id="sname" type="text"></input></td>
             <td><input id="saddress" type="text"></input></td>
             <td><input id="scourse" type="text"></input></td>
         </tr>
         <tr className="Table-body">
        <td colspan="4">
            <button onClick={()=>{
               setId(document.getElementById("sid").value);
               setName(document.getElementById("sname").value);
               setAddress(document.getElementById("saddress").value);
               setCourse(document.getElementById("scourse").value);
            }}
              type="button" className="cust-btn">Update</button>
        </td>           
         </tr>  
         </table>
      </>  
    )
}
export default Student;