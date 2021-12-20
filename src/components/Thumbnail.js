import {Link} from 'react-router-dom';

function Thumbnail({ project }) {

    return (
      
        <div className="project-container">

            <img className="project-image" src={project.featured_media_src_url} alt={project.acf.title}/>
            
            <div className='project-info'>
              <div className="project-details">
                <h2>{project.acf.title}</h2>
                <p>{project.acf.tech_stack}</p>
                <p className="overview">{project.acf.overview}</p>
              </div>

              <Link className="project-link" to={`/work/${project.id}`}>
                <p>Learn More</p>
              </Link>
            </div>

      </div>

    )
  }
   
  export default Thumbnail;