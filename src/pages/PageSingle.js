import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Carousel from '../components/Carousel';
import { motion } from "framer-motion";

function PageSingle() {

    window.scrollTo(0, 0);
    
    const [project, setProject] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    let {id} = useParams();

    useEffect(() => {
        const fetchProjectDetails = async () => {
            // const res = await axios(`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects/${id}?_embed`);
            
            // console.log(res.data);
            // setProject(res.data);
            axios.get(`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects/${id}?_embed`).then(res=> {
                setProject(res.data);
                setIsLoading(false);
                console.log(res.data);
                console.log(isLoading);
            });
        }
         
      fetchProjectDetails();

    }, [ id, isLoading ]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const displayDesign = (content) => {
        if (content) {
            return content.acf.design.map((item, id) => 
            <article key={id} className='featured-item'>
                <p>{item.content}</p>
                {item.image ? <img src={item.image} alt={item.title} /> : '' }
                {item.desktop_link || item.mobile_link ?
                <div className="content external-links prototype ">
                    <a target="_blank" rel="noreferrer" href={item.desktop_link}>View Desktop Prototype</a>
                    <a target="_blank" rel="noreferrer" href={item.mobile_link}>View Mobile Prototype</a>
                </div> : '' }
            </article>  )
        } 
    }

    const displayDevelopment = (content) => {
        if (content) {
            return content.acf.development.map((item, id) => 
            <article key={id}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                {item.image ? <img src={item.image} alt={item.title} /> : '' }
            </article>  )
        } 
    }


    // const getNextPage = (content) => {
    //     const index = content.findIndex(item => item.id === '6');
    //     console.log(index);
    // }

    // getNextPage(peoples);
    
    return (
    <motion.div 
        className="page"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3, ease: 'easeInOut'}}>
            
        <Header/>

        <div className="content-wrapper">
            <main className="single-project"> 
            
                <section className="banner">
                    <Carousel project={project}/>
                </section>
                
                <section className="content intro-section">
                    <h1>{project && project.acf.title}</h1>
                    <p className="overview">{project && project.acf.description}</p>
                </section>
                
                <section className="content external-links">
                    {project && project.acf.links.map((item, id) => 
                    <a key={id} target="_blank" rel="noreferrer" href={item.url}>{item.name}</a> )}
                </section>

                <section className="content">
                    {project.acf.development_stack ?
                    <section className="project-item">
                        <h2>Development Stack</h2>
                        <ul className="tools">
                            {project.acf.development_stack.map((item, id) => 
                            <li key={id}>{item.tool}</li>  )}
                        </ul>
                    </section> : ''
                    }

                    {project.acf.research ?
                        <section className="project-item process research">
                            <h2>Research</h2>
                            {project && <p>{project.acf.research}</p>}
                        </section> : ''
                    }

                    {project.acf.design ?
                    <section className="project-item process design">
                        <h2>Design</h2>
                        {displayDesign(project)}
                    </section> : ''
                    }

                    {project.acf.development ?
                    <section className="project-item process development">
                        <h2>Development</h2>
                        {displayDevelopment(project)}
                    </section> : ''
                    }

                    {project.acf.reflection &&
                        <section className="project-item process reflection">
                            <h2>Reflection</h2>
                            {project && <p>{project.acf.reflection}</p>}
                        </section>
                    } 
                </section>

                <section className="content link-container">
                    <Link className="link-item" to='/work'>View More Work</Link>
                </section>

                <Contact />
                
            </main>

            <Footer/> 
        </div>
    </motion.div>
    )
}

export default PageSingle;