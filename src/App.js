import React, { useState, useEffect, useRef } from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null);
  const isScrolling = useRef(false); // Lock scrolling during transition
  const transitionTimeout = useRef(null); // To store the timeout for clearing later

  // Hide all scrollbars globally
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Hide all scrollbars
    document.body.style.display = 'contents';
    document.body.style.fontFamily = 'Kalam';
    return () => {
      document.body.style.overflow = ''; // Reset when the component is unmounted
    };
  }, []);

  // Handle wheel scroll event to detect scroll direction
  const handleWheel = (e) => {
    if (isScrolling.current) {
      return; // Prevent scrolling if transition is in progress
    }

    isScrolling.current = true; // Lock scrolling during transition

    // Determine the scroll direction
    const isScrollingDown = e.deltaY > 0;  // Downward scroll (deltaY > 0)
    const isScrollingUp = e.deltaY < 0;  // Upward scroll (deltaY < 0)
    const isScrollingHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY); // Horizontal scroll (deltaX > deltaY)

    // Log the direction
    console.log('Scroll Direction:', isScrollingDown ? 'down' : isScrollingUp ? 'up' : 'horizontal');

    // Handle scrolling based on the current page and direction
    if (isScrollingDown) {
      if (currentPage === 1) {
        setCurrentPage(2); // Transition from Page 1 to Page 2 vertically
      } else if (currentPage === 2) {
        setCurrentPage(3); // Transition from Page 2 to Page 3 horizontally
      } else if (currentPage === 3) {
        setCurrentPage(4); // Transition from Page 3 to Page 4 vertically
      }
    } else if (isScrollingUp) {
      if (currentPage === 4) {
        setCurrentPage(3); // Transition from Page 4 to Page 3 vertically (scroll upward)
      } else if (currentPage === 3) {
        setCurrentPage(2); // Transition from Page 3 to Page 2 horizontally
      } else if (currentPage === 2) {
        setCurrentPage(1); // Transition from Page 2 to Page 1 vertically
      }
    }

    // Horizontal scroll (deltaX) - if any, will trigger horizontal page transitions
    if (isScrollingHorizontal && currentPage === 2) {
      setCurrentPage(3); // Move horizontally from Page 2 to Page 3
    }

    // Reset scroll lock after transition
    setTimeout(() => {
      isScrolling.current = false; // Unlock scroll after transition completes
    }, 2000); // 1 second for transition duration
  };

  // Styles for each page
  const pageStyle = {
    width: 'calc(100vw - 3rem)', // Full width minus margins
    height: 'calc(100vh - 3rem)', // Full screen height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: 'white',
    // backgroundColor: '#ffffff',
    position: 'relative',
    flexShrink: 0,  // Prevent shrinking of pages
    margin: '1.5rem',
    padding: 0,
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const containerStyle = {
    height: '100vh',
    width: '100vw',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden', // Prevent scrollbars from appearing
  };

  const rowStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    flexDirection: 'row',
    flexShrink: 0, // Prevent shrinking of rows
  };

  // Set the transition path based on the current page
  const getRowTransform = (page) => {
    switch (page) {
      case 1:
        return 'translateY(0)';  // Page 1: Show in the first vertical position
      case 2:
        return 'translateY(-100vh)';  // Page 2: Move down (vertical scroll)
      case 3:
        return 'translateY(-100vh) translateX(-100vw)';  // Page 3: Move horizontally to the right (horizontal scroll)
      case 4:
        return 'translateY(0vh) translateX(-100vw)';  // Page 4: Move up vertically, keep horizontal scroll from Page 
      default:
        return 'translateY(0)';
    }
  };

  // Listen for mouse wheel events to trigger the scroll effect
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentPage]);

  return (
    <div ref={containerRef} style={containerStyle} className='glow marauders-map'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 2s ease-in-out',  // Ensure transition lasts 1 second
          transform: getRowTransform(currentPage),
        }}
      >
        {/* Row 1: Page 1 and Page 4 */}
        {/*borderTop:' solid black', borderLeft: 'solid black',borderRight: 'solid black'*/}
        {/* borderTop:'solid black', borderLeft: 'solid black', borderRight: 'solid black'*/}
        <div style={{ ...rowStyle }}>

          <div style={{...pageStyle, borderTop: '0.3rem solid black', borderLeft: '0.3rem solid black', borderRight: '0.3rem solid black' }}><Page1 /></div>

          <div style={{ ...pageStyle, borderTop: '0.3rem solid black', borderLeft: '0.3rem solid black', borderRight: '0.3rem solid black' }} ><Page4 /></div>

        </div>

        {/* Row 2: Page 2 and Page 3 */}
        {/* borderBottom: 'solid black',borderLeft: 'solid black' */}
        {/* borderBottom: 'solid black',  borderRight: 'solid black'*/}
        <div style={{ ...rowStyle }}>

          <div style={{ ...pageStyle, borderBottom: '0.3rem solid black', borderLeft: '0.3rem solid black', }}><Page2 /></div>

          <div style={{ ...pageStyle, borderBottom: '0.3rem solid black', borderRight: '0.3rem solid black', }}><Page3 /></div>

        </div>
      </div>
    </div>
  );
};

export default App;
