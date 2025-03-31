import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import useScreenSize from '../../hooks/useScreenSize';




const ContactForm = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
    const [isLift, setisLift] = useState(false);
 

    const sendEmail = (e) => {
        e.preventDefault()
      
        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )         
        .then(
             (result) => {
                 console.log("Email sent successfully", result.text);
                setMessage("Book recommended successfully :) ");
                form.current.reset();
            },
            (error) => {
                console.log("Error sending email:",error.text);
                setMessage("Unable to send book recommendation :(")
            }
        )
    }

    const { isMobile } = useScreenSize(); 

    const formContainer = {
        width: isMobile? '90%': '100%',
        height: isMobile? '90%': '100%',
        padding: isMobile? '0.4em': '1em',  
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'       
    }

    const formStyle = {
        gap: '1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
    }

    const lineStyle = {
        display: 'flex', 
        flexDirection: 'row', 
        gap:'1em',
        height: isMobile? '1.7em' :'auto',
    } 

    const buttonStyle = {
        backgroundColor:'rgb(3, 3, 3)',
        color: 'white',
        borderRadius: '0.5em',
        padding: isMobile? '0.1em 0.2em' : '0.2em 0.4em',
        width: isMobile? '70%' : '',
        marginTop: isMobile? '0.7em' : '0',
    }

    const heading = {
        color: 'black',
        padding: isMobile ? '0em' : '0.4em',
        maxWidth: isMobile? '100%':'100em',
    }


    return (
        <div style={formContainer}>
            <div style={heading}>
                <h2 style={{width: isMobile? '13em' : '23em'}}>Book suggestions</h2>
                <p style={{width: isMobile? '20em' : '100%'}}>Suggest a book and give a reason to read!</p>
            </div>
            <form ref={form} onSubmit={sendEmail} style={formStyle}>
                <div style={lineStyle}>
                    <lable>Name: </lable>
                    <input 
                        placeholder="Name"
                        type="text"
                        name="from_name"
                        style={{
                            width: isMobile? '7em': '14em',
                            borderRadius: '0.15em',
                            border: '1px solid rgb(3, 3, 3)'
                        }}               
                        required
                    />
                </div>

                <div style={lineStyle}>
                    <lable>Email: </lable>
                    <input 
                        placeholder="Email"
                        type="email"
                        name="from_email"                    
                        style={{
                            width: isMobile? '7em':'14em',
                            borderRadius: '0.15em',
                            border: '1px solid rgb(3, 3, 3)'
                        }}
                        required
                    />
                </div>

                <div style={lineStyle}>
                    <lable>Subject: </lable>
                    <input 
                        placeholder="Subject"
                        type="text"
                        name="subject"                    
                        style={{
                            width:isMobile? '7em': '14em',
                            borderRadius: '0.15em',
                            border: '1px solid rgb(3, 3, 3)'
                        }}
                        required
                    />
                </div>

                <div  style={lineStyle}>
                    <lable>Message: </lable>
                    <textarea   
                        placeholder="Message" 
                        name="message"                
                        style={{
                            width: isMobile? '8em' : '14em',
                            height: isMobile? '1.6em' : '80px', 
                            resize: 'vertical', 
                            fontSize: '1em',
                            borderRadius: '0.15em',
                            border: '1px solid rgb(3, 3, 3)'
                        }}
                        required
                    />
                </div>

                <button type="submit" 
                    onMouseEnter={() => setisLift(true)}
                    onMouseLeave={() => setisLift(false)}
                    style={{ ...buttonStyle, transform: isLift ? 'translateY(-5px) ' : 'translateY(0)', boxShadow: isLift ? '0 10px 20px rgba(0, 0, 0, 0.3)' : 'none',}} value="SEND">Send</button>
                
            </form>
            <p>{message}</p>

        </div>
    )

};

export default ContactForm;