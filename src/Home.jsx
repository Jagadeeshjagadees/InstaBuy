//import React from "react"
import { Row } from "react-bootstrap"
import { Carousel, Col } from "react-bootstrap"
import { Button } from "bootstrap"

import './App.css'
import { useNavigate } from "react-router-dom"
export default function Home({user}){
const navigate= useNavigate();
const handleCTAClick=()=>{
    if(user){
    navigate('/products')
    }else{
        navigate('/Login')
    }
}
    return(
        <div className="homw-container">
<Carousel>
    <Carousel.Item>
        <Row>
            <Col> <div style={{padding:'100px',paddingLeft:'200px'}} >
                <h1>SHOP WITH UTMOST</h1>
                <h1 style={{ fontWeight:'600px',color:'#216ad9',padding:'10px 3px'}}> <i>STYLE </i></h1>
           <h3>Shop with latest trendy products</h3>
                <div style={{padding:"10px"}}>
                <button className="button" onClick={handleCTAClick} >Browse Products</button>
                </div>
                <h3 style={{marginBottom:"20px" ,marginTop:'20px'}}>Products available from :</h3>
                <img src="src/assets/10.png" height={50} />
                <img src="src/assets/11.png" height={50} />
                <img src="src/assets/12.png" height={50} />
                <img src="src/assets/13.png" height={50} />
                <img src="src/assets/14.png" height={50} />
                <img src="src/assets/15.png" height={50} />                </div></Col>
            <Col> <img src="src/assets/Carousel-1.png" height={500} width={'auto'} /> </Col> 
        </Row>
    </Carousel.Item>

    <Carousel.Item>
        <Row>
            <Col>
            <div style={{padding:'100px',paddingLeft:'200px'}} >
                <h1>SHOP WITH UTMOST</h1>
                <h1 style={{ fontWeight:'600px',color:'#216ad9',padding:'10px 3px'}}> <i>STYLE </i></h1>
                <h3>Shop with latest trendy products</h3>
                <div style={{padding:"10px"}}>
                <button className="button" onClick={handleCTAClick}>Browse Products</button>
                </div>
                <h3 style={{marginBottom:"20px"}}>Products available from :</h3>
                <img src="src/assets/10.png" height={50} />
                <img src="src/assets/11.png" height={50} />
                <img src="src/assets/12.png" height={50} />
                <img src="src/assets/13.png" height={50} />
                <img src="src/assets/14.png" height={50} />
                <img src="src/assets/15.png" height={50} />                </div></Col>
            <Col><img style={{position:'absolute',bottom:'0',marginTop:'20rem'}} src="src/assets/4.png" height={470} /></Col>
        </Row>
    </Carousel.Item>

    <Carousel.Item>
        <Row>
            <Col> <div style={{padding:'100px',paddingLeft:'200px'}} >
                <h1>SHOP WITH UTMOST</h1>
                <h1 style={{ fontWeight:'600px',color:'#216ad9',padding:'10px 3px'}}> <i>STYLE </i></h1>
                <h3>Shop with latest trendy products</h3>
                <div style={{padding:"10px"}}>
                <button className="button" onClick={handleCTAClick} >Browse Products</button>
                </div>
                <h3 style={{marginBottom:"20px"}}>Products available from :</h3>
                <img src="src/assets/10.png" height={50} />
                <img src="src/assets/11.png" height={50} />
                <img src="src/assets/12.png" height={50} />
                <img src="src/assets/13.png" height={50} />
                <img src="src/assets/14.png" height={50} />
                <img src="src/assets/15.png" height={50} />
                </div></Col>
            <Col><img src="src/assets/5.png" height={500}  /></Col>
        </Row>
    </Carousel.Item>
</Carousel>
        </div>
    )
}
