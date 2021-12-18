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
                        
                        <p>I'm quite new to the technology field. Although I started coding not long ago, my skills keep growing fast through continuous learning and exploring. I'm passionate of creating websites with beautiful design and great user experience by writing clean and efficient codes.</p>
                        
                        <p>I love design and coding. Front-end web development allows me to create and solve problems with both skills. It is a vast world to be explored and I’m hoping to become part of it. It may seem that most of my past experiences are unrelated but I believe my diverse education and work background can help me understand clients in different fields and manage a variety of situations. </p>
                    </article>

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
                            <li>InVision</li>
                        </ul>
                    </div>

                    <div className="dev-tools">
                        <h3>Development</h3>
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3, Sass</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>PHP</li>
                            <li>WordPress</li>
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
