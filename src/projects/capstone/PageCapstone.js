import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import CapstoneAccordion from './CapstoneAccordion';
import CapstoneCarousel from './CapstoneCarousel';

function PageCapstone() {


    return (
        <div className="page">
                
            <Header/>

            <div className="content-wrapper">
                <main className="single-project"> 
                    <div className="banner">
                        <CapstoneCarousel />
                    </div>
                    
                    <section className="intro-section">
                        <h1>Farm to Plate</h1>
                        <p>WordPress + WooCommerce, Sass, JavaScript</p>
                        <p className="overview">Farm to Plate is a fictitious business that sells weekly food subscription boxes. In a team of 4, we built a multi-page e-commerce website on the WordPress and WooCommerce. This site features a fully customized theme and includes custom post types, custom fields, taxonomies, and styles.</p>
                    </section>
                    
                    <section className="external-links">
                        <a target="_blank" rel="noreferrer" href="https://farmtoplate.bcitwebdeveloper.ca/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a>
                    </section>


                    <section className="accordion">
                        <CapstoneAccordion />
                    </section>

                    <section className="return">
                        <Link className="return-link" to="/work"><p>← More Work</p></Link>
                    </section>
                    <Contact />
                </main>

                <Footer/>
                
            </div>
        </div>
    )
}

export default PageCapstone;