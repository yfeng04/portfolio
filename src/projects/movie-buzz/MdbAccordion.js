import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../images/moviebuzz-logo.png";
import mockup from '../../images/moviebuzz-mockup.png';

function MdbAccordion() {

    //const [isActive01, setIsActive01] = useState(false); 
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
            {/* <div className="accordion-item planning">
                <div className="accordion-title">
                    <h2>Research & Planning</h2>
                    <span onClick={() => setIsActive01(!isActive01)}>
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
                      <p></p>
                    </motion.div>)}
                </AnimatePresence>
            </div> */}

            <div className="accordion-item design">
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
                    <h3>Branding</h3>
                    <p>The design is based on a dark movie theatre, with neon light effects to give the design a bit of a retro touch.</p>

                    <h3>Logo</h3>
                    <img className="logo" src={logo} alt="Site Logo" />

                    <h3>Typography</h3>
                    <p>Heading and Navigation: Montserrat <br/>Body: Source Sans Pro</p>

                    <h3>High-Fidelity Mockup</h3>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />
                
                </motion.div>)}

                </AnimatePresence>
            </div>

            <div className="accordion-item dev mdb">
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
                
                    <p>I started by building a static version of React app, followed by fetching data from the external API (The Movie Database) to dynamically generate the content. After that, I used globalHook and localStorage to store the “favourite movie” data and made it accessible in the favourite page. </p> 
                    
                    <p>When the React part was completed, I moved onto styling by using Sass. I firstly created a few variables and mixins that can be used globally across the site then styled the site page by page.</p>
                </motion.div>)}
                </AnimatePresence>
            </div>

            <div className="accordion-item reflection mdb">
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
                    
                    <p>Overall, I'm pretty satisfied with the end result. The final site looks 90% close to the mockup and I'm managed to achieve the basic functionalities for a movie database. </p>
                    <p>This is the first React App that I build on my own. There are quite a few things that can be improved. For example, the released date can be formated better and the movie rating can be displayed in a different way. </p>
                </motion.div>)}
                </AnimatePresence>
            </div>
        </div>

       
    )
}

export default MdbAccordion;
