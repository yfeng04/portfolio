import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import CapstoneAccordion from './CapstoneAccordion';
import CapstoneCarousel from './CapstoneCarousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from "framer-motion";

function PageCapstone() {

    useEffect(() => {
		document.title = `Farm to Plate | Yingying Feng`;
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
                        <CapstoneCarousel />
                    </section>
                    
                    <section className="content intro-section">
                        <h1>Farm to Plate</h1>
                        <p className="overview">Farm to Plate is a fictitious business that sells weekly food subscription boxes. In a team of 4, we built a multi-page e-commerce website on the WordPress and WooCommerce. This site features a fully customized theme and includes custom post types, custom fields, taxonomies, and styles.</p>
                    </section>
                    
                    <section className="content external-links">
                        <a target="_blank" rel="noreferrer" href="https://farmtoplate.bcitwebdeveloper.ca/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a>
                    </section>


                    <section className="content accordion">
                        <CapstoneAccordion />
                    </section>

                    <section className="content link-container">
                        <Link className="previous link-item" to="/work-portfolio">
                            <FaChevronLeft/>
                            <p>Previous</p>
                        </Link>
                        <Link className="next link-item" to="/work-movie-buzz">
                            <p>Next</p>
                            <FaChevronRight/>
                        </Link>
                    </section>
                    <Contact />
                </main>

                <Footer/>
                
            </div>
        </motion.div>
    )
}

export default PageCapstone;