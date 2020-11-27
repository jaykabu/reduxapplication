import React from "react";

const FormTable = (props) => {

    const updateNote = ()=>{
        props.updateItem(props.data)
    }

    const deleteNote = ()=>{
        props.deleteItem(props.data)
    }

    const stuData = props.data
    return (
       <>
           <tr>
               <th> {stuData.id}</th>
               <td>{stuData.fname}</td>
               <td>{stuData.lname}</td>
               <td>{stuData.email}</td>
               <td>{stuData.schname}</td>
               <td>{stuData.erno}</td>
               <td>{stuData.address}</td>
               <td>{stuData.mobino}</td>
               <button type="button" className="btn btn-primary mr-2" onClick={()=>{updateNote()}}>Update</button>
               <button type="button" className="btn btn-primary" onClick={()=>{deleteNote()}}>Delete</button>
           </tr>

       </>
    )
}

export default FormTable;