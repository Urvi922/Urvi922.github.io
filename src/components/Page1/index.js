import React from 'react';
import Profile from '../../images/profile.png';
import Skills from '../Skills';

const Page1 = () => {
  
  const isTab = window.innerWidth <= 768;
  const isMobile = window.innerWidth <=480;

  const row = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile? '0.5em': '3em',
    fontSize: isMobile? '0.1em': '0.3em',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap', 
  }

  const image = {
    color: 'black',
    width: isMobile? '6em': '12em',
    height: isMobile? '6em': '12em',
    padding: isMobile? '0.1em': '2em',
  }

  const heading = {
    color: 'black',
    fontSize: isMobile? '1.2em': '2.4em',
    padding: isMobile? '0.1em': '0.5em',
    
  }

  const skillsHeading ={ 
    color: 'black',
    fontSize: isMobile? '1.2em': '2.4em',
    padding: isMobile? '0.5em': '1em',
  }

  const info = {
    color: 'black',
    fontSize: isMobile? '0.7em': '1.4em',
    padding: isMobile? '0.3em': '0.6em',
    maxWidth: '100em',
    wordWrap: 'break-word',
    whiteSpace: 'normal'
  }

  const skills = {
    color: 'black',
    paddingBottom: isMobile? '0.8em': '2em',
    justifyContent: 'center',
    height: '20em',
  }

  const arrow = {
    display: 'inline-block',
    paddingTop: isMobile? '1em': '2em',
    borderLeft: '1em solid transparent',
    borderRight: '1em solid transparent',
    borderTop: '1em solid black'
  }

  return (
      <div style={row}>
        {/* first row */}
        <div> 
            <img  style={image} src={Profile} alt="Profile" />
        </div>

        {/* second row */} 
        <div style={heading}>
          <span>U</span><span>r</span><span>v</span><span>i</span> <span>P</span><span>a</span><span>t</span><span>e</span><span>l</span> : <span>F</span><span>u</span><span>l</span><span>l</span> <span>S</span><span>t</span><span>a</span><span>c</span><span>k</span> <span>D</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span><span> :</span> <span>G</span><span>r</span><span>o</span><span>w</span><span>t</span><span>h</span> <span>a</span><span>n</span><span>d</span> <span>I</span><span>n</span><span>n</span><span>o</span><span>v</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span>
          
        </div>

        {/* third row */} 
        <div style={info}>
          This paper aims to showcase the expertise of Urvi, a Full Stack Developer. Through real-world applications and problem solving attitude, she has demonstrated the ability to deliver robust and user-focused solutions. It outlines projects and professional experinces, emphasizing on the skills gained in various tech stacks. Her work spans e-commerce platforms and healthcare applications, illustrating a consistent focus on innovation and delivering impactful solutions. This portfolio reflects her commitment to embracing challanges, adapting to evolving technologies, and applying her expertise to build solutions that cater to both tehnical and user needs.
        </div>

        {/* fourth row */} 
        <div style={skillsHeading}><span>S</span><span>k</span><span>i</span><span>l</span><span>l</span><span>s</span></div>

        {/* fifth row */}
        <div style={skills}><Skills /></div>

        {/* sixth row */}
        {/* <div><Arrow direction="up" size={1} /></div> */}
        <div style={arrow}></div>


      </div>
  );
};

export default Page1;