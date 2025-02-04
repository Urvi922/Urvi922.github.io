import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const form = useRef();
    // const [message, setMessage] = useState('');
    // const [data, setData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });

    const sendEmail = (e) => {
        e.preventDefault()

        // const templateParams = {
        //     name: data.name,
        //     email: data.email,
        //     subject: data.subject,
        //     message: data.message
        // };

        console.log("Service ID:", process.env.REACT_APP_EMAIL_SERVICE_ID);
        console.log("Template ID:", process.env.REACT_APP_EMAIL_TEMPLATE_ID);
        console.log("Public Key:", process.env.REACT_APP_PUBLIC_KEY);

        console.log("Form Data:", form.current);


        emailjs.sendForm(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        ) .then(
            () => {
                toast.success('Message successfully sent!', {
                    position: 'bottom-center',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                })
                const timeout = setTimeout(() => {
                    window.location.reload(false)
                }, 3900)

                return () => clearTimeout(timeout)
            },
            () => {
                  toast.error('Failed to send the message, please try again', {
                   position: 'bottom-center',
                   autoClose: 3500,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: 'dark',                
            })
        // .then(
        //     (result) => {
        //         console.log("Email sent successfully", result.text);
        //         setMessage("Book recommended successfully :) ");
        //         form.current.reset();
        //     },
        //     (emailError) => {
        //         console.log("Error sending email:",emailError);
        //         setMessage("unable to send book recommendation :(")
            }
        )
    }

    const isMobile = window.innerWidth <= 898;

    const formContainer = {
        width: isMobile? '45%': '100%',
        height: isMobile? '45%': '100%',
        padding: isMobile? '1em': '2em',  
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

    // const handleChange = (e) => {
    //     const { name , value } = e.target;
    //     setData({
    //         ...data,
    //         [name]: value,
    //     });
    // };


    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log('Form submitted:', data);

    //     setData({ name: '', email: '', message: ''});
    // };

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
                        // onChange={handleChange}
                        // value={data.name}
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
                        // onChange={handleChange}
                        // value={data.email}                        
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
                        // value={data.subject}  
                        // onChange={handleChange}                     
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
                        // value={data.message}   
                        // onChange={handleChange}                   
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

                {/* <div>
                    
                </div> */}
            </form>
            {/* <p>{message}</p> */}

        </div>
    )

};

export default ContactForm;