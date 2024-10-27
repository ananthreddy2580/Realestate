import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import gif from '../assets/build.gif'; 


export function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleNavbar = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <div className="mainNavbar">
                <div className="header1">
                    <div className="appname">
                        <img src={logo} alt="Logo" className='logo' />
                    </div>
                    <div className="toggle-button" onClick={toggleNavbar}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={`modal ${isModalOpen ? 'active' : ''}`}>
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className="navbar">
                                <Link to="/" onClick={closeModal}>Home</Link>
                                <Link to="Builders/About" onClick={closeModal}>About</Link>
                                <Link to="Builders/Projects" onClick={closeModal}>Projects</Link>
                                <Link to="Builders/Gallery" onClick={closeModal}>Gallery</Link>
                                {/* <Link to="Builders/Custom_Interiors" onClick={closeModal}>Custom Interiors</Link>
                                <Link to="Builders/Testimonials" onClick={closeModal}>Testimonials</Link> */}
                                <Link to="Builders/Contact" onClick={closeModal}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                {/* Links for larger screens */}
                    <div className="links">
                        <div className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="Builders/About">About</Link>
                        <Link to="Builders/Projects">Projects</Link>
                        <Link to="Builders/Gallery">Gallery</Link>
                        {/* <Link to="Builders/Custom_Interiors">Custom Interiors</Link>
                        <Link to="Builders/Testimonials">Testimonials</Link> */}
                        <Link to="Builders/Contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function Home() {
    return (
        <div className="homemain">
            <div className="companyName">
                <h1>Pradeep Groups</h1>
            </div>
        </div>
    );
}

export function Home1() {
    const [activeText, setActiveText] = useState('text1');

    const handleMouseOver = (targetId) => {
        setActiveText(targetId);
    };
    return (
        <div className="home1">
            <div className="gifContainer">
                <div className='gifText'><img src={gif} alt="Build Gif" className='gif'/>
                <br></br>
                <div className='textHeadContainer'>
                    <strong>A house is made of walls and beams; a home is built with love and dreams.</strong>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='textContainer'>
                    <div className="textCategoryContainer">
                    <div className={`text-item ${activeText === 'text1' ? 'show' : 'hide'}`} id="text1">
                        Welcome to <strong>PRADEEP GROUPS</strong> where we turn your dreams of the perfect home into reality. Our expertise lies in offering premium real estate options combined with bespoke woodwork solutions that cater to your unique preferences and needs.  we believe that your home is more than just a place—it's a reflection of who you are and where you want to be. We are passionate about transforming your dreams of the perfect living space into a tangible reality. With a commitment to excellence.
                        
{/* Join us on a journey to find and create a home that truly embodies your vision. Welcome to a world where your ideal living space comes to life, crafted with expertise and tailored to your every desire. */}
                    </div>
                    <div className={`text-item ${activeText === 'text2' ? 'show' : 'hide'}`} id="text2">
                        Welcome to PRADEEP GROUPS  where we turn your dreams of the perfect home into reality. Our expertise lies in offering premium real estate options combined with bespoke woodwork solutions that cater to your unique preferences and needs.  we believe that your home is more than just a place—it's a reflection of who you are and where you want to be. We are passionate about transforming your dreams of the perfect living space into a tangible reality. With a commitment to excellence.
                        
                    </div>
                    <div className={`text-item ${activeText === 'text3' ? 'show' : 'hide'}`} id="text3">
                        Welcome to PRADEEP GROUPS  where we turn your dreams of the perfect home into reality. Our expertise lies in offering premium real estate options combined with bespoke woodwork solutions that cater to your unique preferences and needs.  we believe that your home is more than just a place—it's a reflection of who you are and where you want to be. We are passionate about transforming your dreams of the perfect living space into a tangible reality. With a commitment to excellence.                        
                    </div>
                    <div className={`text-item ${activeText === 'text4' ? 'show' : 'hide'}`} id="text4">
                        Welcome to PRADEEP GROUPS  where we turn your dreams of the perfect home into reality. Our expertise lies in offering premium real estate options combined with bespoke woodwork solutions that cater to your unique preferences and needs.  we believe that your home is more than just a place—it's a reflection of who you are and where you want to be. We are passionate about transforming your dreams of the perfect living space into a tangible reality. With a commitment to excellence.
                       
                    </div>
                    <div className={`text-item ${activeText === 'text5' ? 'show' : 'hide'}`} id="text5">
                        Welcome to PRADEEP GROUPS  where we turn your dreams of the perfect home into reality. Our expertise lies in offering premium real estate options combined with bespoke woodwork solutions that cater to your unique preferences and needs.  we believe that your home is more than just a place—it's a reflection of who you are and where you want to be. We are passionate about transforming your dreams of the perfect living space into a tangible reality. With a commitment to excellence.
                        
                    </div>

                    <div className="button-container">
                        <div
                            className={`button ${activeText === 'text1' ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver('text1')}
                        ></div>
                        <div
                            className={`button ${activeText === 'text2' ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver('text2')}
                        ></div>
                        <div
                            className={`button ${activeText === 'text3' ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver('text3')}
                        ></div>
                        <div
                            className={`button ${activeText === 'text4' ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver('text4')}
                        ></div>
                        <div
                            className={`button ${activeText === 'text5' ? 'active' : ''}`}
                            onMouseOver={() => handleMouseOver('text5')}
                        ></div>
                    </div>
                </div>
                </div>
                </div>
                <br></br><br></br><br></br>
                <br></br><br></br>
            </div>
        </div>
    );
}

export function HomePage(){
    return(
        <>
        <Home/>
        <Home1/>
        </>
    )
}

