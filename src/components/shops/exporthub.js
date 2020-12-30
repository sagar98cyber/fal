import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'
import MediaCard from '../stations/card'
import ExportHubCard1 from '../cards/exporthubcard1'
import ExportHubCard2 from '../cards/exporthubcar2'
function ExportHub() {
    return (
        /*<Container className="products">
            <Row className = "prodnme">
                Export Hub
            </Row>
            <Row className="division">
                <Col>
                    <Row>                           
                        <Row className="description "> 
                               
                                    <Row className="d">Description</Row>
                                    <Row style={{width:'100%'}}>
                                        Nostrud reprehenderit dolor et do. Commodo proident occaecat cillum sit laborum nisi aliqua ea. Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                                    </Row>
                                    <Row className="d ">
                                    <div style={{height:'50px'}}></div>
                                        Products
                                    </Row>
                                    <Row>
                                        <div style={{height:'50px'}}></div>                                                                     
                                        <ExportHubCard1/> 
                                                                             
                                    </Row>                                    
                                </Row>


                       
                    </Row>    
                </Col>
                </Row>
    </Container>*/

    <Container className="products">
    <Row className = "prodnme">
        Export Hub
    </Row>
                            <Row className="d">Deciption</Row>
                            <Row style={{width:'device-width'}}>
                                Nostrud reprehenderit dolor et do. Commodo proident occaecat cillum sit laborum nisi aliqua ea. Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                            </Row>
                            <Row className="d ">
                            <div style={{height:'50px'}}></div>
                                Products
                            </Row>
                            <Row>
                                <div style={{height:'50px'}}></div>
                                <MediaCard/>
                                <MediaCard/>
                                
                            </Row>                                    
{/*</Row>*/}


               
          
    
        </Container>

    

    )
}

export default ExportHub
