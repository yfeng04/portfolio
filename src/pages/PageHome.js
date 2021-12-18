import { Link } from 'react-router-dom';
import homelogo from '../images/gradient-outline-logo-02.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

function PageHome() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, { 
            showCursor: true, 
            loop:       false,
            typeSpeed:  160,
            startDelay: 500,
            strings: ["Hi, I'm Yingying." ] })

    }, [])

    
    return (
        <motion.div 
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            >
            
            <div className="intro">
                <h1><span ref={textRef}></span></h1>
                <p>Front-End Web Developer & Designer</p>

                <div className='page-links'>
                    <Link to="/work" className="work-link">Work</Link>
                    <Link to="/about" className="work-link">About</Link>
                </div>

                <div className="social-links">
                    <a target="_blank" rel="noreferrer" href="mailto:feng.yingying@hotmail.com"><FaRegEnvelope/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yingyingfeng/" ><FaLinkedinIn/></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" ><FaGithub/></a>
                </div>
            </div>

            <motion.img 
            initial={{opacity: 0}}
            animate={{opacity: 1}} 
            transition={{delay: 1, duration: 0.8, ease: 'easeInOut'}}
            src={homelogo} 
            className="logo-image" alt="Site logo" />
        

        </motion.div>
    )
}

export default PageHome;
