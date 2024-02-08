import { useEffect, useState } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { Badge, Button, NavLink, Navbar } from 'react-bootstrap'
import Home from './Home'
import Login from './Login'
import SigUp from './SigUp'
//import { Button } from 'bootstrap'

//import {Container} from 'react-bootstrap'
import logo from './assets/logo.png'
import Products from './Products'
import ProductDetails from './ProductDetails'
import ProductDetails2 from './ProductDetails2'
import Card from './Card'
import CheckOut from './CheckOut'

function App() {
 const navigate= useNavigate(); 
 const [user,setUser]=useState('');
 const [cardItems,setCardItems]=useState({});
//console.log(user)
 useEffect(()=>{
  const userEmail=localStorage.getItem('userEmail');
 if(userEmail){
  setUser(userEmail)
 }
},[]);

const handleAddToCard=(item)=>{
  setCardItems({...cardItems,...item});
}

  return (
    <div className='page'>
        <Navbar className="navbar">
      
        <Navbar.Brand onClick={()=>navigate('/')} >
        <img 
          src={logo}  
          width='30px'
          height='30px'
          />
         {'   '}
          Insta Buy !</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
  {user && <Button onClick={()=>navigate('/cardList')}>Card &nbsp; {Object.keys(cardItems).length > 0 && <Badge bg='success' > {Object.keys(cardItems).length}</Badge>}</Button>}
         <Button style={{marginLeft:20}} onClick={()=>navigate("/Login")}>{user ? "Log Out" :"Log In" }</Button>

        </Navbar.Collapse>
      
    </Navbar>
    
  <Routes>
    <Route path="/" element={<Home user={user} />} />
    <Route path="/Login" element={<Login setUser={setUser} />} />
    <Route path="/sigUp" element={<SigUp setUser={setUser} />} />
    <Route path='/products' element={<Products />} />
    <Route path='/ProductDetails:id/' element={<ProductDetails />} />
    <Route path='/PDeails2' element={<ProductDetails2 handleAddToCard={handleAddToCard} cardItem={cardItems} />} />
    <Route path='/cardList' element={<Card cardItem={cardItems} />} />
    <Route path='/Checkout' element={<CheckOut />} />
      </Routes>



        </div>
  )
}

export default App ;
