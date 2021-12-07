import { FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer >
            <div className="social-links">
                <a target="_blank" rel="noreferrer" href="mailto:feng.yingying@hotmail.com"><FaRegEnvelope/></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yingyingfeng/" ><FaLinkedinIn/></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/yfeng04" ><FaGithub/></a>
            </div>
            <p>&copy; 2021 | Yingying Feng</p>
        </footer>
    )
}

export default Footer;
