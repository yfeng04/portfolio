import {Link} from 'react-router-dom';

function Thumbnail({link, url, tools, title, overview}) {
    return (
      
        <div className="project-container">

            <img className="project-image" src={url} alt={title}/>
            
            <div className='project-info'>
              <div className="project-details">
                <h2>{title}</h2>
                <p>{tools}</p>
                <p className="overview">{overview}</p>
              </div>

              <Link className="project-link" to={link}>
                <p>Learn More</p>
              </Link>
            </div>

      </div>

    )
  }
   
  export default Thumbnail;