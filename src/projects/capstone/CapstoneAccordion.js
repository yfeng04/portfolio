import { useState, useEffect } from 'react';
import { FaPlus, FaMinus} from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import logo from '../../images/farmtoplate-logo.png';
import colors from '../../images/farmtoplate-palette.png';
import mockup from '../../images/farmtoplate-mockup.png';

function CapstoneAccordion() {

    useEffect(() => {
		document.title = `Farm to Plate | Yingying Feng`;
	}, []);

    const [isActive01, setIsActive01] = useState(false); 
    const [isActive02, setIsActive02] = useState(false); 
    const [isActive03, setIsActive03] = useState(false); 
    const [isActive04, setIsActive04] = useState(false); 

    // animation properties
    const variants ={
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      }
    
    const transition = {
        duration: 0.8, ease: 'easeInOut'
    }

    return (
        
        <div>
            {/* research and planning */}
            <div className="accordion-item planning">
                <motion.div 
                className="accordion-title" 
                onClick={() => setIsActive01(!isActive01)}>
                    <h2>Research & Planning</h2>
                    <span >{isActive01 ? <FaMinus/> : <FaPlus/>}</span>
                </motion.div>

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
                      <p>In this phase, we discussed about the purpose of the site and target audience of the business, and researched potential competitors’ websites to get inspirations for both design and functionality components. As this is a team project, we also drafted a team collaboration plan for more effective communication across the team.</p>
                    </motion.div>)}
                </AnimatePresence>
            </div>
                
            {/* design */}
            <div className="accordion-item design">
                <motion.div 
                className="accordion-title" 
                //whileHover={{'background-color': '#efefef'}}
                onClick={() => setIsActive02(!isActive02)}>
                    <h2>Design</h2>
                    <span>{isActive02 ? <FaMinus/> : <FaPlus/>}</span>
                </motion.div>
                
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
                    <p>We decided that the brand values are health, fresh, organic, environmentally friendly packaging, socially responsible, sustainable, transparent, honest, and local.Therefore, the website design will focus on reflecting a refreshing, positive, and bright vibe.</p>

                    <h3>Logo</h3>
                    <img className="logo" src={logo} alt="Site Logo" />
                    
                    <h3>Color</h3>
                    <img className="palette" src={colors} alt="Colour Palette" />

                    <h3>Typography</h3>
                    <p>We used Lato Bold for heading text and Lato Regular for body text.</p>

                    <h3>High-Fidelity Mockup</h3>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />

                
                </motion.div>)}

                </AnimatePresence>
            </div>

            {/* development */}
            <div className="accordion-item dev">
                <motion.div 
                className="accordion-title"
                onClick={() => setIsActive03(!isActive03)}>
                    <h2>Development</h2>
                    <span>{isActive03 ? <FaMinus/> : <FaPlus/>}</span>
                </motion.div>

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
                    <h3>Workflow: Content Plan ➝ Functional Website ➝ Styling</h3>
                    <p>We started the project by firstly developing a content plan. Next, we entered the content and configured WooCommerce settings in the backend. Once the content was ready, we worked on the PHP files to output the content to the front end. When the functional website is completed, we moved onto styling by using Sass. We followed the high-fidelity mock-up and used a mobile-first approach, where we styled the mobile screen first followed by tablet and desktop screens.</p>

                    <h3>Featured Plugins Used: </h3>
                    <p>Advanced Custom Fields Pro (Repeater, Google Map), WooCommerce (Subscription).</p>
                </motion.div>)}
                </AnimatePresence>
            </div>

            {/* reflections */}
            <div className="accordion-item reflection capstone">
                <motion.div 
                className="accordion-title" 
                onClick={() => setIsActive04(!isActive04)}>
                    <h2>Reflections</h2>
                    <span>{isActive04 ? <FaMinus/> : <FaPlus/>}</span>
                </motion.div>
                
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
                    
                    <p>This project is still in progress. Reflections will be added when the project has been completed.</p>
                </motion.div>)}
                </AnimatePresence>
            </div>
        </div>

       
    )
}

export default CapstoneAccordion;
