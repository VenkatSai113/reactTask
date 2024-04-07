import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Profile=()=>{
   const [image, setImage] = useState('https://cdn.pixabay.com/photo/2017/02/07/02/16/cloud-2044823_960_720.png');

   // Function to handle file upload
   const handleImageUpload = (event) => {
     const file = event.target.files[0];
     const reader = new FileReader();
 
     reader.onloadend = () => {
       // Set the uploaded image to the state
       setImage(reader.result);
     };
 
     if (file) {
       reader.readAsDataURL(file);
     }
   };
 

   return(
      <div className="profile-container">
<img src="https://w7.pngwing.com/pngs/479/261/png-transparent-design-community-dribbble-dribbbler-dribbble-logo-social-media-icon-thumbnail.png" style={{marginRight:'auto', width:'100px',marginLeft:'20px'}}/>
         <div className='inner-profie-container'>
            
            <Container>
               <Row>
                  <Col xs={12}>
                     <h3 className='profile-heading'>Welcome! Let's create your profile</h3>
                     <p className='profile-desc'>Let others get to knoe you better! You can do these later</p>
                     <p className='profile-heading1'>Add an avatar</p>
                     <div className='upload-img-div'>
                     <img src={image} className='profile-image'/>
                     <div style={{marginLeft:'20px'}}>
                        <input type='file' className='mt-5 upload-button' onChange={handleImageUpload}/>
                        <p className='profile-desc mt-3 ml-2'>Or choose one of our defaults</p>
                     </div>
                     </div>
                     <p className='profile-heading1 mt-3'>Add your location</p>
                     <input type="text" className='form-control' placeholder='Enter Location' style={{width:'80%',marginLeft:"auto"}} />
                     <div className='button-div'>
                     <Link to="/card"><button className='profile-button'>Next</button></Link>


                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
     </div>
   )
}
export default Profile