import React from 'react';
import Notes from '../../images/notepade_app.png';
import Ecommerse from '../../images/e-commerce.png';
import API from '../../images/api.png';
import SocialMedia from '../../images/socialmedia.png';
import Stock from '../../images/stock.png';
import ImageProcessiong from '../../images/Imageprocessing.png';
import useScreenSize from '../../hooks/useScreenSize';


const ProjectGrid = () => {

    const squares = [
        { size: 'large', image: API, title: 'Website using MongoDB, NodeJS and RESTful API', link: 'https://github.com/Urvi922/E-commerce-Website-in-NodeJS-using-MongoDB' },

        { size: 'medium', image: Notes, title: 'Notes App Backend', link: 'https://github.com/Urvi922/Notes-Backend-APIs' },

        { size: 'large', image: Ecommerse, title: 'E-commerse Web App with MySQL', link: 'https://github.com/Urvi922/E-commerce-Web-App-With-MySQL' },

        { size: 'medium', image: Stock, title: 'Stock price prediction using RNN', link: 'https://github.com/Urvi922/Stock-Price-Prediction-with-RNN' },
 
        { size: 'medium', image: SocialMedia, title: 'Social Media Web App using Socket.io', link: 'https://github.com/Urvi922/Social-Media-using-Socket.io' },
       
        { size: 'medium', image: ImageProcessiong, title: 'Comparison between CNNs', link: 'https://github.com/Urvi922/Comparison-between-CNNs-for-Image-Classification' },
      ];
       
    
    const { isMobile } = useScreenSize();

    const getItemSize = (size, isMobile) => {
        if (isMobile) {
            return size === 'large'
              ? { gridRowEnd: 'span 1', gridColumnEnd: 'span 1' } 
              : { gridRowEnd: 'span 1', gridColumnEnd: 'span 1' }; 
          } else {
            return size === 'large'
              ? { gridRowEnd: 'span 4', gridColumnEnd: 'span 2' } 
              : { gridRowEnd: 'span 1', gridColumnEnd: 'span 1' }; 
          }
    };

    const getGridTemplate = (isMobile) => {
        if (isMobile) {
            return `
                "a b"
                "c d"
                "e f"
            `; 
        } else {
           return  `
            "a a b d d e"
            "a a c d d f"
        `
        }
    }

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
        gridTemplateAreas: getGridTemplate(isMobile),
        gap: isMobile ? '0.1em' : '1em',
        padding: '0.1em'
    }

    const gridItem = {
        backgroundColor: '#ffffff',
        position: 'relative',
        width: isMobile? '70%' : '90%',
        height:  isMobile? '70%': '90%',
        overflow: 'hidden',
        borderRadius: '1em',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '0.11em solid black',
    }

    const imageStyle = {
        width: isMobile? '90%' : '100%',
        height: isMobile? '90%' : '100%',
        objectFit: isMobile? 'contain' : 'cover',
        padding: isMobile? '0.6em' : '0'
    }


    const hoverOverlay = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.90)', 
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0', 
        transition: 'opacity 0.3s ease',
    };

    return (
        <div style={gridContainer}>
            {squares.map((square, index) => (
                <div key={index} style={{ ...gridItem, ...getItemSize(square.size, isMobile)}}
                onMouseEnter={(e) =>
                    e.currentTarget.querySelector('.hover-overlay').style.opacity = '1'
                }
                onMouseLeave={(e) =>
                    e.currentTarget.querySelector('.hover-overlay').style.opacity = '0'
                }
                >
                    <img src={square.image} alt={index} style={imageStyle} />
                    
                    <div className="hover-overlay" style={hoverOverlay}>
                    <div style={{ fontSize: isMobile? '0.5em' : '2em'}}>{square.title}</div>
                        <a
                            href={square.link}
                            style={{
                                color: '#FFF',
                                textDecoration: 'underline',
                                fontSize: isMobile? '0.5em' : '2em'
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Github Link
                        </a>


                    </div>


                </div>
            ))}
        </div>
    );

};

export default ProjectGrid;