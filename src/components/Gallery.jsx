import project1 from '../assets/project1.jpeg';
import project2 from '../assets/project2.jpeg';
import project3 from '../assets/project3.jpeg';
import project4 from '../assets/image1.jpeg';
import project5 from '../assets/image2.jpeg';

function Photos(){
    return(
        <>
        <div className="mainPhotoContainer">
            <div className="headgallery">
                <h3>More images will add soon.....</h3>
            </div>
            <div className="photoContainer1">
                <img className='projectImage1' src={project1}></img>
                <img className='projectImage1' src={project2}></img>
                <img className='projectImage1' id='hide1' src={project3}></img>
            </div>
            <div className="photoContainer1">
                <img className='projectImage1' src={project1}></img>
                <img className='projectImage1' src={project2}></img>
                <img className='projectImage1' id='hide1' src={project4}></img>
            </div>
            <div className="photoContainer1">
                <img className='projectImage1' src={project4}></img>
                <img className='projectImage1' src={project2}></img>
                <img className='projectImage1' id='hide1' src={project3}></img>
            </div>
        </div>
        </>
    )
}

function Gallery(){
    return (
       <Photos/>
    )
}

export default Gallery