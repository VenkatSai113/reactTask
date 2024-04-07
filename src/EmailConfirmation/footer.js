import React from "react";
import './index.css'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from 'react-bootstrap/Col';
import WhatsappIcon from '../Assets/image 10.png'
import InstaIcon from '../Assets/image 11.png'
import XIcon from '../Assets/image 12.png'
import FBIcon from '../Assets/image 13.png'
const Footer=()=>{
  return(
    <div className="footer-div">
      <Container fluid >
        <Row>
          
          <Col md={2}>
          <div>
          <img src="https://w7.pngwing.com/pngs/479/261/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail.png" style={{marginRight:'auto', width:'100px',marginLeft:'20px'}}/>
          <p className='footer-page-sub-description'>Dribbble is the world's leading
</p> 
<p className='footer-page-sub-description'>community for creatives to share, grow, and get hired.</p>
<div className="follow-us-div1">
            <img src={WhatsappIcon} alt="whatsapp" className="social-media-icons"/>
            <img src={InstaIcon} alt="whatsapp"  className="social-media-icons"/>
            <img src={XIcon} alt="whatsapp"  className="social-media-icons"/>
            <img src={FBIcon} alt="whatsapp"  className="social-media-icons"/>
            </div>
        </div>
          </Col>
          <Col md={2}>
          <div>
          <h3 className="footer-company-name">For designers</h3>
          <p className='footer-page-sub-description'>Go Pro!</p>
          <p className='footer-page-sub-description'>Explore design work</p> 
          <p className='footer-page-sub-description'>Design Blog</p>
          <p className='footer-page-sub-description'>Overtime podcast</p>
          <p className='footer-page-sub-description'>Playoffs</p> 
          <p className='footer-page-sub-description'>Weekly Warm-up</p>
          <p className='footer-page-sub-description'>Refer a <i class="fas fa-user-friends    "></i></p> 
          <p className='footer-page-sub-description'>Code Of conduct</p>
        </div>
          </Col>
          <Col md={2}>
          <div>
          <h3 className="footer-company-name">Hire designers</h3>
          <p className='footer-page-sub-description'>Post a job opening </p>
          <p className='footer-page-sub-description'>Posst a freelanceProject</p>
          <p className='footer-page-sub-description'>Search for designers</p> 
          <h3 className="footer-company-name">Brands</h3>

          <p className='footer-page-sub-description'>Advertise with us</p>
         
        </div>
          </Col>
          <Col md={2}>
          <div>
          <h3 className="footer-company-name">company</h3>
          <p className='footer-page-sub-description'>About  </p>
          <p className='footer-page-sub-description'>Careers</p>
          <p className='footer-page-sub-description'>Support</p> 
          <h3 className="footer-company-name">Media Kit</h3>
          <p className='footer-page-sub-description'>Testimonials</p>
          
          <p className='footer-page-sub-description'>API</p>
          <p className='footer-page-sub-description'>Terms of service  </p>
          <p className='footer-page-sub-description'>Privacy Policy</p>
          <p className='footer-page-sub-description'>Cookie Policy</p> 
         
        </div>
          </Col>
          <Col md={2}>
          <div>
          <h3 className="footer-company-name">Directors</h3>
          <p className='footer-page-sub-description'>Design jobs</p>
          <p className='footer-page-sub-description'>Designers for hire</p>
          <p className='footer-page-sub-description'>Freelance designers</p> 
          <h3 className="footer-company-name">Design assets</h3>
          <p className='footer-page-sub-description'>Dribbble Marketplace</p>
          <h3 className="footer-company-name">Design assets</h3>

          <p className='footer-page-sub-description'>API</p>
          <p className='footer-page-sub-description'>Terms of service  </p>
          <p className='footer-page-sub-description'>Privacy Policy</p>
          <p className='footer-page-sub-description'>Cookie Policy</p> 
         
        </div>
          </Col>
          <Col md={2}>
          <div>
          <h3 className="footer-company-name">Design Resources</h3>
          <p className='footer-page-sub-description'>Freelancing  </p>
          <p className='footer-page-sub-description'>Design Hiring</p>
          <p className='footer-page-sub-description'>Design Portifolio</p> 
          <h3 className="footer-company-name">Design Education</h3>
          <p className='footer-page-sub-description'>Creative Process</p>
          <h3 className="footer-company-name">DesignIndustry</h3>

          <p className='footer-page-sub-description'>Trends</p>
         
         
        </div>
          </Col>
        </Row>
        <Row>
         
         
        </Row>
        <Row>
          <Col xs={12}>
            <hr style={{color:"#252525",marginRight:'100px'}}/>
          </Col>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={12} md={4}>
          <p className='footer-page-sub-description'>@ 2024 Drbble .   Terms & Condition</p>
          </Col>
          <Col xs={12} md={4}>
          </Col>
        </Row>
      </Container>
  

    </div>
  )
}
export default Footer