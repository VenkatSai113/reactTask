import './index.css'
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const DribbleCard=()=>{
   const [activeCard, setActiveCard] = useState(0);
   const [selectStatus,setSelectStatus]=useState(false)
   

  // Function to set the active card
  const setActive = (cardNumber) => {
    setActiveCard(cardNumber);
    setSelectStatus(true)
  };
   return(
      <div className="dribbleCard">
         <img src="https://w7.pngwing.com/pngs/479/261/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail.png" style={{marginRight:'auto', width:'100px',marginLeft:'20px'}}/>
         <h3 className='dribble-heading'>What brings you to Dribbble?</h3>
         <p className='dribble-description'>Select the options that best describe you. Don't worry , you can explore other options later.</p>
         <div className='card-container'>
         <Container>
            <Row>
               <Col xs={12} md={4}>
                  <div className={`card ${activeCard === 1 ? 'active' : ''}`} onClick={() => setActive(1)}>
                     <img src="https://media.istockphoto.com/id/1326956550/vector/creative-mind-or-brainstorm-or-creative-idea-concept-with-abstract-human-head-silhouette-and.jpg?s=2048x2048&w=is&k=20&c=_NKC0VyanZ3uluJUrT_Hs6EEKGiaQ5M8ndhKGjPrvTg=" className='card-image mb-3'/>
                     <p className='designer-text'>   I'm a Designer looking to share my work</p>
                  </div>
               </Col>
               <Col xs={12} md={4}>
                  <div className={`card ${activeCard === 2 ? 'active' : ''}`} onClick={() => setActive(2)}>
                     <img src="https://media.istockphoto.com/id/1455007069/vector/vector-illustration-on-the-subject-of-creativity-generating-innovative-ideas-imagination-and.jpg?s=1024x1024&w=is&k=20&c=v8kq4CUujeQPW56Xcap-AZIOpz7tngzmGaqQNpYtWwk=" className='card-image mb-3'/>
                     <p className='designer-text'>I'm looking to hire a designer</p>
                  </div>
               </Col>
               <Col xs={12} md={4}>
                  <div className={`card ${activeCard === 3 ? 'active' : ''}`} onClick={() => setActive(3)}>
                     <img src="https://media.istockphoto.com/id/1360812306/vector/vector-illustration-depicting-a-happy-young-man-finding-an-effective-solution-editable-stroke.jpg?s=2048x2048&w=is&k=20&c=DX2RgAkwkE7PeIcU1bOpIdwkEEE_8rVaE1NAuW8u6x0=" className='card-image'/>
                     <p className='designer-text'>   I'm looking for design inspiration</p>
                     <p className='designer-description'>
                     Lorem ipsum dolor sit amet consectetur. Nam in libero felis sapien curabitur orci consectetur.
                     </p>
                  </div>
               </Col>
               <Col xs={12}>
                  {selectStatus?
                  <div style={{width:'100%',textAlign:'center'}}>
                  <p className='anything-text'>Anything else? You can select multiple</p>
                 <Link to="/emailConfirmation"><button className='create-button' style={{marginLeft:'auto'}}>Finish</button></Link>
                 <p style={{fontSize:'12px',fontFamily:'roboto',marginTop:"10px"}}>or Press to RETURN</p>
                  </div>
                 
                  :
                  
                  
                  <div style={{width:'100%',textAlign:'center'}}>
                  {/* <p className='anything-text'>Anything else? You can select multiple</p> */}
                 <button className='create-button' style={{marginLeft:'auto',transition: 'opacity 9s ease',  opacity: '0.2'

}} disabled="true">Finish</button>
                 {/* <p style={{fontSize:'12px',fontFamily:'roboto',marginTop:"10px"}}>or Press to RETURN</p> */}
                  </div>}
                  
               </Col>
            </Row>
         </Container>
         </div>
      </div>
      )
}
export default DribbleCard