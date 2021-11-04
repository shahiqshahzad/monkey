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
        <div>
              <Image  style={{height:"auto", width:"100%", position:"absolute" }} src={SkyStory} />
            <div>
                <div></div>
                <Image className="sideMonkey"  style={{height:"474px", width:"418px",marginLeft:"115px", position:"absolute" , bottom:"-168%" , left:"731px" , zIndex:"1"  }} src={KidApe} />
                <Image  style={{ left:"6%", height:"123px", position:"absolute" , bottom:"-143%"    }} src={CloudLarge} />
                <Image  style={{ left:"56%", height:"120px", position:"absolute" , bottom:"-142%"    }} src={CloudSmall} />
                <Row  style={{paddingTop:"10%" ,color:"white", position:"relative"}}>
                 <Col xs={12} sm={12}md={6} >
                     <Container>
                     <h1>STORY OF LITTLE APES</h1>
                     <p>IN A MAGIC WORLD WHERE APES RULED THE METAVERSE, A MAGICAL THOUSAND-YEAR-OLD THREE SPROUTED CUTE BABY APES OF STORKS WHERE THE LOYAL COMPANIONS OF THE THOUSAND-YEAR-OLD TREE</p>
                     </Container>
                     </Col>
                 <Col xs={12} sm={12} md={6}>
                    <Image className="story" src={IllustrationStory}/>
                 </Col>

                </Row>
              
                
                </div>
        </div>
    )
}

export default SectionStory
