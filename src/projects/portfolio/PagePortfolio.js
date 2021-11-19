import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import PortfolioAccordion from './PortfolioAccordion';
import PortfolioCarousel from './PortfolioCarousel';
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function PagePortfolio() {

    useEffect(() => {
		document.title = `Portfolio Website | Yingying Feng`;
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
                <PortfolioCarousel/>
            </section>
            
            <section className="content intro-section">
                <h1>Personal Portfolio</h1>
                <p className="overview">A personal portfolio website showcasing a selection of my web development projects. The website is built on React and features a smooth page transition using the animation library Framer Motion. </p>
            </section>
            
            <section className="content external-links">
                <Link target="_blank" to="/"> Live Site </Link>
                <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04/portfolio" >Github</a>
            </section>

            <section className="content accordion">
                <PortfolioAccordion/>
            </section>      

            <section className="content link-container">
                <Link className="previous link-item" to="/work-movie-buzz">
                    <FaChevronLeft/>
                    <p>Previous</p>
                </Link>
                <Link className="next link-item" to="/work-farmtoplate">
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

export default PagePortfolio;