import React from 'react';
import Lottie from 'lottie-react';
import loader from '../../images/Loader.json';

const Loader = () => {

    const loaderContainer = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
        zIndex: 10001,
    }

    return (
        <div style={loaderContainer}>
            <Lottie animationData={loader} loop={true} />
        </div>
    );
};

export default Loader;