import CreatorAtWork from "../assets/images/CreatorAtWork.png";

function About() {
        return (
            <section id="about" className="about-section">
                <div className="about-image">
                <div className="about-image">
                    <img
                        src={CreatorAtWork}
                        alt="Ala Rey Studios Creator"
                        className="about-photo"
                    />
                </div>
                </div>
        
                <div className="about-content">
                <p className="eyebrow">About Ala Rey Studios</p>
        
                <h2>Creating Moments That Matter</h2>
        
                <p>
                    Ala Rey Studios is built around creativity, thoughtful planning, and
                    meaningful celebrations. Every event is designed to feel personal,
                    elegant, and memorable.
                </p>
        
                <p>
                    From intimate gatherings to styled celebrations, the goal is to bring
                    each client’s vision to life with care, organization, and beautiful
                    design.
                </p>
        
                <a href="#contact" className="primary-btn">
                    Learn More
                </a>
                </div>
            </section>
        );
    }
    
export default About;