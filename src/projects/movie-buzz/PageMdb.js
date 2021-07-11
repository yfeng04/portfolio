import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import MdbAccordion from './MdbAccordion';
import MdbCarousel from './MdbCarousel';
import { motion } from "framer-motion";

function PageMdb() {

    useEffect(() => {
		document.title = `Movie Buzz | Yingying Feng`;
	}, []);

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
                    <MdbCarousel/>
                </section>
                
                <section className="intro-section">
                    <h1>Movie Buzz</h1>
                    <p>React, Sass</p>
                    <p className="overview">Movie Buzz is a movie database web application which allows users to browse and keep track of their favourite movies. Users are able to browse the movie information by popularity, ratings, currently playing, and upcoming. It utilizes The Movie Database API to dynamically display user ratings, release date, and plot summaries.</p>
                </section>
                
                <section className="external-links">
                    <a target="_blank" rel="noreferrer" href="https://yingyingfeng.com/movie-buzz/"> Live Site </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a>
                </section>

                <section className="accordion">
                <MdbAccordion/>
                </section>      

                <section className="return">
                    <Link className="return-link" to="/work"><p>← More Work</p></Link>
                </section>
        
                <Contact/>
            </main>
            <Footer/>
        </div>
        </motion.div>
    )
}

export default PageMdb;