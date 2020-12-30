import {Link} from 'react-router-dom'
import React from 'react'
import m from '../../Media/cup.jpeg'
import './products.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import c2 from './c2'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function Cake() {
    return (
        <Container className="products">
            <Row className = "prodnme">
                Product Name
            </Row>
            <Row className="division">
                <Col>
                    <Row>                            
                        
                        <Row className="description "> 
                                    <Row className="d "><Link to="/shops" style={{textDecoration:"none"}}>
                                        <div className="white">SHOP NAME</div>
                                        </Link></Row>
                                    <Row className="d">Deciption</Row>
                                    <Row style={{width:'100%'}}>
                                        Nostrud reprehenderit dolor et do. Commodo proident occaecat cillum sit laborum nisi aliqua ea. Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                                    </Row>
                                    <Row className="d amount">
                                        Price-400/-
                                    </Row>
                                    
                                </Row>


                       
                    </Row>    
                </Col>
                <Col className="right">
                  
                     {/*<img src={m} style={{borderRadius:"10px"}} className="pimage"/> */}   
                     <TransformWrapper>
                        <TransformComponent>
                        <img src={m} style={{borderRadius:"10px"}} className="pimage"/>
                        </TransformComponent>
                    </TransformWrapper>
                       
                </Col>
            </Row>
        </Container>
    )
}


export default Cake

