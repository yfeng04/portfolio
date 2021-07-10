import NavLinks from './NavLinks';
import {useState} from 'react';
import {HiMenuAlt1, HiX} from 'react-icons/hi';

const MobileNavigation = () => {

    const [open, setOpen]= useState(false);

    const menuicon = <HiMenuAlt1 className="menuicon" onClick={()=>setOpen(!open)}/>
    const closeicon = <HiX className="closeicon" onClick={()=>setOpen(!open)}/>
  
    
    return (
        <>
        {open ? closeicon : menuicon}
        <nav className={open ? 'mobile-navigation active': 'mobile-navigation'}>
            <NavLinks />        
        </nav>

        </>
    );
}

export default MobileNavigation;
