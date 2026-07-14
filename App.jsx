import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Home(){
  return <div className="page">
    <h1>Welcome to OBO</h1>
    <p>Modern platform system.</p>
    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
  </div>
}

function Login(){
  return <div className="card">
    <h2>OBO Login</h2>
    <input placeholder="Email"/>
    <input placeholder="Password" type="password"/>
    <Link to="/dashboard">Login</Link>
  </div>
}

function Register(){
  return <div className="card">
    <h2>Create OBO Account</h2>
    <input placeholder="Full Name"/>
    <input placeholder="Email"/>
    <input placeholder="Password" type="password"/>
    <button>Create Account</button>
  </div>
}

function Dashboard(){
  return <div className="dashboard">
    <h2>OBO User Dashboard</h2>
    <div className="box">Account Status: Active</div>
    <div className="box">Profile Information</div>
    <div className="box">Activity History</div>
  </div>
}

export default function App(){
 return <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/register" element={<Register/>}/>
   <Route path="/dashboard" element={<Dashboard/>}/>
 </Routes>
}