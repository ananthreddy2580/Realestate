import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';

function Project(){
    return (
        <>
        <div className="project1">
            <h1>Experience Luxury and Serenity at Urban Oasis Residences</h1>
            <div className="p1">
            <img className='projectImage1' src={project1}></img>
                <p>
                    Urban Oasis Residences invites you to embrace a life where luxury and tranquility coexist in perfect harmony. Strategically located in the vibrant heart of [City], this premium real estate community redefines urban living with its thoughtful design and elegant architecture. Each residence is meticulously crafted with open, sunlit layouts that capture breathtaking panoramic views of the city skyline. Designed to blend beauty and function, these homes feature high-quality finishes, expansive floor-to-ceiling windows, and eco-conscious materials, fostering a modern and environmentally friendly lifestyle.

                    Step outside your door to find a host of world-class amenities. Unwind at the exclusive infinity pool, tone up at the state-of-the-art fitness center, or relax with friends in our beautifully landscaped gardens. The community clubhouse offers a serene escape where residents can enjoy a spa, lounges, and private event spaces. Whether you're seeking relaxation, recreation, or connection, Urban Oasis provides a serene retreat to return to after a busy day, enhancing your everyday experience.


                </p>
            </div>
            
        </div>
        <div className="project2">
            <h1>An Unmatched Investment in Lifestyle, Comfort, and Sustainability</h1>
            <div className="p1">
            <img className='projectImage1' src={project2}></img>
            <p>Investing in Urban Oasis Residences means more than owning property—it’s investing in an elevated way of life. With cutting-edge smart home features, such as automated lighting, climate control, and security systems, each residence brings modern technology to your fingertips. Designed with sustainability in mind, the property incorporates energy-efficient solutions like green roofing, solar integration, and water-saving appliances, supporting a responsible and future-focused lifestyle.

Beyond the home, Urban Oasis is positioned in [City’s] most desirable district, providing direct access to renowned dining, entertainment, shopping, and cultural landmarks. Additionally, residents benefit from 24/7 concierge services, private parking, and dedicated security, ensuring every convenience and peace of mind are always close at hand. Urban Oasis Residences is not only a luxurious sanctuary but also a sound, long-term investment in one of [City’s] fastest-growing real estate markets. For those seeking elegance, comfort, and sustainability in one, Urban Oasis stands as the premier choice.</p>
        
            </div>
            </div>
        
        <div className="project3">
            <h1>Urban Oasis Residences: Your Gateway to Urban Living</h1>
            <div className="p1">
            <img className='projectImage1' src={project3}></img>
            <p>Welcome to Urban Oasis Residences, where luxury meets convenience in the heart of [City]. This prestigious development features spacious residences with modern designs, high-end finishes, and breathtaking skyline views. Enjoy resort-style amenities including a state-of-the-art fitness center, a serene spa, and a rooftop lounge perfect for socializing.

Urban Oasis fosters a vibrant community with regular events and activities that encourage connections among residents. Our dedicated concierge service ensures every need is met, from restaurant reservations to local insights.

Located just steps away from the best shopping, dining, and cultural landmarks, Urban Oasis offers the ideal balance of sophistication and accessibility. Experience an extraordinary lifestyle—welcome home to Urban Oasis.</p>
        
            </div>
            </div>
        </>
    )
}


function Projects(){
    return (
        <Project/>
    )
}

export default Projects