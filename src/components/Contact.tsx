import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { Typography, useTheme } from '@mui/material';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

 const theme = useTheme();

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

        
             <div className="contact-info">
      <div className="contact-item">
        <EmailIcon sx={{ color : '#e91e63' }} />
        <Typography component="span" sx={{ color:  '#e91e63' }}>
          davideto43@gmail.com
        </Typography>
      </div>
      <div className="contact-item">
        <PhoneIcon  sx={{ color : '#1976d2' }}/>
        <Typography component="span" sx={{ color : '#1976d2' }}>
          (+234) 803 990 7187
        </Typography>
      </div>
    </div>
          
         
        </div>
      </div>
    </div>
  );
}

export default Contact;