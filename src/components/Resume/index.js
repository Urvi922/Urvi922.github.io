import React, {useState} from 'react';



const Resume = () => {

    const [isLift, setisLift] = useState(false);

    const isMobile = window.innerWidth <= 898;

    const containerStyle = {
      width: isMobile? '80%': '100%',
      height: isMobile? '80%': '100%',
      padding: isMobile? '0.1em': '0.5em',  
      display: 'flex',
      flexDirection: 'column',
     
    }

    const buttonStyle ={
      textDecoration: 'none',
      backgroundColor: 'black',
      color: 'white',
      padding:isMobile ? '2.5px 5px' : '10px 20px',
      borderRadius: '5px',
      display: 'inline-block',
      width: isMobile?  '70%' : '40%',
      
    }

    const heading = {
      color: 'black',
      padding: isMobile ? '0em' : '0.4em',
      maxWidth: isMobile? '15em':'100em',
      textAlign: isMobile? 'left' : 'center',
    }

    return (
        <div style={containerStyle}>
          <div style={heading}>
            <h2 style={{width: isMobile? '12em' : '23em'}}>Download Resume !</h2>
          </div>
          <div style={{right: '10em'}}>
          <a  
            href="/UrviPatel_Resume.pdf" 
            download="UrviPatel_Resume.pdf" 
            onMouseEnter={() => setisLift(true)}
            onMouseLeave={() => setisLift(false)}
            style={{...buttonStyle, 
              transform: isLift ? 'translateY(-5px) ' : 'translateY(0)',
              boxShadow: isLift ? '0 10px 20px rgba(0, 0, 0, 0.3)' : 'none',
            }}
            
          >
            Download PDF
          </a>
          </div>
        </div>
      );
  };
  
  export default Resume;