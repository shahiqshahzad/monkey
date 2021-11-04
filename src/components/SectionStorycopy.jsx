import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import SkyStory from '../images/sky-story.png';
import IllustrationStory from '../images/Illustration-story.png';
import KidApe  from '../images/Kid-ape-popUp.png';
import CloudLarge from '../images/Cloud-story2.png';
import CloudSmall from '../images/Cloud-story.png';
const SectionStory = () => {
    return (

        <Row style={{height:"auto" , backgroundColor:"#3CAAEB" , marginTop:"150px"}}>
        
        <Col xs={12} sm={12} md={6}>
            <div className=" d-flex justify-content-center">
                
                    <h2>STORY OF LITTLE APES </h2> </div>
                    <div>
                    <p style={{paddingLeft:"5%"}}>IN A MAGIC WORLD WHERE APES RULED THE METAVERSE, A MAGICAL THOUSAND-YEAR-OLD THREE SPROUTED CUTE BABY APES OF STORKS WHERE THE LOYAL COMPANIONS OF THE THOUSAND-YEAR-OLD TREE</p>

                    </div>

                
           
        </Col>
        <Col xs={12} sm={12} md={6}>
            <div className="d-flex justify-content-center" style={{position:"relative"}}>
               <div>
                <Image  src={IllustrationStory} className="storyImage"  />
                </div>
                <div>
            <Image className="MonkeySee" style={{position:"absolute", bottom:"-23%"}} src={KidApe} />

            </div>
            </div>
          
        </Col>
       
        <Col style={{height:"auto" , backgroundColor:"#3CAAEB"}}>
            <span>
            <Image className="cloudLargemargin" src={CloudLarge} style={{height:"50px" , width:"180px"}} />
            </span>
            <span>
            <Image className="cloudSmallmargin" src={CloudSmall} style={{height:"50px" , width:"180px"}} />

            </span>
        </Col>
       
        </Row>
    )
}

export default SectionStory
