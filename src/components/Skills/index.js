import React, { useState } from 'react'; 
import Python from '../../images/python.png';
import Javascript from '../../images/javascript.png';
import HTML from '../../images/html.png';
import CSS from '../../images/css.png';
import CSharp from '../../images/csharp.png';
import ReactImg from '../../images/react.png';
import R from '../../images/r.png';
import NodeJS from '../../images/nodejs.png';
import MySQL from '../../images/mysql.png';
import MongoDB from '../../images/mongodb.png';
import Git from '../../images/git.png';
import Jupyter from '../../images/jupyter.png';
import Vscode from '../../images/vscode.png';
import VisualStudio from '../../images/visualstudio.png';
import Redux from '../../images/redux.png';
import Postman from '../../images/postman.png';
import NPM from '../../images/npm.png';
import Firebase from '../../images/firebase.png';
import Figma from '../../images/figma.png';




const Skills = () => {
    const [isHovered, setIsHovered] = useState(false);

    const skills = [
        { src: Python, alt: "Python" },
        { src: Javascript, alt: "Javascript" },
        { src: ReactImg, alt: "React" },
        { src: MySQL, alt: "MySQL" },
        { src: MongoDB, alt: "MongoDB" },
        { src: Redux, alt: "Redux" },
        { src: Firebase, alt: "Firebase" },
        { src: NodeJS, alt: "NodeJS" },
        { src: HTML, alt: "HTML" },
        { src: CSS, alt: "CSS" },
        { src: CSharp, alt: "CSharp" },
        { src: R, alt: "R" },
        { src: Git, alt: "Git" },
        { src: VisualStudio, alt: "VisualStudio" },
        { src: Postman, alt: "Postman" },
        { src: NPM, alt: "NPM" },
        { src: Figma, alt: "Figma" },
        { src: Jupyter, alt: "Jupyter" },
        { src: Vscode, alt: "Vscode" }
    ];

    // const tools = [
    //     { src: Git, alt: "Git" },
    //     { src: VisualStudio, alt: "VisualStudio" },
    //     { src: Postman, alt: "Postman" },
    //     { src: NPM, alt: "NPM" },
    //     { src: Figma, alt: "Figma" },
    //     { src: Jupyter, alt: "Jupyter" },
    //     { src: Vscode, alt: "Vscode" }
    // ];

    const isMobile = window.innerWidth <= 898;

    const image = {
        color: 'black',
        width: isMobile? '3em': '8em',
        height: isMobile? '3em': '8em',
        padding: '1.5em',
    }

    // const heading = {
    //     color: 'black',
    //     fontSize: isMobile? '1.2em': '2.4em',
    //     padding: isMobile? '0.1em': '0.6em',
    // }

    const flipCardStyle ={
        perspective: '1000px',
        width: isMobile? '3em': '8em',
        height: isMobile? '3em': '8em',
        padding: isMobile? '1em': '2em',
    }

    const flipCardInnerStyle ={
        position: 'relative',
        width: isMobile? '3em': '8em',
        height: isMobile? '3em': '8em',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
    }
    
    const frontStyle ={
        position: 'absolute',
        width: isMobile? '3em': '8em',
        height: isMobile? '3em': '8em',
        backfaceVisibility: 'hidden',
    }

    const backStyle ={
        ...frontStyle,
        transform: 'rotateY(180deg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile? '1em': '2em',
        color: 'black'
    }       

    const FlipCard = ({imageSrc, text}) => {
        const [isFlip, setIsFlip] = useState(false);
        return (
        <div 
            style={flipCardStyle}
            onMouseEnter={() => setIsFlip(true)}
            onMouseLeave={() => setIsFlip(false)}
        >
            <div style={{...flipCardInnerStyle, transform: isFlip ? 'rotateY(180deg)' : 'rotateY(0deg)', paddingRight:'4em'}}>
                <div style={frontStyle}>
                    <img src={imageSrc} alt='Card Front' style={image} />
                </div>
                <div style={backStyle}>
                    {text}
                </div>
            </div>
        </div>
        );
    }


    const ImageTech = ({ title, images }) => (
        <div>
            {/* <div style={heading}>{title}</div> */}
            <div style={{display:'flex', flexDirection:'row'}}>
                {images.map((img, index) => (
                    <FlipCard key={index} imageSrc={img.src} text={img.alt} />   
                       
                ))}
            </div>
        </div>
    );

    const carouselContainer = {
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative'
    }

    const movingTrack = {
        display: 'flex',
        animation: isHovered ? 'none' : 'scrolling 40s linear infinite',
        willChange: 'transform'
    };

    const Carousel = ({ children }) => (
        <div 
            style={carouselContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={movingTrack}>{children}{children}</div>
            <style>
                {`
                @keyframes scrolling {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                `}
            </style>

        </div>
    );
        
    

    
    

    

return  (
    <>
        <Carousel>  
            <ImageTech title="Skills" images={skills} />
            {/* <ImageTech title="Tools" images={tools} />  */}
        </Carousel>

    </>
);

};

export default Skills