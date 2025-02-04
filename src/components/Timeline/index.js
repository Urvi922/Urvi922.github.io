import React, {useState} from 'react';

const Timeline = () => {

    const [isShowDetails, setShowDetails] = useState(null);

    const experience = [
        { year: '2015', 
          title: 'Bachelors in Instrumentation and Control Engineering', 
          company: 'Nirma University', 
          role: 'Student',
          description: 'Microcontrollers, Microprocessors, PLC, System Control, Digital Logic Design, Process Control,  Data Communication & Industrial Networking' },
        { year: '2019', 
          title: 'Product Manager', 
          company: 'Dazzle Robotics', 
          role: 'Product Manager',
          description: 'Developed electronic products handled the e-launch on e-commerse website and managed the clients orders for products. Worked with Senior Product manager to handle e-marketing for products resulting in incresed sale. Developed product page of -ecommerse website using HTMl and CSS.' },
        { year: '2021', 
          title: 'Master in Electrical and Computer Engineering', company: 'University of Waterloo',
          role: 'Student',
          description: 'Python, Tensorflow, Keras, NumPy, Pandas, Scikit, AI/ML Algorithms, NLP, Data Cleaning, Data Processing'  },
        { year: '2023', 
          title: 'Full Stack Web Developer', 
          company: 'Interact Health PRO', 
          role: 'Full Stack Web Developer',
          description: 'Contributed to development of Web application using ASP.NET C## intergrated with MSSQL Server for database handling. Developed web pages to handle various clients and health care information by users and admins. Gained knowledge on all aspects of Web Development Life Cycle.' },
        { year: '2023', 
          title: 'Freelance Developer', 
          company: 'Jewellery Website', 
          role: 'Full Stack Developer',
          description: 'Developed an E-commerce web application for a jewelry business, where backend is developed in NodeJS and the frontend in React. Firebase is used to store the website data and user authentication, along with Redux for efficient state management.' },     
    ]

    const lineStyle = {
        display: 'flex',
        width: 'calc(100% - 6%)',
        height: '0.5em',
        backgroundColor: 'black',
        position: 'relative',
        top: '50%',
        paddingLeft: '6%',
        gap: '16%'
    }

    const divisionStyle = {
        flex: 1,
        position:'relative',
        borderLeft: '0.5em solid black',
        height: '3em',
        alignItems: 'center',
        fontSize: '1em',
    }


    const circleStyle = {
        position: 'relative',
        top: '3em',
        right: '2.7em',
        width: '5em',
        height: '5em',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1em',
        fontWeight: 'bold',
    };

    const infoStyle = {
        position: 'relative',
        top: '-12em',
        right: '10em',
        fontSize: '1.3em',
        color: 'black',
        width: '300%',
        height: '100%',
    };

    return (
        <>

            <div style={lineStyle}>
                {experience.map((item, index) => (
                    <div key={index} style={{ ...divisionStyle, bottom: index % 2 === 0 ? '3em' : '0'}}>
                        {/* Circle with year */}
                        <div 
                            style={{...circleStyle, top: index % 2 === 0 ? '-4.5em' : '3em'}}
                            onMouseEnter={() => setShowDetails(index)}
                            onMouseLeave={() => setShowDetails(null)}
                        
                        >
                            {item.year}
                        </div>

                        {/* Info box on the other side */}
                        {isShowDetails === index && (
                            <div style={{...infoStyle, top: index % 2 === 0 ? '0.1em' : '-20em'}}>
                                <strong>
                                    {item.title},
                                    <br />
                                    {item.company}
                                </strong>
                                <br />
                                <strong>My Role:</strong> {item.role} <br/>
                                <strong>Description:</strong> {item.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
    </>
    );
};


export default Timeline;