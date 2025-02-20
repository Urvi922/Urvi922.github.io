import React from 'react';
import Connect from '../../images/Connect.png';
import ContactForm from '../ContactForm';
import Resume from '../Resume';
import Github from '../../images/github.png';
import LinkedIn from '../../images/linkedin.png';
import Leetcode from '../../images/leetcode.png';
import useScreenSize from '../../hooks/useScreenSize';

const Page4 = () => {

  const { isMobile } = useScreenSize(); 

  const row = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '1em' : '3em',
    fontSize: isMobile ? '0.3em' : '0.3em',
    alignItems: 'center',
    justifyContent: 'flex-start',
   
  }

  const image = {
    color: 'black',
    width: isMobile ? '6em' : '12em',
    height: isMobile ? '6em' : '12em',
    padding: isMobile ? '0.5em' : '1em',
  }
 
  const heading = {
    color: 'black',
    fontSize: isMobile ? '1.2em' : '2.4em',
    padding: isMobile ? '0.1em' : '0.4em',
    maxWidth: isMobile? '15em':'100em',
    height: isMobile? '1em' : 'auto'
  }
  
  const column = {
    display: 'flex',
    flexDirection: isMobile? 'column' : 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    gap: isMobile ? '0.2em' : '1em',
    width: isMobile? '100em': '120em',
    height: isMobile? '18em' : '40em',
    fontSize: isMobile? '0.8em': '1.6em',
    color: 'black',
  }

  
  const column1 = {
    padding: isMobile? '0.2em' : '0.5em',
    color: 'black',
    fontSize: '1em', 
    maxWidth: '30%',
    flex: 1,
    boxSizing: 'border-box',
    height: isMobile? '90%' : '100%',  
    textAlign: 'center',   
  }

  const column2 = {
    padding: isMobile? '0.2em' : '0.5em',
    color: 'black',
    fontSize: '1em',
    maxWidth: '30%',
    flex: 1,
    boxSizing: 'border-box',
    height: isMobile? '90%' : '100%',
    textAlign: 'center',  
    justifyItems: 'center',
  }

  const styles = {
    container: {
      textAlign: 'center',
      padding: '1em',
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
      gap: isMobile? '0.7em':'1.5em',
    },
    link: {
      textDecoration: 'none',
      transition: 'transform 0.3s ease',
    },
  };



  return (
    <div style={row}>
      {/* first row */}
      <div> <img style={image} src={Connect} alt="Connect" /></div>

      {/* second row */}
      <div style={heading}>
       <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span> <span>M</span><span>e</span>
      </div>

      {/* third row */}
      <div style={column}>

        {/* first column */}
        <div style={column1}>
          <ContactForm />
        </div>

        {/* second column */}
        <div style={column2}>
          <Resume />
          <div style={styles.container}>
            <h3>You can find me on !</h3>
            <div style={styles.icons}>
              <a href="https://github.com/Urvi922" target="_blank" rel="noopener noreferrer" style={styles.link}>
              <img src={Github} alt="GitHub" width="40" style={{width: isMobile? '3em' : '40px'}} />
              </a>

              <a href="https://www.linkedin.com/in/urvi-patel-797795119/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src={LinkedIn} alt="LinkedIn" width="40" style={{width: isMobile? '3em' : '40px'}} />
              </a>

              <a href="https://leetcode.com/u/UrviPatel_729/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <img src={Leetcode} alt="LinkedIn" width="40" style={{width: isMobile? '3em' : '40px'}} />
              </a>

            </div>

          </div>
        </div>


      </div>


    </div>
  );
};

export default Page4;