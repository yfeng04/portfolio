import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../images/logo.png';
import colors from '../../images/portfolio-palette.png';
import mockup from '../../images/portfolio-mockup.png';
import illustration1 from '../../images/gradient-outline-logo-02.png';
import illustration2 from '../../images/profile-img.png';
import folder from '../../images/folder.png';
import code from '../../images/code.png';
import code1 from '../../images/code-1.png';

function PortfolioAccordion() {

    const [isActive01, setIsActive01] = useState(false); 
    const [isActive02, setIsActive02] = useState(false); 
    const [isActive03, setIsActive03] = useState(false); 
    const [isActive04, setIsActive04] = useState(false); 

    const variants ={
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      }
    
    const transition = {
        duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98]
    }

    return (
        
        <div>
            <div className="accordion-item planning">
                <div className="accordion-title" onClick={() => setIsActive01(!isActive01)}>
                    <h2>Research & Planning</h2>
                    <span >
                        {isActive01 ? <FaMinus/> : <FaPlus/>}
                    </span>
                </div>

                <AnimatePresence initial={false}>
                {isActive01 && 
                (<motion.div
                      className = "accordion-content"
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={variants}
                      transition={transition}
                    >
                      <p>Before starting on this project, I researched multiple students and professionals portfolio websites in the field of web development and design. For websites that I visited, I noted down some inspirational design and functional elements which can be implemented in my website. As I have built a landing page before using the hard coding approach. I wanted to do something different on this project. I decided to use React for this time. This gives me a chance to get more practice on React and I can easily implement some animation effects by using the existing library.   </p>

                    </motion.div>)}
                </AnimatePresence>
            </div>

            <div className="accordion-item design portfolio">
                <div className="accordion-title" onClick={() => setIsActive02(!isActive02)}>
                    <h2>Design</h2>
                    <span>{isActive02 ? <FaMinus/> : <FaPlus/>}</span>
                </div>
                
                <AnimatePresence initial={false}>
                {isActive02 && 

                (<motion.div 
                    className="accordion-content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={variants}
                    transition={transition}>

                    <h3>Logo</h3>
                    <img className="logo" src={logo} alt="Site Logo" />
                    
                    <h3>Color</h3>
                    <img className="palette" src={colors} alt="Colour Palette" />

                    <h3>Typography</h3>
                    <p>I used Lato Bold for heading text and Lato Regular for body text.</p>

                    <h3>Images</h3>
                    <div className="image-container">
                    <img className="image" src={illustration1} alt="Illustrations" />
                    <img className="image" src={illustration2} alt="Illustrations" />
                    </div>
                    <p className="image-text">I created these two graphics to decorate the landing page and about page. </p>

                    <h3>High-Fidelity Mockup</h3>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />

                
                </motion.div>)}

                </AnimatePresence>
            </div>

            <div className="accordion-item dev portfolio">
                <div className="accordion-title" onClick={() => setIsActive03(!isActive03)}>
                    <h2>Development</h2>
                    <span>{isActive03 ? <FaMinus/> : <FaPlus/>}</span>
                </div>
                <AnimatePresence initial={false}>
                {isActive03 && (
                <motion.div 
                    className="accordion-content"
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={variants}
                    transition={transition}>
                    <h3>React Folder Setup</h3>
                    <p>Simialr to other projects, I firsly worked on the functional parts of the website then moved onto styling. When working with React, I always found it hard to look for the components. Therefore, for this project, I decided to plan out the content and components and created relavent folders before doing any coding. Below is how I set up the folders for this project. </p>
                    <img className="folder" src={folder} alt="React Folder Structure" />
                   

                    <h3>Animation</h3>
                    <p>To make the site more user-friendly, I implemented some simple animations by using <a target="_blank" rel="noreferrer" href="https://www.framer.com/motion/">Framer Motion</a> and <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-scroll">React Scroll</a>. A smooth page transition is achieved by simply setting the opacity attribute on page load and exit. I added a scrolling effect for the pages with a contact section so that it can be directed to the bottom more smoothly. Below is a code snippet of how I implemented smooth page transitions.</p>
                    
                    <img className="animation-1" src={code} alt="Code Snippet" />
                    <img className="animation-1" src={code1} alt="Code Snippet" />
                
                    
                </motion.div>)}
                </AnimatePresence>
            </div>

            <div className="accordion-item reflection portfolio">
                <div className="accordion-title" onClick={() => setIsActive04(!isActive04)}>
                    <h2>Reflections</h2>
                    <span>{isActive04 ? <FaMinus/> : <FaPlus/>}</span>
                </div>
                
                <AnimatePresence initial={false}>
                {isActive04 && ( 
                <motion.div 
                    className="accordion-content"
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={variants}
                    transition={transition}>
                    
                    <p>This project has been a good learning experience for me. I got to try out a few React libraries and had a lot of fun playing around different functionalities. Overall, I'm satisfied of what I've achieved so far for both functionality and design. When it comes to the final stage of testing, I noticed React applications have limited capabilities for search engine optimization (SEO). I did some research on this topic and found that Next.js is a better solution for SEO. I will continue to polish the site and probably move it to Next.js when the program is finished. </p>
                </motion.div>)}
                </AnimatePresence>
            </div>
        </div>

       
    )
}

export default PortfolioAccordion;
