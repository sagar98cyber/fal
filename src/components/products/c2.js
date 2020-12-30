import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import m from '../../Media/export_1.png'
//import m from '../../Media/cup.jpeg'
import './products.css'
import { Link } from 'react-router-dom'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
function c2() {
  return (
    <Container className="products">
      <div className="aligned-center">
        <div className="d scenter" style={{textAlign:"center"}}>
          <Link to="/shops" style={{ textDecoration: "none" }}>
            <div className="white">SHOP NAME</div>
          </Link>
        </div>

        <div style={{marginTop:"15px"}}>
          <TransformWrapper className="margin-auto">
            <TransformComponent >
              <img src={m} style={{ borderRadius: "10px" }} className="pimage" />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="prodnme ">
          Product Name
          </div>
        <div className="d amount">
          Price-400/-
        </div>
        <div className="description ">


          <div className="d">Deciption</div>
          <Row style={{ width: '100%' }}>
            Nostrud reprehenderit dolor et do.
            Commodo proident occaecat cillum sit laborum nisi aliqua ea.
            Ad exercitation aliqua quis laboris consequat adipisicing laborum reprehenderit commodo labore.
                                  </Row>


        </div>
      </div>
    </Container>
  )
}


export default c2
