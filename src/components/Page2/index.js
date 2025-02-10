import React from 'react';
import Line from '../Line';
import Experience from '../../images/Experience.png';
import Timeline from '../Timeline';

const Page2 = () => {

  const isMobile = window.innerWidth <= 898;

  const row = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '0.1em' : '3em',
    fontSize: isMobile ? '0.1em' : '0.3em',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }

  const image = {
    color: 'black',
    width: isMobile ? '6em' : '12em',
    height: isMobile ? '6em' : '12em',
    padding: isMobile ? '0.1em' : '1em',
  }

  const heading = {
    color: 'black',
    fontSize: isMobile ? '1.2em' : '2.4em',
    padding: isMobile ? '0.1em' : '0.8em'
  }

  const info = {
    color: 'black',
    fontSize: isMobile? '0.8em': '1.6em',
    padding: isMobile? '0.3em': '0.6em',
    maxWidth: '100em',
    wordWrap: 'break-word',
    whiteSpace: 'normal'
  }

  const timelinecontainer = {
    position: 'relative',
    width: '140em',
    height: '40em',
    border: '1px solid white',
    right: '0',
    // boxShadow: isHoverBox
    //   ? '10px 10px 30px rgba(0, 0, 0, 0.4)'
    //   : '5px 5px 15px rgba(0, 0, 0, 0)',
    // transition: 'box-shadow 0.3s ease-in-out',
  }

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
        <Line height={2} width={0.3} color='black' top={1.5} right={0} left={89.8} />
      </div>
      <div style={{position: 'fixed', zIndex: 1000}}>
        <Line height={0.3} width={1} color='black' top={3.3} right={0} left={89.8} />
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
        <div
          style={timelinecontainer}
          // onMouseEnter={() => setHoverBox(true)}
          // onMouseLeave={() => setHoverBox(false)}
        >
          <Timeline />
        </div>

        {/* fifth row */}
        <div style={arrow}></div>

      </div>
    </div>
  );
};

export default Page2;