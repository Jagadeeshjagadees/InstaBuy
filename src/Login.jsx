import { Row,Col,Form,Button } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login({setUser}){
const [email,setEmail]=useState('');
const navigate=useNavigate();
    return (
      <div style={{backgroundColor:"#216ad9",display:"flex"}}>
        
        <Row style={{display:"grid",gridTemplateColumns:"50% 50%"}} >
            
            <Col style={{margin:"5rem"}}>
           
            <div>
            <h2 style={{color:'white'}}>InstaBuy !</h2>
            <h3 style={{color:'white'}}>One place for all your needs</h3>

            <Form>
     
        <Col sm="10" >
          <Form.Control  style={{marginBottom:"10px",width:'65%',marginTop:"40px"}} onChange={(e)=>setEmail(e.currentTarget.value)} type="email" placeholder="UserName" />
        </Col>
     

       
        <Col sm="10">
          <Form.Control style={{width:"65%",marginTop:"20px"}} type="password" placeholder="Password" />

        </Col>
        <Col>
<Button onClick={()=>{
  localStorage.setItem('userEmail',email);
  setUser(email)
  navigate('/');

}} style={{borderColor:"white",textAlign:"center",marginTop:"10px",width:'50%'}} variant="primary" type="submit" 

>Start Shopping</Button>        </Col>
<br />

    <div style={{color:"white"}}>
        Join the clud, <a style={{color:"white"}} onClick={()=>navigate("/sigUp")} >Click here</a>
        </div>  
    </Form>
            </div> </Col>
           
            
            <Col><img src="src/assets/2.png" height={630} /></Col>
            
        </Row>
       
      </div>
    )
}