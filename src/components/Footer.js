import { FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer >
            <div className="social-links">
                <a target="_blank" rel="noreferrer" href="mailto:ffeng0304@hotmail.com"><FaRegEnvelope/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yingying-f-4b836898/" ><FaLinkedinIn/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" ><FaGithub/></a>
            </div>
            <p>&copy; 2021 | Yingying Feng</p>
        </footer>
    )
}

export default Footer;
