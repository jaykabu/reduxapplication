import React from "react";
import UseForm from "./UseForm";
import Validateinfo from "./Validateinfo";
import StuFormTable from "./StuFormTable";

const Form = () => {

    const {handleChange, values, handleSubmit, errors , items , onDelete , onUpdate} = UseForm(Validateinfo);
    return (
       <>
           <div className="container-fluid nav_bg">
               <div className='row'>
                   <div className='col-10 mx-auto'>

                       <form onSubmit={handleSubmit}>
                           <div>
                               <h1 className="mb-5 d-flex justify-content-center">
                                   StudentForm
                               </h1>
                           </div>

                           <div className="mb-3">
                               <input type="text" className="form-control" id="exampleFormControlInput1"
                                      placeholder="FirstName" name='fname' value={values.fname}
                                      onChange={handleChange}/>
                               {errors.fname && <p><span style={{color: 'red'}}>{errors.fname} </span></p>}
                           </div>

                           <div className="mb-3">
                               <input type="text" className="form-control" id="exampleFormControlInput2"
                                      placeholder="LastName" name='lname' value={values.lname} onChange={handleChange}/>
                               {errors.lname && <p><span style={{color: 'red'}}>{errors.lname} </span></p>}
                           </div>

                           <div className="mb-3">
                               <input type="email" className="form-control" id="exampleFormControlInput3"
                                      placeholder="Email" name='email' value={values.email} onChange={handleChange}/>
                               {errors.email && <p><span style={{color: 'red'}}>{errors.email} </span></p>}
                           </div>

                           <div className="mb-3">
                               <input type="text" className="form-control" id="exampleFormControlInput4"
                                      placeholder="SchoolName" name='schname' value={values.schname}
                                      onChange={handleChange}/>
                               {errors.schname && <p><span style={{color: 'red'}}>{errors.schname} </span></p>}
                           </div>

                           <div className="mb-3">
                               <input type="number" className="form-control" id="exampleFormControlInput5"
                                      placeholder="EnrollmentNo." name='erno' value={values.erno}
                                      onChange={handleChange}/>
                               {errors.erno && <p><span style={{color: 'red'}}>{errors.erno} </span></p>}
                           </div>

                           <div className="mb-3">
                           <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                     placeholder="Address" name='address' value={values.address}
                                     onChange={handleChange}/>
                               {errors.address && <p><span style={{color: 'red'}}>{errors.address} </span></p>}
                           </div>

                           <div className="mb-3">
                               <input type="number" className="form-control" id="exampleFormControlInput6"
                                      placeholder="MobileNo." name='mobino' value={values.mobino}
                                      onChange={handleChange}/>
                               {errors.mobino && <p><span style={{color: 'red'}}>{errors.mobino} </span></p>}
                           </div>
                           <button type="submit" className="btn btn-primary">Submit Form</button>
                       </form>

                   </div>
               </div>
           </div>
           <div className="container-fluid nav_bg">
               <div className='row'>
                   <div className='col-10 mx-auto'>

                       <div className={'d-flex justify-content-center mt-3 mb-3'}>
                           <h3>Student From List</h3>
                       </div>
                       <table className="table">
                           <thead>
                           <tr>
                               <th scope="col">Id</th>
                               <th scope="col">FirstName</th>
                               <th scope="col">LastName</th>
                               <th scope="col">Email</th>
                               <th scope="col">SchoolName</th>
                               <th scope="col">EnrollmentNo.</th>
                               <th scope="col">Address</th>
                               <th scope="col">MobileNo.</th>
                               <th scope="col-2">Action</th>
                           </tr>
                           </thead>
                           <tbody>


                           {items.map((val , index)=>{
                               return <StuFormTable
                               key={index}
                               data={val}
                               updateData={onUpdate}
                               deleteData={onDelete}
                               />
                           })}
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>

       </>
    )
};

export default Form;

