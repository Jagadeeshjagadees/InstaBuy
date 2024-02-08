import React, { useState } from "react";
 import "./sigup.css"
import { Input,Button } from 'antd' ;
import { useNavigate } from "react-router-dom";

 function SigUp({setUser}){
   const [email,setEmail]=useState('')
    const navigate= useNavigate();
    return(
        <div className="sigup-page">
            <div className="form"> 
         <Input onChange={(e)=>{setEmail(e.currentTarget.value)}} placeholder="Enter Email" />   
         <Input placeholder="Enter password" />  
         <Button onClick={()=>{
  localStorage.setItem('userEmail',email);
  setUser(email);
  navigate('/');

}}  type="primary">Sig Up</Button>  
</div>
<div style={{marginTop:'10rem',height:'10vh'}}>Already Member   ! <a onClick={()=>navigate('/Login')} >Login </a></div>
        </div>
    )
}
export default SigUp;