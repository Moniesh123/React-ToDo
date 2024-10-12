import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";


function Home() {
    const [data, setData] = useState([]);
   // const location = useLocation();
    const handleDelete=(id)=>{
       // const confirm=window.confirm("Would You Like To Delete?");
       // if(confirm){
            axios.delete(`http://localhost:3000/Users/${id}`)
            .then (res=>{
             //   location.reload();
             setData(prevData=>prevData.filter(user=>user.id !== id))
            }).catch(err=>console.log(err))
       // }
    }


    useEffect(() => {
        // Fetch users from the API
        axios.get('http://localhost:3000/Users')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-end"><Link to={'/create'} className="btn btn-success">Add +</Link></div>
                <table className="table table-stipend">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, i) => (
                                <tr key={d.id}>
                                    <td>{i+1}</td>
                                    
                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>{d.phone}</td>
                                    <td>
                                    <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                        <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button onClick={e=> handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}

export default Home;