import React, { useState } from "react";
import { toast } from "react-toastify";
const Singupscreen = () => {
    const [name, setName]= useState("");
    const [email, setEmai]=useState("");
    const [password, setPassword]=useState("");
    const formhander =(e)=>{
        e.preventDefault(); 
        console.log(name,email, password) // to prevent page reload on form submission.
        setName("");
        setEmai("");
        setPassword("");
        toast.success("Registration Successful!");
    }
  return (
    <div className="container">
      <h1 className="text-center ">Singup Screen</h1>
      <form onSubmit={formhander}>
        <div className="text-center m-auto rounded shadow w-25 p-3 bg-dark">
          <div className="p-3">
            <input type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="email" value={email} placeholder="Enter your email" onChange={(e)=>setEmai(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="password" value={password} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-info">button</button>
        </div>
      </form>
    </div>
  );
};

export default Singupscreen;
