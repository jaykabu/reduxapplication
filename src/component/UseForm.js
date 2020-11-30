import React, {useState} from "react";

const UseForm = (Validateinfo) => {

    const [values, setValues] = useState({
        id:null,
        fname: '',
        lname: '',
        email: '',
        schname: '',
        erno: '',
        address: '',
        mobino: ''
    })

    const [items , setItems] = useState([]);
    const [errors, setErrors] = useState({});

    const [isSubmitting , setIsSubmitting] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target
        setValues(() => {
            return {
                ...values,
                [name]: value
            }
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (values.id === null) {
            const stuid = (items.length + 1);
            Object.assign(values, {id: stuid})

            setItems((newdata) => {
                return [...newdata, values]
            })

            //
        } else {
            pushToArray(items, values)

            function pushToArray(arr, obj) {
                const index = arr.findIndex((e) => e.id === obj.id);
                arr[index] = obj;
            }
        }
        setErrors(Validateinfo(values));
        setIsSubmitting(true);

        setValues({
            id:null,
            fname: '',
            lname: '',
            email: '',
            schname: '',
            erno: '',
            address: '',
            mobino: ''
        })
    }

    const onDelete = (data)=>{
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

    const onUpdate = (data)=>{
        setValues(data);
    }


    return {handleChange , values , handleSubmit , errors , items , onDelete , onUpdate}
};

export default UseForm;