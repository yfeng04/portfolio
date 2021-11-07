import mockup from '../../images/mdb-mockup.png';

function MdbAccordion() {

    return (
        
        <>
            {/* Development Stack */}
            <section className="project-item">
                <h2>Development Stack</h2>
                <ul className="tools">
                    <li>React</li>
                    <li>Sass</li>
                    <li>Adobe XD</li>
                </ul>
               
            </section>
                
            {/* Key Features */}
            <section className="project-item features">
                <h2>Key Features</h2>
                    <article>
                        <h3>Local Storage & Global Hook</h3>
                        <p>Users can keep track of their favourite movies by storing them in the browser. This was achieved by using local storage and a third party hook called global hook.</p>
                    </article>

                    <article>
                        <h3>API</h3>
                        <p>Data was fetched through The Movie Data Base API, which allows dynamic display of current movie information. Users can access the movie data such as movie title, release date and overview. </p>
                    </article>

                    <article>
                        <h3>Sort Function</h3>
                        <p>On the home page, users can browse the movies by popularity, ratings, currently playing, and upcoming. A movie filter allows the users to toggle between popular, top-rated, now playing, upcoming. The different filters will have a different call to the API to get a unique list of movies. Two responsive filter design that fits well with both mobile and desktop mode.</p>
                    </article>

    
            </section>
            
            {/* Development Process */}
            <section className="project-item process">
                <h2>Development Process</h2>

                {/* <article>
                    <h3>Research & Planning</h3>
                    <p>In this phase, we discussed about the purpose of the site and target audience of the business, and researched potential competitors’ websites to get inspirations for both design and functionality components. As this is a team project, we also drafted a team collaboration plan for more effective communication across the team.</p>
                </article> */}
                
                <article>
                    <h3>Design</h3>
                    <p>The design is based on a dark movie theatre, with neon light effects to give the design a bit of a retro touch.</p>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />
                    <div className="content external-links prototype ">
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e119967d-0e90-4db2-89da-7d10ed09ff1c-b44a/">View Desktop Prototype</a>
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/1c9b5906-5a64-4576-a501-dee09c66b407-49c8/">View Mobile Prototype</a>
                    </div> 

                </article>

                <article>
                    <h3>Development</h3>
                    <p>I started by building a static version of React app, followed by fetching data from the external API (The Movie Database) to dynamically generate the content. After that, I used globalHook and localStorage to store the “favourite movie” data and made it accessible in the favourite page. <br/> When the React part was completed, I moved onto styling by using Sass. I firstly created a few variables and mixins that can be used globally across the site then styled the site page by page.</p>
                </article>
 
            </section>

            {/* Reflections */}
            <section className="project-item reflection capstone">
                <h2>Reflections</h2>
                 <p>Overall, I'm pretty satisfied with the end result. The final site looks 90% close to the mockup and I'm managed to achieve the basic functionalities for a movie database. This is the first React App that I build on my own. There are quite a few things that can be improved. For example, the released date can be formated better and the movie rating can be displayed in a different way.</p>
                
            </section>
        </>
       
    )
}

export default MdbAccordion;
