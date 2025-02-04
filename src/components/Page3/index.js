import React from 'react';
import Line from '../Line';
import Project from '../../images/Project.png';
import ProjectGrid from '../ProjectGrid';


const Page3 = () => {

  const isMobile = window.innerWidth <= 898;
  

  const row = {
    display: 'flex',
    flexDirection: 'column',
    padding: isMobile ? '0.1em' : '3em',
    fontSize: isMobile ? '0.1em' : '0.3em',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }

  const info = {
    color: 'black',
    fontSize: isMobile? '0.8em': '1.6em',
    padding: isMobile? '0.3em': '0.6em',
    maxWidth: '100em',
    wordWrap: 'break-word',
    whiteSpace: 'normal'
  }

  const image = {
    color: 'black',
    width: isMobile ? '6em' : '12em',
    height: isMobile ? '6em' : '12em',
    padding: isMobile ? '0.1em' : '0.9em',
  }

  const heading = {
    color: 'black',
    fontSize: isMobile ? '1.2em' : '2.4em',
    padding: isMobile ? '0.1em' : '0.4em'
  }

  const projectContainer = {
    position: 'relative',
    width: '140em',
    height: '42em',
    border: '1px solid white',
    right: '0',
    bottom: '0',
  }

  const arrow = {
    display: 'inline-block',
    borderLeft: '1em solid transparent',
    borderRight: '1em solid transparent',
    borderBottom: '1em solid black',
    left: '50%',
    transform: 'translateX(50%)',
  }

  return (
    <div>
      <div style={{position: 'fixed', zIndex: 1000}}>
        <Line height={1.9} width={0.3} color='black' top={1.8} right={0} left={-2.5} />
      </div>
      <div style={{position: 'fixed', zIndex: 1000}}>
        <Line height={0.3} width={1.1} color='black' top={3.6 } right={0} left={-3.3} />
      </div>

      <div style={row}>

        {/* first row */}
        <div style={arrow}></div>


        {/* second row */}
        <div> <img style={image} src={Project} alt="Project" /></div>

        {/*third row */}
        <div style={heading}>
          <span>P</span><span>r</span><span>o</span><span>j</span><span>e</span><span>c</span><span>t</span><span>s</span>
        </div>

        {/* fourth row */}
        <div style={info}>This section displays various projects which Urvi worked on to learn different technologies and to grow in the field including this protfolio project.</div>


        {/* fifth row */}
        <div style={projectContainer}><ProjectGrid /></div>

        

      </div>
    </div>
  );
};

export default Page3;