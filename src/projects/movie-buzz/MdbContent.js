import mockup from '../../images/mdb-mockup.png';

function MdbContent() {

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
                        <h3>API</h3>
                        <p>Data was fetched through The Movie Database API, which allows dynamic display of current movie information. Users can access the movie data such as movie title, release date and overview for any single movie selected. </p>
                    </article>

                    <article>
                        <h3>Local Storage & Global Hook</h3>
                        <p>Users can keep track of their favourite movies by storing them in the browser. This was achieved by using local storage and a third party hook called global hook.</p>
                    </article>

                    <article>
                        <h3>Sort Function</h3>
                        <p>On the home page, users can browse the movies by popularity, ratings, currently playing, and upcoming by clicking through the sort navigation.</p>
                    </article>

                    <article>
                        <h3>Load More Paginiation</h3>
                        <p>Each page displays 20 movies by default. Users can click the "load more" button to view more movie data for each sort category.</p>
                    </article>

                    <article>
                        <h3>Search Function</h3>
                        <p>A search page is created for users to look for a specific movie. Movies will be filtered and displayed as users type in the keywords.</p>
                    </article>

                    <article>
                        <h3>Star Rating</h3>
                        <p>Using a third-party component to create a five-star rating scale. Numeric movie ratings fetched from API can be dynamically translated into a star format for better visual perception.</p>
                    </article>
            </section>
            
            {/* Development Process */}
            <section className="project-item process">
                <h2>Development Process</h2>
                <article>
                    <h3>Design</h3>
                    <p>The design concept is originated from a dark movie theatre, with neon light gradient effects to add a bit of a retro touch.</p>
                    <img className="mockup" src={mockup} alt="High-Fidelity Mockup" />
                    <div className="content external-links prototype ">
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e119967d-0e90-4db2-89da-7d10ed09ff1c-b44a/">View Desktop Prototype</a>
                        <a target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/1c9b5906-5a64-4576-a501-dee09c66b407-49c8/">View Mobile Prototype</a>
                    </div> 
                </article>

                <article>
                    <h3>Development</h3>
                    <p>I started by building a static version of React app, followed by fetching data from the external API (The Movie Database) to dynamically generate the content. After that, I used globalHook and localStorage to store the “favourite movie” data and made it accessible in the favourite page. When the functional part was completed, I moved onto styling by using Sass. Variables and mixins that can be used globally across the site were created.</p>
                </article>
 
            </section>

            {/* Reflections */}
            <section className="project-item reflection capstone">
                <h2>Reflections</h2>
                 <p>This is my first React project completed at school. There were a few functionalities that I wasn't able to achieve during that time. After completion of the program, I had a chance to go back and managed to implement some extra features. I'm really happy with the end result now :)</p>
            </section>
        </>
       
    )
}

export default MdbContent;
