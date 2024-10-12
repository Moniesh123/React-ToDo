import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Create(){
    const [values,setvalues]=useState({
        name:"",
        email:"",
        phone:""
    })
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3000/Users',values)
            .then(res =>{
                console.log(res);
                navigate('/')

            })
            .catch(err => console.log(err));
    }

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">

                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={e=>setvalues({...values,name:e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={e=>setvalues({...values,email:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone" className="form-control" placeholder="Enter Phone" onChange={e=>setvalues({...values,phone:e.target.value})}/>
                    </div>
                    <button className="btn btn-success" >Submit</button>
                    <Link to={'/'} className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
            
        </div>
    )
}

export default Create;