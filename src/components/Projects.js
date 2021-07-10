import Thumbnail from './Thumbnail'
//import placeholderImage from '../images/placeholder.png';
import farmtoplateImage from '../images/farmtoplate-1.jpg';
import mdbImage from '../images/movie-buzz-2.jpg';
import portfolioImage from '../images/portfolio-1.jpg';

function Projects() {
    return (
      <div >
        <Thumbnail
        link="/work-farmtoplate"
        url= {farmtoplateImage}
        title="Farm to Plate"
        tools="WordPress, Sass, JavaScript"
        />

        <Thumbnail
        link="/work-movie-buzz"
        url= {mdbImage}
        title="Movie Buzz"
        tools="React, Sass"
        />

        <Thumbnail
        link="/work-portfolio"
        url= {portfolioImage}
        title="Portfolio"
        tools="React, Sass"
        />
      </div>
    )
  }
   
  export default Projects;