import React, {useEffect, useState} from "react";
import FormTable from "./FormTable";

const StudentForm = () => {

    const [data, setData] = useState({
        id: null,
        fname: '',
        lname: '',
        email: '',
        schname: '',
        erno: '',
        address: '',
        mobino: ''

    });

    const [expand, setExpand] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setItems(items)
    },[items]);

    const inputEvent = (event) => {
        const {name, value} = event.target;

        setData((oldData) => {
            return {
                ...oldData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        setExpand(true);
    }
    const btn = () => {
        setExpand(false);
    }

    const inputSubmit = ()=>{
        if (data.id === null){
            const stuid = (items.length + 1);
            const newdata = Object.assign(data, {id: stuid})
            setItems((newdata)=>{
                return[...newdata , data]
            })
        }else {
            pushToArray(items , data)
            function  pushToArray(arr , obj){
                const index = arr.findIndex((e)=>e.id===obj.id);
                arr[index]=obj;
            }
        }
        setData({
            id: null,
            fname: '',
            lname: '',
            email: '',
            schname: '',
            erno: '',
            address: '',
            mobino: ''
        })
    }

    const onDelete = (data) => {
            if (data) {
                pushToArray(items, data)

                function pushToArray(arr, obj) {
                    const index = arr.findIndex((e) => e.id === obj.id)
                    arr.splice(index, 1)
                    setItems((items) => {
                        return [...items]
                    })
                }
            }

        }

        const onUpdate = (data) => {
        setData(data);
        }

        return (
           <>
               <div>
                   <button type="button" className="btn btn-primary"
                           onClick={addEvent}
                           onDoubleClick={btn}
                   >
                       Add
                   </button>
                   <div>
                       <h1 className='d-flex justify-content-center mb-3'>
                           Student From
                       </h1>
                       <hr/>
                   </div>

                   <div className="container-fluid nav_bg">
                       <div className='row'>
                           <div className='col-10 mx-auto'>

                               {expand ? <form>

                                   <div className="mb-3 mt-4">
                                       <input type="text" className="form-control" id="exampleFormControlInput1"
                                              placeholder="FirstName" name={'fname'} value={data.fname}
                                              onChange={inputEvent}/>
                                   </div>


                                   <div className="mb-3">
                                       <input type="text" className="form-control" id="exampleFormControlInput1"
                                              placeholder="LastName" name={'lname'} value={data.lname}
                                              onChange={inputEvent}/>
                                   </div>

                                   <div className="mb-3">
                                       <input type="email" className="form-control" id="exampleFormControlInput1"
                                              placeholder="Email" name={'email'} value={data.email}
                                              onChange={inputEvent}/>
                                   </div>

                                   <div className="mb-3">
                                       <input
                                          type="text" className="form-control" id="exampleFormControlInput1"
                                          placeholder="SchoolName" name={'schname'} value={data.schname}
                                          onChange={inputEvent}
                                       />
                                   </div>

                                   <div className="mb-3">
                                       <input type="number" className="form-control" id="exampleFormControlInput1"
                                              placeholder="EnrollmentNo." name={'erno'} value={data.erno}
                                              onChange={inputEvent}/>
                                   </div>


                                   <div className="mb-3">
                               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                         placeholder={'Address'} name={'address'} value={data.address}
                                         onChange={inputEvent}/>
                                   </div>

                                   <div className="mb-3">
                                       <input type="number" className="form-control" id="exampleFormControlInput1"
                                              placeholder="MobileNo." name={'mobino'} value={data.mobino}
                                              onChange={inputEvent}/>
                                   </div>

                                   <button type="button" className="btn btn-primary" onClick={inputSubmit}>Submit Form
                                   </button>

                               </form> : null}
                           </div>
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
                               {items.map((val, index) => {
                                   return <FormTable
                                      key={index}
                                      data={val}
                                      deleteItem={onDelete}
                                      updateItem={onUpdate}
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

    export default StudentForm;