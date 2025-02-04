import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';




const ContactForm = () => {
    const form = useRef();
    const [message, setMessage] = useState('');
 

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

    const isMobile = window.innerWidth <= 898;

    const formContainer = {
        width: isMobile? '45%': '100%',
        height: isMobile? '45%': '100%',
        padding: isMobile? '0.5em': '1em',  
        display: 'flex',
        flexDirection: 'column'         
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
        gap:'1em'
    } 

    const buttonStyle = {
        backgroundColor:'rgb(3, 3, 3)',
        color: 'white',
        borderRadius: '0.5em',
        padding: '0.2em 0.4em',
    }


    return (
        <div style={formContainer}>
            <div>
                <h2>Book suggestions !</h2>
                <p>Suggest a book, why I should read it</p>
            </div>
            <form ref={form} onSubmit={sendEmail} style={formStyle}>
                <div style={lineStyle}>
                    <lable>Name: </lable>
                    <input 
                        placeholder="Name"
                        type="text"
                        name="from_name"
                        style={{
                            width: '14em',
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
                            width: '14em',
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
                            width: '14em',
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
                            width: '14em',
                            height: '80px', 
                            resize: 'vertical', 
                            fontSize: '1em',
                            borderRadius: '0.15em',
                            border: '1px solid rgb(3, 3, 3)'
                        }}
                        required
                    />
                </div>

                <button type="submit" style={buttonStyle} value="SEND">Send</button>
                
            </form>
            <p>{message}</p>

        </div>
    )

};

export default ContactForm;