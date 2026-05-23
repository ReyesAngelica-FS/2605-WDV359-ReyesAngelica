import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <div className="logo">ALA REY STUDIOS</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="header-btn">
          Inquire Now
        </a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">Elegant events. Unforgettable moments.</p>
            <h1>Ala Rey Studios</h1>
            <p className="hero-text">
              Luxury event planning and design for life’s most beautiful
              celebrations.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-btn">
                Start Planning
              </a>
              <a href="#gallery" className="secondary-btn">
                View Gallery →
              </a>
            </div>
          </div>

          <div className="hero-image">
            <span>Hero Image Placeholder</span>
          </div>
        </section>

        <section id="services" className="services-section">
          <p className="eyebrow center">Our Services</p>
          <h2>Thoughtful Planning. Flawless Execution.</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Full Service Planning</h3>
              <p>From concept to celebration, every detail is handled.</p>
            </div>

            <div className="service-card">
              <h3>Design & Styling</h3>
              <p>Intentional designs that bring your vision to life.</p>
            </div>

            <div className="service-card">
              <h3>Day-of Coordination</h3>
              <p>Relax and enjoy while every moment is managed.</p>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <p className="eyebrow center">Featured Galleries</p>
          <h2>Celebrations We’ve Designed</h2>

          <div className="gallery-grid">
            <div className="gallery-card">Weddings</div>
            <div className="gallery-card">Social Events</div>
            <div className="gallery-card">Corporate Events</div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-image">
            <span>About Image Placeholder</span>
          </div>

          <div className="about-content">
            <p className="eyebrow">About Ala Rey Studios</p>
            <h2>Creating Moments That Matter</h2>
            <p>
              Ala Rey Studios creates thoughtful, beautiful, and personal event
              experiences. Our goal is to help clients celebrate meaningful
              moments with style, organization, and creativity.
            </p>
          </div>
        </section>

        <section id="contact" className="cta-section">
          <h2>Ready to Start Planning Your Event?</h2>
          <p>Let’s create something unforgettable together.</p>
          <a href="mailto:hello@alareystudios.com" className="primary-btn">
            Inquire Now
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Ala Rey Studios. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;