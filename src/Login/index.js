import React, { useState } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { BiSolidError } from "react-icons/bi";
import { useHistory } from 'react-router-dom';


const Login=()=>{
   const [formData, setFormData] = useState({
      name: '',
      username: '',
      password: '',
      email: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
    const onsubmitForm=()=>{
      if(formData.name==="" &&formData.username===""&&formData.password && formData.email===""){
         alert("Enter All Details")
      }
      else if(formData.username===""){
         alert('Please Enter username')
      }
      else if(formData.name===""){
         alert('Please Enter name')
      }
      else if (formData.password===""){
         alert('Please Enter Valid password')
      }
      else if(formData.email===""){
         alert('Please Enter Email')
      }
      else{
         history.push('/profile', { message: 'Hello from Page1' });
      }
      
    }
   return(
      <>
      <div className="login-container">
         <img src="https://www.oohology.com/uploads/blog/image/full_2x_Good-Design-Blog-Header_kd_v2_White-01.jpg" alt="login image" className='login-image'/>
<div className='login-form-div'>
   <p className='already-member-text'>Already a member ? <span style={{color:'blue'}}>Signin</span></p>
   <div className='signup-form-container'>
      <Container fluid>
         <Row>
            <Col xs={12}>
            <h3 className='sign-up-text'>Signup to Dribble</h3>
   <p className='username-taken'>* Username has already been taken</p>
            </Col>
            <Col xs={12} md={6}>
            <h3 className='sign-up-name'>Name</h3>
            <input type="text" className='form-control' placeholder='Name' name="name" value={formData.name} onChange={handleChange}/>
            </Col>
            <Col xs={12} md={6}>
            <h3 className='sign-up-name'><BiSolidError style={{color:'red'}} />
 Username</h3>
            <input type="text" className='form-control' placeholder='User name' style={{color:'red'}} name="username" onChange={handleChange} value={formData.username}/>
            </Col>
            <Col xs={12}>
            <h3 className='sign-up-name'>Email</h3>
            <input type='emial' className='form-control' placeholder='email' name="email" value={formData.email} onChange={handleChange} />
            </Col>
            <Col xs={12}>
            <h3 className='sign-up-name'>Password</h3>
            <input type='password' className='form-control' placeholder='6+ characters' name='password' onChange={handleChange} value={formData.password} />
            </Col>
            <Col>
            <div className='d-flex flex-row justify-content-around mt-3' >
            <input type="checkbox" htmlFor="permit"/>
            <p  id="permit" style={{fontSize:'13px',fontFamily:'roboto'}}>Creating an account means you're okay wth our <span style={{color:'blue',fontWeight:'700'}}>Terms of <br/>
            Service Privcy Policy,</span> and our default <span style={{color:'blue',fontWeight:'700'}}>Notfication<br/>Settings</span></p>
            </div>
            </Col>
            <Col xs={12}>
            <button className="create-button" onClick={onsubmitForm} >
Create Account
               </button>
            </Col>
            <Col xs={12}>
               <p className='recaptha-text'>This site is protected by reCAPTCHA and the Google<br/>
               <span style={{fontWeight:'900',color:'blue'}}>Privcy Policy</span> and <span style={{fontWeight:'900',color:'blue'}}>Terms of Service</span> apply</p>
               
            </Col>
         </Row>
      </Container>
   
   <div className=''>

   </div>
   </div>
   
   </div>
           </div>
           </>
   )
}
export default Login