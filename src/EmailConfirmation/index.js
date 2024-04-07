import ResponsiveAppBar from '../Navbar/index'
import './index.css'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Footer from './footer';
const EmailConfirmation=()=>{
   return(
      <>
      <ResponsiveAppBar/>
      <div className='email-container-div'>
<h3 className='email-heading'>Please verify your email...</h3>
<p className='email-icon'><MdOutlineMarkEmailRead /></p>
<p className='dribble-description1'>Please verify your email address. We 've sent a confirmation email to:<br/><snap className="email-heading">account@refero.design</snap></p>
<p className='dribble-description1'>Click the confirmation link in that email to begin using Dribbble.
</p>
<p className='dribble-description1'>Click the confirmation link in that email to begin using Dribbble.
</p>
<p className='dribble-description1'>
Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If <br/>you still don't see it, you can <span style={{color:"red"}}>resend the confirmation email.</span></p>
<p className='dribble-description1'>Wrong email address <span style={{color:"red",fontWeight:'bold'}}>Change it.</span></p>

      </div>
      <Footer/>
      </>
   )
}
export default EmailConfirmation