import mockup from '../../images/portfolio-mockup.png';
import landingimg from '../../images/3dgraphic.png';
import pageTransition from '../../images/page-transition.gif';

function PortfolioAccordion() {
    return (    
        <>
            {/* Development Stack */}
            <section className="project-item">
                <h2>Development Stack</h2>
                <ul className="tools">
                    <li>React</li>
                    <li>Framer Motion</li>
                    <li>Sass</li>
                    <li>Adobe XD</li>
                </ul>
               
            </section>
                
            {/* Key Features */}
            <section className="project-item features">
                <h2>Key Features</h2>
                    <article>
                        <h3>Smooth Page Transition</h3>
                        <p>Framer Motion and React Scroll were used to create smooth page transition/scrolling effects.</p>
                        <img className="feature-img gif" src={pageTransition} alt="Smooth Page Transition" />
                    </article>

                    <article>
                        <h3>Landing Page Design</h3>
                        <p>Graphics with 3D effects were made with Adobe Illustrator to highlight personal portfolio site.</p>
                        <img className="feature-img" src={landingimg} alt="Landing Page Images" />
                    </article>
    
            </section>
            
            {/* Development Process */}
            <section className="project-item process">
                <h2>Process</h2>

                <article>
                    <h3>Research & Planning</h3>
                    <p>Before starting on this project, I researched multiple students and professionals portfolio websites in the field of web development and design. For websites that I visited, I noted down some inspirational design and functional elements which can be implemented in my website. As I have built a landing page before using the hard coding approach. I wanted to do something different on this project. I decided to use React for this time. This gives me a chance to get more practice on React and I can easily implement some animation effects by using the existing library.</p>
                </article>
                
                <article>
                    <h3>Design</h3>
                    <p>As this is a website that showcases my work and personality, I chose to use a pastel colour scheme which gives both a calming and uplifting effect. The whole idea is to create a clean UI with approprite usage of white space to effectively highlight and deliver the messages that I wanted to say.</p>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />
                    <div className="content external-links prototype ">
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e119967d-0e90-4db2-89da-7d10ed09ff1c-b44a/">View Desktop Prototype</a>
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/1c9b5906-5a64-4576-a501-dee09c66b407-49c8/">View Mobile Prototype</a>
                    </div> 

                </article>

                <article>
                    <h3>Development</h3>
                    <p>Similar to other projects, after design was finalized, I firstly worked on the functional parts of the website then moved onto styling. Since there are similar sections across the site, I used a data-driven approach by creating components that can be reused and feeding in data that has an organized structure. When working with React, I always found it hard to look for the components. Therefore, in this project, I decided to plan out the content and components and created relevant folders before doing any coding. </p>
                </article>
 
            </section>

            {/* Reflections */}
            <section className="project-item reflection capstone">
                <h2>Reflections</h2>
                 <p>This project has been a good learning experience for me. I got to try out a few React libraries and had a lot of fun playing around different functionalities. Overall, I'm satisfied of what I've achieved so far for both functionality and design. When it comes to the final stage of testing, I noticed React applications have limited capabilities for search engine optimization (SEO). I did some research on this topic and found that Next.js is a better solution for SEO. I will continue to polish the site and probably move it to Next.js when the program is finished.</p>
                
            </section>
        </>

       
    )
}

export default PortfolioAccordion;
