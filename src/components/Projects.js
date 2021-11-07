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
        carousel="<CapstoneCarousel/>"
        title="Farm to Plate"
        tools="WordPress + WooCommerce, Sass, JavaScript"
        overview="A multi-page e-commerce website built on the WordPress and WooCommerce."
        />

        <Thumbnail
        link="/work-movie-buzz"
        url= {mdbImage}
        title="Movie Buzz"
        tools="React, Sass"
        overview="A movie database web application designed to provide users with latest movie information."
        />

        <Thumbnail
        link="/work-portfolio"
        url= {portfolioImage}
        title="Portfolio"
        tools="React, Sass"
        overview="A personal portfolio website showcasing a selection of my web development projects."
        />
      </div>
    )
  }
   
  export default Projects;