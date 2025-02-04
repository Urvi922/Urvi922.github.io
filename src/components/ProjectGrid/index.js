import React from 'react';
import Notes from '../../images/notepade_app.png';
import Ecommerse from '../../images/e-commerce.png';
import API from '../../images/api.png';
import SocialMedia from '../../images/socialmedia.png';
import Stock from '../../images/stock.png';
import ImageProcessiong from '../../images/Imageprocessing.png';


const ProjectGrid = () => {

    const squares = [
        { size: 'large', image: API, title: 'Website using MongoDB, NodeJS and RESTful API', link: 'https://github.com/Urvi922/E-commerce-Website-in-NodeJS-using-MongoDB' },

        { size: 'medium', image: Notes, title: 'Notes App Backend', link: 'https://github.com/Urvi922/Notes-Backend-APIs' },

        { size: 'large', image: Ecommerse, title: 'E-commerse Web App with MySQL', link: 'https://github.com/Urvi922/E-commerce-Web-App-With-MySQL' },

        { size: 'medium', image: Stock, title: 'Stock price prediction using RNN', link: 'https://github.com/Urvi922/Stock-Price-Prediction-with-RNN' },
 
        { size: 'medium', image: SocialMedia, title: 'Social Media Web App using Socket.io', link: 'https://github.com/Urvi922/Social-Media-using-Socket.io' },
       
        { size: 'medium', image: ImageProcessiong, title: 'Comparison between CNNs', link: 'https://github.com/Urvi922/Comparison-between-CNNs-for-Image-Classification' },
      ];
       

    const getItemSize = (size) => {
        switch (size) {
            case 'medium':
                return { gridRowEnd: 'span 1', gridColumnEnd: 'span 1'};
            case 'large':
                return { gridRowEnd: 'span 4', gridColumnEnd: 'span 2'};
            default:
                return {};
        }
    }

    const gridContainer = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '1em',
        padding: '0.1em'
    }

    const gridItem = {
        backgroundColor: '#ffffff',
        position: 'relative',
        width: '90%',
        height: '90%',
        overflow: 'hidden',
        borderRadius: '1em',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
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
                <div key={index} style={{ ...gridItem, ...getItemSize(square.size) }}
                onMouseEnter={(e) =>
                    e.currentTarget.querySelector('.hover-overlay').style.opacity = '1'
                }
                onMouseLeave={(e) =>
                    e.currentTarget.querySelector('.hover-overlay').style.opacity = '0'
                }
                >
                    <img src={square.image} alt={index} style={imageStyle} />
                    
                    <div className="hover-overlay" style={hoverOverlay}>
                    <div style={{ fontSize: '2em'}}>{square.title}</div>
                        <a
                            href={square.link}
                            style={{
                                color: '#FFF',
                                textDecoration: 'underline',
                                fontSize: 'em'
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