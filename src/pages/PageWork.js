import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { motion } from "framer-motion";

function PageWork() {
    
    useEffect(() => {
		document.title = `Work | Yingying Feng`;
	}, []);

    window.scrollTo(0, 0);

    return (
        <motion.div 
            className="page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
        
        <Header/>

        <div className="content-wrapper">
            <main className="work">
                <Projects/>
                <Contact />
            </main>
            <Footer/>
        </div>
      
        </motion.div>
    )
}

export default PageWork;
