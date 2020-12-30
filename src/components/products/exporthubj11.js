import {Link} from 'react-router-dom'
import React from 'react'
import m from '../../Media/export_11.png'
import './products.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import c2 from './c2'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function ExportHubj11() {
    return (
        <Container className="products">
            <Row className = "prodnme">
                Export Hub Jersey11
            </Row>
            <Row className="division">
                <Col>
                    <Row>                            
                        
                        <Row className="description "> 
                                    <Row className="d "><Link to="/exporthub" style={{textDecoration:"none"}}>
                                        <div className="white">Export Hub</div>
                                        </Link></Row>
                                    <Row className="d">Desciption</Row>
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


export default ExportHubj11

