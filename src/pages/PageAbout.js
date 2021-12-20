import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { motion } from "framer-motion";

function PageAbout() {
    
    window.scrollTo(0, 0);

    const [response, setResponse] = useState('');

    useEffect(() => {
		document.title = `About | Yingying Feng`;

        const fetchContent = async () => {
            const res = await axios (`https://yingyingfeng.com/portfolio-backend/wp-json/wp/v2/pages/70`);
            
            // console.log(res.data.acf);
            setResponse(res.data.acf);
           
        }
      
        fetchContent();

	}, []);

    function createMarkup(content) {
        return {__html: content};
      }

    return (
        <motion.div 
            className="page"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
        
            <Header />
            
        <div className="content-wrapper">
            <main className="about">
                <section className="welcome">
                    {response && <img className="profile-img" src={response.image} alt="Profile"/>}
                    <article className="intro">
                        {response && <h1>{response.intro_title}</h1>}
                        <div dangerouslySetInnerHTML={createMarkup(response.intro_content)} />
                    </article>
                </section>

                <section className="toolkit">
                    {response && <h2>{response.toolkit_title}</h2>}
                    <div className="design-tools">
                        <h3>Design</h3>
                        <ul>
                            {response ? response.design_tools.map((item, id) => 
                            <li key={id}>{item.skill}</li> ) : ''}
                        </ul>
                        
                    </div>

                    <div className="dev-tools">
                        <h3>Development</h3>
                         <ul>
                            {response ? response.dev_tools.map((item, id) => 
                            <li key={id}>{item.skill}</li> ) : ''}
                        </ul>
                    </div>
                </section>

                <Contact />
            </main>
            <Footer />
        </div>
        </motion.div>
    )
}

export default PageAbout;
