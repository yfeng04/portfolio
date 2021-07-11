import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import PortfolioAccordion from './PortfolioAccordion';
import PortfolioCarousel from './PortfolioCarousel';
import { motion } from "framer-motion";

function PagePortfolio() {

    useEffect(() => {
		document.title = `Portfolio Website | Yingying Feng`;
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
                <PortfolioCarousel/>
            </section>
            
            <section className="intro-section">
                <h1>Personal Portfolio</h1>
                <p>React, Sass</p>
                <p className="overview">A personal portfolio website showcasing a selection of my web development projects. The website is built on React and features a smooth page transition using the animation library Framer Motion. </p>
            </section>
            
            <section className="external-links">
                <Link target="_blank" to="/"> Live Site </Link>
                <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a>
            </section>

            <section className="accordion">
                <PortfolioAccordion/>
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

export default PagePortfolio;