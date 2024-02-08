import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row ,Col, Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails2({handleAddToCard,cardItem}){
    
    const location =useLocation();
    const navigate=useNavigate()

 const product=location.state;
 //console.log(product)
//let category=product.category
 const [otherProductes,setotherProductes]=useState([]);

 useEffect(()=>{
    async function getData(){
        const response=await axios.get('https://api.escuelajs.co/api/v1/products')
        setotherProductes(response.data)
        //console.log(response.data)
    }
    getData()
 },[])
    return(
        <div style={{padding:5}}>
           
          
            <Row>
                <div style={{display:'flex'}}>
            <Col>
           
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:20}} className="mainItem" >
            <img src={product.images} height={200} />
            <h2>{product.title}</h2>
            <h3>Rs.{product.price} /(10% off)</h3>
            <p>{product.description}</p>
            <Button onClick={()=>{
                 const title2=product.title;
                 const price2=product.price;
         if(product.id in cardItem){
           
            const currentItem=cardItem[product.id];
            handleAddToCard({[product.id]:{title2,price2,quantity:currentItem.quantity+1}})
         }else{
            handleAddToCard({[product.id]:{title2,price2,quantity:1}})
         }
        // navigate('/cardList')
            }}>Add to card</Button>
            
    </div>
    
            </Col>
           
            <Col  >
                <div style={{width:'70vw'}} >
                 <h2>   other products !</h2>
                    <div style={{display:'flex',flexWrap:"wrap"}}>
    {otherProductes.map((product,index)=>{
       
      return(
            <div  key={index}>
            <Card style={{width:"15rem",margin:10,padding:10}}>
                <Card.Img style={{height:90,width:90}} src={product.images} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
               
                <Button onClick={()=>navigate('/PDeails2',{state:product})}>View item</Button>
               
            </Card></div>
        )
    })}
</div>
                </div>
                 </Col>
                 </div>
        </Row>

        </div>
    )
};

export default ProductDetails2 ;