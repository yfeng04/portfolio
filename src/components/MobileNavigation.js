import NavLinks from './NavLinks';
import {useState} from 'react';
import {HiMenuAlt1, HiX} from 'react-icons/hi';
//import { motion, AnimatePresence } from "framer-motion";

const MobileNavigation = () => {

    const [open, setOpen]= useState(false);

    const menuicon = <HiMenuAlt1 className="menuicon" onClick={()=>setOpen(!open)}/>
    const closeicon = <HiX className="closeicon" onClick={()=>setOpen(!open)}/>
  
    
    return (
        <>
        {open ? closeicon : menuicon}
        <nav className={open ? 'mobile-navigation active': 'mobile-navigation'}>
           
            <NavLinks />        
            
            {/* {open && <NavLinks/>} */}

            {/* mobile navigation with smooth open effect */}

            {/* <AnimatePresence initial={false} exitBeforeEnter> */}
            {/* {open && 
            (<div className={open ? 'menu active': 'menu'}
                // initial={{x: -250}}
                // animate={{x: 0}}
                // exit={{x: -100}}
                // initial={{opacity: 0}}
                // animate={{opacity: 1}}
                // exit={{opacity: 0}}
                // transition={{duration: 0.5, ease: 'easeInOut'}}
            >
                <NavLinks />        
            </div>) */}
            {/* }  */}
            {/* </AnimatePresence> */}
        </nav>

        </>
    );
}

export default MobileNavigation;
