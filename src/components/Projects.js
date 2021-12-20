import { useEffect, useState } from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail';

function Projects() {

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {

    const fetchProjects = async () => {
        const res = await axios (`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects?_embed`);
        
        console.log(res.data);
    
        setProjectList(res.data);
       
      }
  
      fetchProjects();

    }, []);

    return (
      <div >
        {projectList.map(project => <Thumbnail key={project.id} project={project}/>)}
      </div>
    )
  }
   
  export default Projects;