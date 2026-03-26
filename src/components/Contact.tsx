import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="contact-info">
            <div className="contact-item">
              <EmailIcon sx={{ color: 'red' }} />
              <span style={{ fontWeight: 'bold' }}>davideto43@gmail.com</span>
            </div>
            <div className="contact-item">
              <PhoneIcon sx={{ color: 'blue' }} />
              <span style={{ fontWeight: 'bold' }}>+234 8039907187</span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Contact;