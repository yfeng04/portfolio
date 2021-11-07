import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import MdbAccordion from './MdbAccordion';
import MdbCarousel from './MdbCarousel';
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PageMdb() {

    useEffect(() => {
		document.title = `Movie Buzz | Yingying Feng`;
	}, []);

    window.scrollTo(0, 0);

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
                
                <section className="content intro-section">
                    <h1>Movie Buzz</h1>
                    <p className="overview">Movie Buzz is a movie database web application which allows users to browse and keep track of their favourite movies. Users are able to browse the movie information by popularity, ratings, currently playing, and upcoming. It utilizes The Movie Database API to dynamically display user ratings, release date, and plot summaries.</p>
                </section>
                
                <section className="content external-links">
                    <a target="_blank" rel="noreferrer" href="https://yingyingfeng.com/movie-buzz/"> Live Site </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a>
                </section>

                <section className="content accordion">
                <MdbAccordion/>
                </section>      

                <section className="content link-container">
                    <Link className="previous link-item" to="/work-farmtoplate">
                        <FaChevronLeft/>
                        <p>Previous</p>
                    </Link>
                    <Link className="next link-item" to="/work-portfolio">
                        <p>Next</p>
                        <FaChevronRight/>
                    </Link>
                </section>
        
                <Contact/>
            </main>
            <Footer/>
        </div>
        </motion.div>
    )
}

export default PageMdb;