import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//import logo from "./assets/logo.png"

function Products(){
const [products,setProducts]=useState([]);
const navigate=useNavigate();
const navigate2=useNavigate();
    useEffect(()=>{
async function getProducts(){
    const response=await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
    setProducts(response.data)
  // console.log(response.data)
}
getProducts();
    },[]) ; 
    
    return(<div style={{padding:50}}>
<h3>Select a products</h3>
<div style={{display:'flex',flexWrap:"wrap"}}>
    {products.map((product,index)=>{
      return(
            <div  key={index}>
            <Card style={{width:"18rem",margin:10}}>
                <Card.Img style={{height:60,width:60}} src={product.images[0]} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
               {// <Button onClick={()=>navigate(`/ProductDetails:id/${product.id}`,{state:product})} style={{width:'70%'}}>View item</Button> 
    }
                <Button onClick={()=>navigate2('/PDeails2',{state:product})}>View item</Button>
               
            </Card></div>
        )
    })}
</div>
    </div>)
}

export default Products;