import React, {useState} from 'react';



const Resume = () => {
    // return (
    //   <div>
    //     <h2>Resume</h2>
    //     <iframe 
    //       src="/UrviPatel_Resume.pdf" 
    //       title='Resume'
    //       width="400em" 
    //       height="300em" 
    //       style={{ border: 'none', display: 'block' }} 
    //     />
    //   </div>
    // );

    const [isLift, setisLift] = useState(false);

    const isMobile = window.innerWidth <= 898;

    const containerStyle = {
      width: isMobile? '45%': '100%',
      height: isMobile? '45%': '100%',
      padding: isMobile? '0.1em': '0.5em',  
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    const buttonStyle ={
      textDecoration: 'none',
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      display: 'inline-block',
      width: '60%',
    }

    return (
        <div style={containerStyle}>
          <h2>Download Resume !</h2>
          <a 
            href="/UrviPatel_Resume.pdf" 
            download="UrviPatel_Resume.pdf" 
            onMouseEnter={() => setisLift(true)}
            onMouseLeave={() => setisLift(false)}
            style={{...buttonStyle, 
              transform: isLift ? 'translateY(-5px) ' : 'translateY(0)',
              boxShadow: isLift ? '0 10px 20px rgba(0, 0, 0, 0.3)' : 'none'
            }}
            
          >
            Download PDF
          </a>
        </div>
      );
  };
  
  export default Resume;