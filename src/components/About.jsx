import about from '../assets/about.jpeg';
import about1 from '../assets/images12.png';
import about2 from '../assets/image13.png';
import about3 from '../assets/images14.png';

function About(){


    return (
        <>
        <div className="aboutContainer">
            <div className="aboutData1Container">
                <h1 className="aboutDescHead">WHO WE ARE</h1>
                <div className="brs">
                
            </div>
                <p className="aboutDesc"> 
                    Founded in 2022, DreamHomes emerged with a vision to revolutionize the real estate market by prioritizing clients' needs above all else. With over two years of experience in the industry, we have successfully assisted numerous clients in finding their dream homes across key cities like Hyderabad and Bangalore. Our dedicated team of licensed professionals leverages local market expertise and cutting-edge technology to deliver tailored solutions for every individual client. At DreamHomes, we believe that every client deserves a seamless and personalized experience, and we are committed to turning that belief into reality.
                </p>
            </div>
            <h1 className="aboutHistoryHead">HISTORY</h1>
            <div className="aboutData2Container">
                <div className="aboutImageContainer">
                    <img className='aboutImage1' src={about}></img>
                    <div className="images">
                        <img className='aboutImage2' src={about1}></img>
                        <img className='aboutImage3' src={about}></img>
                        <img className='aboutImage4' src={about1}></img>
                        <img className='aboutImage5' src={about}></img>
                        </div>
                </div>
                <div className="aboutData3Container">
                    <div className="aboutText1">
                        Founded in 2022, <strong>Pradeep Groups</strong> has swiftly established itself as a formidable player in the Hyderabad real estate market. Under the visionary leadership of Mr. Pradeep, the company has made an incredible mark, consistently delivering high-quality residential and commercial properties.
                    </div>
                    <div className="aboutText2">
                        Throughout its journey, <strong>Pradeep Groups</strong> has successfully constructed numerous buildings in sought-after areas such as Mallampet, Suchitra, and Kondapur. These developments include both completed projects and new constructions, showcasing the group's commitment to meeting the growing demand for housing and commercial spaces in these vibrant neighborhoods.
                    </div>
                    <div className="aboutText3">
                        <strong>Pradeep Groups</strong> is not only recognized for its outstanding real estate ventures but also for its dedication to social responsibility. The company takes pride in being a trusted entity, empowering its stakeholders to determine which charitable causes to support. This commitment to community engagement reflects the group's core values of integrity and giving back to society.
                    </div>
                    <div className="aboutText4">
                        In addition to Mr. Pradeep, the success of <strong>Pradeep Groups</strong> is bolstered by key partners Mr. Jagan Mohan Reddy and Mr. Vinay. Together, they bring a wealth of experience and expertise, driving the group's vision forward and fostering innovation in every project they undertake.
                    </div>
                    <div className="aboutText5">
                        As <strong>Pradeep Groups</strong> continues to grow and evolve, it remains steadfast in its mission to deliver exceptional real estate solutions while contributing positively to the communities it serves. With a strong foundation built on trust, quality, and responsibility, Pradeep Groups is poised to shape the future of real estate in Hyderabad for years to come.
                    </div>
                </div>
            </div>
            <div className="aboutLastContainer">
                Find your Happy palce - it starts with perfect home.
            </div>
        </div>
        </>
    )
}

export default About