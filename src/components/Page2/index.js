import React from 'react';
import Line from '../Line';
import Experience from '../../images/Experience.png';
import Timeline from '../Timeline';
import useScreenSize from '../../hooks/useScreenSize';

const Page2 = () => {

  // const isMobile = window.innerWidth <= 898;

  const { isMobile } = useScreenSize();

  const row = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '1em' : '3em',
    fontSize: isMobile ? '0.3em' : '0.3em',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }

  const image = {
    color: 'black',
    width: isMobile ? '6em' : '12em',
    height: isMobile ? '6em' : '12em',
    padding: isMobile ? '0.5em' : '2em',
  }

  const heading = {
    color: 'black',
    fontSize: isMobile ? '1.2em' : '2.4em',
    padding: isMobile ? '0.1em' : '0.8em',
    maxWidth: isMobile? '15em':'100em',
  }

  const info = {
    color: 'black',
    fontSize: isMobile? '1em': '1.4em',
    padding: isMobile? '0.3em': '0.6em',
    maxWidth: isMobile? '25em':'100em',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap'
  }

  const timelinecontainer = {
    position: 'relative',
    width: isMobile? '100%': '140em',
    height: isMobile? '28em': '40em',
    border: '1px solid white',
    right: isMobile? '-7em': '0',
  }

  const scrollContainer = {
    overflowX: isMobile ? 'scroll' : 'visible', // Enable horizontal scrolling on small screens
    overflowY: 'visible', // Disable vertical scrolling (optional)
    width: '100%', // Ensure the container fits the screen width
  };

  const arrow = {
    display: 'inline-block',
    borderLeft: '1em solid black',
    borderRight: '1em solid transparent',
    borderTop: '1em solid transparent',
    borderBottom: '1em solid transparent',
    position: 'absolute',
    right: '0.1rem',
    top: '50%',
    transform: 'translateY(-50%)',
  }


  return (
    <div>
      <div style={{position: 'fixed', zIndex: 1000}}>
        <Line height={1.99} width={0.3} color='black' top={isMobile? 0.26 : 1.99} right={0} left={isMobile? 16.5 : 89.8} />
      </div>
      <div style={{position: 'fixed', zIndex: 1000}}>
        <Line height={0.3} width={1} color='black' top={isMobile? 1.99 : 3.9} right={0} left={isMobile? 16.6 : 89.8} />
      </div>

      <div style={row}>


        {/* first row */}
        <div> <img style={image} src={Experience} alt="Experience" /></div>

        {/* second row */}
        <div style={heading}>
          <span>E</span><span>x</span><span>p</span><span>e</span><span>r</span><span>i</span><span>e</span><span>n</span><span>c</span><span>e</span>
        </div>

        {/* third row */}
        <div style={info}>You will find here Urvi's journey of gaining knowldge in all the technologies mentioned previosuly. It is clear that she has been dedicated to learning an grow in the field of her interest.</div>

        {/* fourth row */}
        <div style={scrollContainer}>
        <div
          style={timelinecontainer}
        >
          <Timeline />
        </div>
        </div>

        {/* fifth row */}
        <div style={arrow}></div>

      </div>
    </div>
  );
};

export default Page2;