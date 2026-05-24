function Services() {
        const services = [
        {
            title: "Full Service Planning",
            description: "From concept to celebration, every detail is planned with care.",
        },
        {
            title: "Design & Styling",
            description: "Beautiful, intentional designs that bring your vision to life.",
        },
        {
            title: "Day-of Coordination",
            description: "Relax and enjoy while every moment is managed smoothly.",
        },
        {
            title: "Custom Experiences",
            description: "Unique touches and curated experiences designed for every event.",
        },
        ];
    
        return (
            <section id="services" className="services-section">
                <p className="eyebrow center">Our Services</p>
                <h2>Thoughtful Planning. Flawless Execution.</h2>
        
                <div className="services-grid">
                {services.map((service) => (
                    <article className="service-card" key={service.title}>
                    <div className="service-icon">✦</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    </article>
                ))}
                </div>
            </section>
        );
}

export default Services;