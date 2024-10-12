import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function Update(){
    const navigate=useNavigate()

    const {id}=useParams();
    const [values,setvalues]=useState({
        name:"",
        email:"",
        phone:""
    })
    useEffect(() => {
        
        axios.get('http://localhost:3000/Users/' + id)
            .then(res => {
                setvalues(res.data)
            })
            .catch(err => console.log(err));
    }, []);
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:3000/Users/'+ id,values)
        .then(res =>{
            console.log(res);
            navigate('/')

        })
        .catch(err => console.log(err));
    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">

            <h1>Update User</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" value={values.name} onChange={e=>setvalues({...values,name:e.target.value})} />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter Email" value={values.email} onChange={e=>setvalues({...values,email:e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Phone:</label>
                    <input type="text" name="phone" className="form-control" placeholder="Enter Phone" value={values.phone} onChange={e=>setvalues({...values,phone:e.target.value})}/>
                </div>
                <button className="btn btn-success">Update</button>
                <Link to={'/'} className="btn btn-primary ms-3">Back</Link>
            </form>
        </div>
        
    </div>
    )
}

export default Update;