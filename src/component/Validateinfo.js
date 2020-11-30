import React from "react";

const Validateinfo = (values)=>{

    let errors = {}

    if (!values.fname.trim()){
        errors.fname = " FirstName required"
    }

    if (!values.lname.trim()){
        errors.lname = "LastName required"
    }

    //email
    if (!values.email.trim()){
        errors.email = "Email required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email Address is invalid"
    }

    if (!values.schname.trim()){
        errors.schname = "SchoolName required"
    }

    if (!values.erno.trim()){
        errors.erno = "Enrollment Number required"
    }

    if (!values.address.trim()){
        errors.address = "Address required"
    }

    // if (!values.mobino.trim()){
    //     errors.mobino = "Mobile number required"
    // }else if (/^\d{10}$/.test(values.mobino)){
    //     errors.mobino = "Mobile number is invalid"
    // }

    return errors;
};

export default Validateinfo;
