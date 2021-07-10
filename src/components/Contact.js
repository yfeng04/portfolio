import { HiArrowCircleUp} from 'react-icons/hi';
import { animateScroll as scroll} from 'react-scroll';

function Contact() {
    return (
        <div>
            <div id="contact">
                <h1>Let's Connect</h1>
                <p>If you are interesed in collaborating on a project or if you have any questions, please feel free to contact me.</p>

                <div className="contact-social-links">
                    <a target="_blank" rel="noreferrer" href="mailto:ffeng0304@hotmail.com">Email</a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yingying-f-4b836898/" >LinkedIn</a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" >Github</a> 
                </div>
            </div>

            <div className="top-icon" onClick={()=> scroll.scrollToTop()}>
            <HiArrowCircleUp/>
            </div>
        </div>
    )
}

export default Contact;