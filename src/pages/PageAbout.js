import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import profileImg from '../images/profile-img.png';
import { motion } from "framer-motion";


function PageAbout() {

    useEffect(() => {
		document.title = `About | Yingying Feng`;
	}, []);

    window.scrollTo(0, 0);

    return (
        <motion.div 
            className="page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
        
            <Header />
            
        <div className="content-wrapper">
            <main className="about">
                <section className="welcome">
                    <img className="profile-img" src={profileImg} alt="Profile"/>
                    <div className="intro">
                        <p>Hi, I’m Yingying.  I’m currently a student at the BCIT Front-End Web Development program. In this 6-month, hands-on program, I gained solid skills on various programming languages as well as UX and UI design.</p>
                        
                        <p>My favourite tools are PHP, React, WordPress and Adobe Illustrator. So far I have built a few web applications on React and now I’m working in a team of 4 to develop an e-commerce website based on WordPress. </p>
                        
                        <p>Prior to web development, I have completed a Master degree in Food Science and thereby working in the food industry for about a year, helping with food quality control and food labelling. From there I have developed good team communication and time management skills. Overall I would say I’m a detail-oriented person and I’m good at managing stress. </p>

                        <p>A bit about me personally, I love cooking and photography. Before covid hits, I’m a part-time food blogger where I love to explore and review new places in town.</p>

                    </div>
                </section>

                <section className="toolkit">
                    <h2>My Toolkit</h2>
                    <div className="design-tools">
                        <h3>Design</h3>
                        <ul>
                            <li>Adobe</li>
                                <li className="adobe">XD</li>
                                <li className="adobe">Illustrator</li>
                                <li className="adobe">Photoshop</li>
                            <li>Invision</li>
                        </ul>
                    </div>

                    <div className="dev-tools">
                        <h3>Development</h3>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3, Sass</li>
                            <li>JavaScript, jQuery, React</li>
                            <li>PHP</li>
                            <li>WordPress</li>
                            <li>Git, Github</li>
                        </ul>
                    </div>
                </section>
    
                <Contact />
            </main>
            <Footer />
        </div>
        </motion.div>
    )
}

export default PageAbout;
