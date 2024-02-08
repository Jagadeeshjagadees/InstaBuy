import React from "react";
import { Row ,Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export default function ProductDetails(){
 const location =useLocation();
const product=location.state;
console.log(product)

    return (<div>
        <h3>Details Screen</h3>

        <Row>
            <Col>lg={2}</Col>
            <Col> lg={5}</Col>
            <Col lg={5} >
                <div>
                    other products
                </div>
                 </Col>
        </Row>
    </div>)
}