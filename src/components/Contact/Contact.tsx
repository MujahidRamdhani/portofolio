import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Get in touch with me</p>
        <p>I am always open to new opportunities</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:mujahidramdhani@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:mujahidramdhani@gmail.com">mujahidramdhani@gmail.com</a>
        </div>
        <div>
        <a href="tel:+62 89-6555-22353"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+62 89-6555-22353">089-6555-22353</a>
        </div>  
      </div>
      <Form>
        
      </Form>
    </Container>
  )
}