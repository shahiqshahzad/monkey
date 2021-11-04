import React from 'react'
import { Col, Container,Image, Row } from 'react-bootstrap'
import Mint from '../images/mint.png';
import MintCloud from '../images/Mint-bubble.png'
import BuyNow from '../images/buynow.png';
import CloudMints from '../images/Cloud-Mint.png';
import Stork from '../images/stork.png';
import Monkeys from '../images/monkeys.jpeg'
import Img from '../images/img.jpeg';



const SectionMint = () => {
    return (
        <Row style={{height:"auto" , backgroundColor:"#3CAAEB" ,position:"relative"}}>
            <Col sm={12}  sm={12} md={6}>
                <div className="d-flex justify-content-center" style={{position:"relative", height:"400px" }} >
            <Image src={Mint} style={{height:"80px", width:"148px" , zIndex:"1"}}   />
                </div>
                <div >
              <Image src={MintCloud} style={{height:"230px", width:"405px", position:"absolute" , left:"-2%" , top:"0" , zIndex:"0" , paddingTop:"10px"}}  />
                <div style={{position:"absolute" , left:"20%" , top:"75px" , zIndex:"0"}}>10,000  / 10,000
               <div>Quantity   | Max </div>
               <hr></hr>
               <button style={{textAlign:"center", border:"none",  height:"22px" ,color:"white" , backgroundColor:"#3CAAEB" , borderRadius:"30px"}}>asf</button>
                
                </div>
                </div>

            </Col>
            <Col xs={12} sm={12} md={6} className="d-flex justify-content-center">
                <Image src={Monkeys} style={{height:"400px" , width:"400px"}} />
            </Col>
        </Row>
      
    )
}

export default SectionMint