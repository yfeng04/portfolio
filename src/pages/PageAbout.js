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
                    <article className="intro">
                        <h1>Hi, I'm Yingying.</h1>
                        <p>I am a front-end web developer & UI designer based in Metro Vancouver, recently graduated from BCIT.</p>
                        
                        <p>I'm new to the technology field as I started coding not long ago. However, my coding and design skills keep growing fast by continuous learning and exploring. I'm passionate of creating websites with beautiful design and great user experience by writing clean and efficient codes.</p>
                        
                        <p>I love design and coding. Front-end web development allows me to create and solve problems with both skills. It is a vast world to be explored and I’m hoping to become part of it. It may seem that most of my past experiences are unrelated but I believe my diverse education and work background can help me understand clients in different fields and manage a variety of situations. </p>
                    </article>

                </section>

                {/* <section className="education">
                    <h2>Education</h2>
                    <h3>The British Columbia Institute of Technology</h3>
                    <div className="year-wrapper">
                        <p>Front-End Web Developer Full-Time Certificate</p>
                        <p>2021</p>
                    </div>

                    <h3>The University of British Columbia</h3>
                    <div className="year-wrapper">
                        <p>Master of Food Science</p>
                        <p>2018-2019</p>
                    </div>

                    <h3>University of Guleph</h3>
                    <div className="year-wrapper">
                        <p>Bachelor of Science - Food Science</p>
                        <p>2015-2018</p>
                    </div>
                </section>

                <section className="experience">
                    <h2>Experience</h2>
                    <h3>Junior Front-End Web Developer</h3>
                    <div className="year-wrapper">
                        <p>Freelance</p>
                        <p>Jul 2021 - Present</p>
                    </div>

                    <h3>Quality Assurace Technician (Food Safety)</h3>
                    <div className="year-wrapper">
                        <p>Purdys Chocolatier | Vancouver, BC</p>
                        <p>Dec 2019 - Dec 2020</p>
                    </div>

                    <h3>Graduate Teaching Assistant</h3>
                    <div className="year-wrapper">
                        <p>The University of British Columbia | Vancouver, BC</p>
                        <p>Jan 2019 - May 2019</p>
                    </div>

                    <h3>Social Media Intern</h3>
                    <div className="year-wrapper">
                        <p>Bresica University College | London, ON</p>
                        <p>Sep 2014 - Apr 2015</p>
                    </div>
                </section> */}

                <section className="toolkit">
                    <h2>My Toolkit</h2>
                    <div className="design-tools">
                        <h3>Design</h3>
                        <ul>
                            <li>Adobe</li>
                                <li className="adobe">XD</li>
                                <li className="adobe">Illustrator</li>
                                <li className="adobe">Photoshop</li>
                            <li>InVision</li>
                        </ul>
                    </div>

                    <div className="dev-tools">
                        <h3>Development</h3>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3, Sass</li>
                            <li>JavaScript, jQuery, React</li>
                            <li>PHP</li>
                            <li>WordPress, WooCommerce</li>
                            <li>Git, Github</li>
                        </ul>
                    </div>
                </section>

                {/* <section>
                    <h2>Language</h2>
                    <h3>English</h3>
                    <p>Professional Level</p>

                    <h3>Mandarin & Cantonese</h3>
                    <p>Native Speaker</p>
                </section> */}
    
                <Contact />
            </main>
            <Footer />
        </div>
        </motion.div>
    )
}

export default PageAbout;
