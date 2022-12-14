import { useEffect, useState } from 'react';
import axios from 'axios';
import Thumbnail from './Thumbnail';

function Projects() {

  const [projectList, setProjectList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const fetchProjects = async () => {
        // setIsLoading(true);
        // const res = await axios.get (`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects?_embed`);

        // //.finally(() => setIsLoading(false));
        
        // setProjectList(res.data);
        // console.log(res.data);
        // console.log(isLoading);

        axios.get("https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects?_embed").then(res=> {
          setProjectList(res.data);
          setIsLoading(false);
          console.log(res.data);
          console.log(isLoading);
        });
       
      }
  
      fetchProjects();

    }, [isLoading]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div >
        {projectList.map(project => <Thumbnail key={project.id} project={project}/>)}
      </div>
    )
  }
   
  export default Projects;