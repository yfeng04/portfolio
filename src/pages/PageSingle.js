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
    let {id} = useParams();

    useEffect(() => {

    const fetchProjectDetails = async () => {
        const res = await axios(`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/projects/${id}?_embed`);
        
        // console.log(res.data);
    
        setProject(res.data);
       
      }
  
      fetchProjectDetails();

    }, [ id ]);

    const displayFeatures = (content) => {
        if (content) {
            return content.acf.features.map((item, id) => 
            <article key={id} className='featured-item'>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                {item.image ? <img className={`feature-img ${item.image.slice(-3)}`} src={item.image} alt={item.title} /> : '' }
            </article>  )
        }
       
    }

    const displayProcess = (content) => {
        if (content) {
            return content.acf.process.map((item, id) => 
            <article key={id}>
                <h3>{item.title}</h3>
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
                    <a target="_blank" rel="noreferrer" href={`https://yingyingfeng.com/${project.slug}`}>Live Site</a>
                    <a target="_blank" rel="noreferrer" href={`https://github.com/yfeng04/${project.slug}`}>Github</a>
                </section>

                <section className="content">
                    {/* Development Stack */}
                    <section className="project-item">
                        <h2>Development Stack</h2>
                        <ul className="tools">
                            {project && project.acf.development_stack.map((item, id) => 
                            <li key={id}>{item.tool}</li>  )}
                        </ul>
                    </section>

                    {/* Key Features */}
                    <section className="project-item features">
                        <h2>Highlights</h2>
                        {displayFeatures(project)}
                    </section>

                    <section className="project-item process">
                        <h2>Process</h2>
                        {displayProcess(project)}
                    </section>
                    
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