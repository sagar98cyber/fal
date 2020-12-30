import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import MediaCard from '../stations/card'

function shops() {
    return (
        <Container className="products">
            <Row className = "prodnme">
                Product Name
            </Row>
          {/*              <Row className="description " style={{width:'100%'}}> */}
                                  {/*  <Row className="d ">
                                        <Link to="/shops" style={{textDecoration:"none"}}>
                                        <div className="white">SHOP NAME</div>
    </Link></Row>*/}
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

export default shops
