import { useEffect } from 'react';
import mockup from '../../images/ftp-mockup.png';
import login from '../../images/login.gif';
import cpt from '../../images/cpt.png';
import week from '../../images/weekly-menu.gif';
import theme from '../../images/custom-theme.gif';
import woocommerce from '../../images/woocommerce.gif';
import acf from '../../images/acf.png';
import wireframe from '../../images/ftp-wireframe.png';

function CapstoneContent() {

    useEffect(() => {
		document.title = `Farm to Plate | Yingying Feng`;
	}, []);

    return (
        
        <div>
            {/* Development Stack */}
            <section className="project-item">
                <h2>Development Stack</h2>
                <ul className="tools">
                    <li>WordPress + WooCommerce</li>
                    <li>Sass</li>
                    <li>JavaScript</li>
                    <li>Adobe XD</li>
                </ul>
               
            </section>
                
            {/* Key Features */}
            <section className="project-item features">
                <h2>Key Features</h2>
                    <article>
                        <h3>Custom Theme</h3>
                        <p>This website was built with a custom WordPress theme. All the design and styling were created on our own.</p>
                        <img className="feature-img" src={theme} alt="Custom Theme" />
                    </article>

                    <article>
                        <h3>Custom Log-In & 404 Page</h3>
                        <p className="text">Log-in and 404 pages were customized to match the site theme.</p>
                        <img className="feature-img" src={login} alt="Custom Log-in" />
                    </article>

                    <article>
                        <h3>Content Management</h3>
                        <p>Custom Post Types (CPT) were created to organize the content including dishes, testimonials and social media articles. To manage the dish categories, we created custom taxonomies to facilitate the display of weekly menus. ACF and block editor were used to manage the rest of content for the site. </p>
                        <img className="feature-img" src={cpt} alt="Content Management" />
                    </article>

                    <article>
                        <h3>Dynamic display of weekly menus</h3>
                        <p>Previous week, current week and next week menus were dynamically displayed by using PHP date functions. Since we used a “year-weeknumber” format in the backend to log the menu items, another set of codes were written to translate them in to a more human readable format.</p>
                        <img className="feature-img gif" src={week} alt="Weekly Menu Screen Captures" />
                    </article>

                    <article>
                        <h3>ACF Option</h3>
                        <p>In addition to the general ACF plugins, we also added an ACF options page to manage admit contents such as site logo images. It allows the data to be displayed on any page throughout the website.</p>
                        <img className="feature-img" src={acf} alt="ACF Option Captures" />
                    </article>

                    <article>
                        <h3>Custom Styling for WooCommerce Pages</h3>
                        <p>WooCommerces codes were edited to remove unwanted contents and add custom CSS styling.</p>
                        <img className="feature-img" src={woocommerce} alt="Custom WooCommerce Page" />
                    </article>
    
            </section>
            
            {/* Development Process */}
            <section className="project-item process">
                <h2>Development Process</h2>

                <article>
                    <h3>Research & Planning</h3>
                    <p>In this phase, we discussed about the purpose of the site and target audience of the business, and researched potential competitors’ websites to get inspirations for both design and functionality components. To facilitate with the coding process later on, we developed a content plan to list out the custom post types, taxonomies that would be used, as well as the information architechture and wireframe. As this is a team project, we also drafted a team collaboration plan for more effective communication across the team.</p>
                    <img className="mockup" src={wireframe} alt="Wireframe" />
                </article>
                
                <article>
                    <h3>Design</h3>
                    <p>We decided that the brand values are health, fresh, organic, environmentally friendly packaging, socially responsible, sustainable, transparent, honest, and local. Therefore, the website design focuses on reflecting a refreshing, positive, and bright vibe.</p>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />
                    {/* <div className="content external-links prototype ">
                        <a target="_blank" rel="noreferrer" href="#">View Interative Prototype</a>
                    </div>  */}

                </article>

                <article>
                    <h3>Development</h3>
                    <p>We firstly entered the content and configured the required plugins including WooCommerce settings on the backend. Once the content was ready, we worked on the PHP files to output the content to the front end. When the functional website is completed, we moved onto styling by using Sass. We followed the high-fidelity mock-up and used a mobile-first approach, where we styled the mobile screen first followed by tablet and desktop screens.</p>
                </article>
 
            </section>

            {/* Reflections */}
            <section className="project-item reflection capstone">
                <h2>Reflections</h2>
                <p>I was a bit worried when the team decided to pick a relatively complicated project from the list. Luckily through the team effort, we were able to find a way to solve the most important task which is to display the weekly menu dynamically. The coding process generally went smoothly. It didn’t take us long to solve the issues encountered during the process. In this project, we were not only able to revisit what we have learned from previous small projects, but also got to learn about how to set up and complete a website project from the concept to delivery. Aside from coding, we also got a chance to practice SEO, site performance, security, backup, and team collaboration. Although there were some functionalities that we weren't able to achieve due to the limitation of time, we're satisfied of what we have achieved in the final product.</p>
            </section>
        </div>

       
    )
}

export default CapstoneContent;
