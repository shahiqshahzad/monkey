import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import CloudMints from '../images/Cloud-Mint.png';
import Footer1 from '../images/1.png';
import Footer2 from '../images/2.png';
import Footer3 from '../images/3.png';
import Footer4 from '../images/4.png';
import Footer5 from '../images/5.png';
import Footer6 from '../images/6.png';

const CloudMint = () => {
    return (

        <Container >
        <div style={{textAlign:"center" , color:"#3CAAEB", paddingTop:"15px"}}><h1> Road Map </h1></div>
        <Row style={{textAlign:"center"}}>
            <Col md={4}>
                <div> <Image style={{height:"200px" , width:"200px"}} src={Footer1}/> <div>
                <a href="">BACK TO SCHOOL: INTERACTIVE LEARNING CHANNEL IN DISCORD </a>
               </div> 
                </div>

            </Col>
            <Col md={4}>
            <div> <Image style={{height:"200px" , width:"200px"}} src={Footer2}/> <div>
                <a href=""> LEMONADE STAND OPENS KIDS ARE MERCCH SHOP </a>
               </div> 
                </div>
            </Col>
            <Col md={4}>
            <div> <Image style={{height:"200px" , width:"200px"}} src={Footer3}/> <div>
                <a href="">DANCE PARTY : WE LIKE TO SURRRISE HOLDERS </a>
               </div> 
                </div>
            </Col>
        </Row>

        <Row style={{textAlign:"center" ,paddingTop:"25px", marginBottom:"20px"}}>
            <Col md={4}>
                <div> <Image style={{height:"200px" , width:"200px"}} src={Footer4}/> <div>
                <a href="">KIDS GIVE BACK: A PORTION OF LEMONADE STAND PROCEEDS ARE DONATED TO CHARITY </a>
               </div> 
                </div>

            </Col>
            <Col md={4}>
            <div> <Image style={{height:"200px" , width:"200px"}} src={Footer5}/> <div>
                <a href="">KID'S PRESENTS:APE PARENTS GIFT APE KIDS A SPECIAL SURRRISE </a>
               </div> 
                </div>
            </Col>
            <Col md={4}>
            <div> <Image style={{height:"200px" , width:"240px"}} src={Footer6}/> <div>
                <a href="">THE STORY CONTINUES: FOUR RARE TRAITS WILL BE AMOUNF THE KIDS APES,HOLDERS WILL GAIN SPECIAL ACCESS FOR FUTHER PLANS. </a>
               </div> 
                </div>
            </Col>
        </Row>
        </Container>
    )
}

export default CloudMint
