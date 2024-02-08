import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import BuyPic from './assets/buySidePic.png'
import { useNavigate } from "react-router-dom";

export default function Card({cardItem}){
    const navigate = useNavigate()
//console.log(cardItem)
const [totalprice,setTotalPrice]=useState(0);
const [totalQuantity,setTotalQuantity]=useState(0)

/*useEffect(()=>{
cardItem.map((items,index)=>{
return(items.map((item)=>{
    console.log(item.price)
}))
})
//},[]) */

useEffect(()=>{
   let tempQuantity=0;
   let tempPrice=0;
    Object.keys(cardItem).map((cardItemId)=>{
    const details=cardItem[cardItemId];
    tempQuantity +=details.quantity;
    tempPrice += details.quantity* details.price2;

    });
    setTotalPrice(tempPrice);
    setTotalQuantity(tempQuantity);
},[])
    return(<>
    <h2 style={{marginTop:15,marginLeft:40}}>Your card</h2>
    <Row>
        <Col style={{margin:40}}>
        <Table style={{marginTop:40}} >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
               
                    {Object.keys(cardItem).map((cardItemId,index)=>{
                        const itemDetails= cardItem[cardItemId];
                        return(
                            <tr key={index}>
                                <td>{itemDetails.title2}</td>
                                <td>{itemDetails.quantity}</td>
                                <td>{itemDetails.quantity*itemDetails.price2}</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Total</td>
                        <td>{totalQuantity}</td>
                        <td>{totalprice}</td>
                    </tr>
            </tbody>
        </Table>
        <Button onClick={()=>navigate('/Checkout')}>Checkout</Button>
        </Col>
        <Col style={{marginTop:40}}>
        <img src={BuyPic} height={300} /></Col>
    </Row>
    </>)
}