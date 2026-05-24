function GalleryPreview() {
        const galleries = [
        {
            title: "Weddings",
            description: "Elegant celebrations designed with timeless detail.",
        },
        {
            title: "Birthdays",
            description: "Personalized parties created around your vision.",
        },
        {
            title: "Baby Showers",
            description: "Soft, meaningful moments styled with care.",
        },
        {
            title: "Private Events",
            description: "Custom experiences for intimate gatherings.",
        },
        ];
    
        return (
        <section id="gallery" className="gallery-section">
            <p className="eyebrow center">Featured Galleries</p>
            <h2>Celebrations Designed With Style</h2>
            <p className="gallery-intro">
            Explore curated event styles and inspiration created for memorable
            moments.
            </p>
    
            <div className="gallery-grid">
            {galleries.map((gallery) => (
                <article className="gallery-card" key={gallery.title}>
                <div className="gallery-image"></div>
                <div className="gallery-content">
                    <h3>{gallery.title}</h3>
                    <p>{gallery.description}</p>
                </div>
                </article>
            ))}
            </div>
        </section>
        );
    }

export default GalleryPreview;