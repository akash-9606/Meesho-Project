import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"


const ForgotPassword = () => {
    const navigate=useNavigate()
    const [email,setEmail]=useState("")

    let handleSignUp=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/api/users/forgotPassword",{email})
        .then(result=>{
          if(result.data.status){
            alert("check your email for reset password link")
            navigate("/signin")
          }
        }).catch(err=>console.log("error=======>",err))
    }
  return (
    <div className="container" style={{ marginTop: "150px",height:"90%" }}>
        <div className="wrapper d-flex align-items-center justify-content-center h-100">
          <div className="card register-form">
            <div className="card-body">
              <h5 className="card-title text-center">Forgot Password</h5>
              <form onSubmit={handleSignUp}>
                {/* Email input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary w-100">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ForgotPassword
