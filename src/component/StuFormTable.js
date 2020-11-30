import React from "react";

const StuFormTable = (props) => {

    const stuData = props.data

    return (
       <>
           <tr>
               <th>{stuData.id}</th>
               <td>{stuData.fname}</td>
               <td>{stuData.lname}</td>
               <td>{stuData.email}</td>
               <td>{stuData.schname}</td>
               <td>{stuData.erno}</td>
               <td>{stuData.address}</td>
               <td>{stuData.mobino}</td>
               <button type="button" className="btn btn-primary mr-2" onClick={()=>{
                   props.onUpdate(props.data)
               }}>Update</button>
               <button type="button" className="btn btn-primary" onClick={()=>{
                   props.onDelete(props.data)
               }}>Delete</button>
           </tr>
       </>
    )
};

export default StuFormTable;