import React from 'react'
import { Col, Container,Image, Row } from 'react-bootstrap'
import Mint from '../images/mint.png';
import MintCloud from '../images/Mint-bubble.png'
import BuyNow from '../images/buynow.png';
import CloudMints from '../images/Cloud-Mint.png';
import Stork from '../images/stork.png';
import Monkeys from '../images/monkeys.jpeg'



const SectionMint = () => {
    return (
        <div style={{backgroundColor:"#3CAAEB" , height:"700px" }}>
        <Container >
        <Row  style={{position:"relative", marginTop:"230px" }} >
            <Col xs={6} md={6} className="d-flex justify-content-center" >
                <Image src={Mint} style={{height:"109px", width:"178px",  position:"absolute" , zIndex:"2"}} />
                <div>
                <Image src={MintCloud} style={{height:"322px", width:"520px" , position:"relative" , zIndex:"1", top:"60px" , left:"-35px"}}/>
                </div>
                <b>
                <div style={{position:"absolute" , top:"35%" , zIndex:"4", left:"16.5%" }}>
                    <div style={{color:"#3CAAEB"}}>
                    <div style={{paddingLeft:"35px"}}><h4>10,000 /10,000 </h4> </div>
                <div>QUANTITY  <span style={{paddingLeft:"70px" , paddingTop:"25px"}}>| MAX</span></div>
                    </div>
                
                <hr style={{height:"2px", color:"#3CAAEB"}}></hr>
                <div style={{color:"#3CAAEB"}}>Total Price  <span style={{paddingLeft:"70px", color:"#3CAAEB"}}>0.05ETH</span></div>
                
                
                </div></b>
                {/* <Image src={BuyNow} style={{height:"81px", width:"178px" , position:"absolute" , bottom:"-11px" , zIndex:"3", left:"16.5%"}}/> */}
                <div style={{ position:"absolute" , bottom:"15px" , zIndex:"3", left:"16.5%"}}> 
                <button style={{height:"67px", width:"173px" , border:"none" ,backgroundColor:"#3CAAEB" , color:'white', borderRadius:"20px"}}>DILEVERY NOW</button>
                </div>
                <Image src={Stork} style={{height:"195px", width:"230px" , position:"absolute" , bottom:"-227px" , zIndex:"3", left:"15.9%"}}/>

            </Col>
            <Col xs={6} md={6} className="d-flex justify-content-center" >
                <Image src={Monkeys} style={{height:"350px" , width:"400px"}} />
            </Col>
         

        </Row>
        </Container>
        <Row style={{margin:"0"}}>
           
            <Col lg={12} md={12} style={{ paddingTop:"50px", padding:"50px 0 0 0",   paddingTop:"10px"}} >  <Image src={CloudMints} style={{height:"auto" , width:"100%"}} /></Col>
        </Row>
        </div>
      
    )
}

export default SectionMint